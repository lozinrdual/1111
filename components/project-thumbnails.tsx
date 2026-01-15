"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { useScrollHeight } from "@/hooks/use-scroll-height"

interface Project {
  id: string
  title: string
  category: string
  image: string
  slug: string
  tags?: string[]
}

const projects: Project[] = [
  {
    id: "1",
    title: "Lozinr",
    category: "Logo & Branding",
    industry: "DESIGN",
    image: "https://dbz3qkxac4rgq1sq.public.blob.vercel-storage.com/Lozinr-01.jpg",
    slug: "lozinr",
    tags: ["Agency", "Branding", "Creative"],
  },
  {
    id: "2",
    title: "Luvena",
    category: "Logo & Branding",
    industry: "FOOD & BEVERAGE",
    image: "https://bq45eawil9xlp5ci.public.blob.vercel-storage.com/Luvena01.jpg",
    slug: "luvena",
    tags: ["Pizza", "Food", "Packaging"],
  },
  {
    id: "3",
    title: "Rijq",
    category: "Food & Bakery",
    industry: "BAKERY",
    image: "https://q4bkxvdmgiqmmhbe.public.blob.vercel-storage.com/Frame%201.jpg",
    slug: "rijq",
    tags: ["Food", "Bakery", "Branding"],
  },
  {
    id: "4",
    title: "Cnyf",
    category: "Crypto",
    industry: "CRYPTO",
    image: "https://guxjkdyjeyrscewv.public.blob.vercel-storage.com/Frame%208.jpg",
    slug: "cnyf",
    tags: ["Crypto", "Wallet", "Money"],
  },
]

const handleProjectClick = (slug: string) => {
  console.log(`[v0] Navigating to project: ${slug}`)
  window.location.href = `/gallery/${slug}`
}

export function ProjectThumbnails() {
  const [visibleProjects, setVisibleProjects] = useState<boolean[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const projectRefsArray = useRef<(HTMLDivElement | null)[]>([])

  const imageHeight = useScrollHeight({
    minHeight: 500,
    maxHeight: 550,
    scrollMultiplier: 0.3,
  })

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 800)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const observerOptions = {
      threshold: 0.2,
      rootMargin: "0px",
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = projectRefsArray.current.indexOf(entry.target as HTMLDivElement)
          if (index !== -1) {
            setVisibleProjects((prev) => {
              const newVisible = [...prev]
              newVisible[index] = true
              return newVisible
            })
            observer.unobserve(entry.target)
          }
        }
      })
    }, observerOptions)

    projectRefsArray.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => observer.disconnect()
  }, [])

  if (isLoading) {
    return (
      <section className="py-12 md:py-16 lg:py-20 px-3 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6 max-w-full mx-auto">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="animate-pulse">
              <div className="w-full h-[400px] md:h-[500px] bg-gray-800 rounded-xl mb-4"></div>
            </div>
          ))}
        </div>
      </section>
    )
  }

  return (
    <section className="py-12 md:py-16 lg:py-20 px-3 md:px-6 lg:px-8">
      <style>{`
        /* CHANGE: Option 3 - Clean floating tag system with subtle tilt effect */
        
        /* Image-first approach with minimal overlays */
        .thumbnail-image {
          transition: transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .group:hover .thumbnail-image {
          transform: scale(1.05) perspective(1000px) rotateX(2deg) rotateY(-1deg);
        }

        /* Floating category badge animates to top-right */
        .floating-badge {
          position: absolute;
          top: 1rem;
          right: 1rem;
          display: inline-block;
          padding: 0.5rem 1rem;
          background-color: rgba(255, 255, 255, 0.95);
          color: black;
          border-radius: 9999px;
          font-size: 11px;
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: -0.2px;
          z-index: 20;
          transform: translateY(-80px) rotate(-15deg);
          opacity: 0;
          transition: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .group:hover .floating-badge {
          transform: translateY(0) rotate(0deg);
          opacity: 1;
        }

        /* Subtle bottom overlay gradient */
        .thumbnail-overlay {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 60%;
          background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.3) 50%, rgba(0, 0, 0, 0.7) 100%);
          opacity: 0;
          transition: opacity 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
          z-index: 10;
        }

        .group:hover .thumbnail-overlay {
          opacity: 1;
        }

        /* Content positioned at bottom */
        .thumbnail-content {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          padding: 1.5rem;
          z-index: 20;
        }

        /* Title fades in from bottom */
        .content-title {
          font-size: 16px;
          font-weight: 500;
          color: white;
          letter-spacing: -0.5px;
          line-height: 1.2;
          transform: translateY(20px);
          opacity: 0;
          transition: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) 0.1s;
          max-width: 90%;
        }

        .group:hover .content-title {
          transform: translateY(0);
          opacity: 1;
        }

        /* Subtle border on hover */
        .thumbnail-border {
          position: absolute;
          inset: 0;
          border: 1px solid rgba(255, 255, 255, 0);
          
          transition: border-color 0.3s ease;
          z-index: 15;
          pointer-events: none;
        }

        .group:hover .thumbnail-border {
          border-color: rgba(255, 255, 255, 0.2);
        }

        /* Explore button at bottom-right */
        .explore-button {
          position: absolute;
          bottom: 1.5rem;
          right: 1.5rem;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 0.65rem 2rem;
          
          color: white;
          border: 1px solid white;
          border-radius: 9999px;
          font-size: 13px;
          font-weight: 500;
          cursor: pointer;
          transform: scale(0.8);
          opacity: 0;
          transition: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) 0.2s;
          z-index: 20;
        }

        .group:hover .explore-button {
          transform: scale(1);
          opacity: 1;
        }

        .explore-button:hover {
          background-color: transparent;
          color: white;
          transform: scale(1.08);
        }
      `}</style>
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6 max-w-full mx-auto overflow-hidden">
        {projects.map((project, index) => {
          const cardVisible = visibleProjects[index] || false

          return (
            <Link href={`/gallery/${project.slug}`} key={project.id}>
              <div
                ref={(el) => {
                  projectRefsArray.current[index] = el
                }}
                className="group overflow-hidden cursor-pointer"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="w-full relative overflow-hidden aspect-video">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    loading="lazy"
                    className="thumbnail-image w-full h-full object-cover"
                  />

                  <div className="thumbnail-overlay"></div>
                  <div className="thumbnail-border"></div>

                  {/* CHANGE: Floating category badge */}
                  <div className="floating-badge">{project.category}</div>

                  {/* CHANGE: Bottom content section with title and button */}
                  <div className="thumbnail-content">
                    <div className="content-title text-balance">{project.title}</div>
                    <button className="explore-button">Explore</button>
                  </div>
                </div>
              </div>
            </Link>
          )
        })}
      </div>
    </section>
  )
}
