"use client"

import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"

interface Project {
  id: string
  title: string
  category: string
  industry: string
  image: string
  slug: string
  tags?: string[]
}

const allProjects: Project[] = [
  {
    id: "1",
    title: "lOZ!NR",
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

interface WorkThumbnailsProps {
  filteredProjects: Project[]
}

export function WorkThumbnails({ filteredProjects }: WorkThumbnailsProps) {
  const [, setHoveredIndex] = useState<number | null>(null)

  return (
    <section className="py-12 md:py-16 lg:py-20 px-3 md:px-6 lg:px-8">
      <style>{`
        .work-thumbnail-image {
          position: relative;
          overflow: hidden;
        }

        /* New hover system - removed overlay, added bottom shadow gradient */
        .thumbnail-hover-content {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          padding: 2rem;
          opacity: 0;
          transition: opacity 0.3s ease;
          pointer-events: none;
        }

        .group:hover .thumbnail-hover-content {
          opacity: 1;
        }

        .hover-left {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          z-index: 20;
        }

        .hover-title {
          font-size: 18px;
          font-weight: 600;
          color: white;
        }

        .hover-designer {
          font-size: 14px;
          font-weight: 400;
          color: rgba(255, 255, 255, 0.8);
        }

        .hover-cta {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0.75rem 1.5rem;
          background-color: white;
          border-radius: 9999px;
          font-size: 14px;
          font-weight: 600;
          color: black;
          cursor: pointer;
          transition: all 0.3s ease;
          z-index: 20;
        }

        .hover-cta:hover {
          background-color: rgba(255, 255, 255, 0.9);
          transform: scale(1.05);
        }

        /* Shadow gradient from bottom to top */
        .thumbnail-shadow-gradient {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 40%;
          background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.4) 100%);
          z-index: 10;
          opacity: 0;
          transition: opacity 0.3s ease;
          pointer-events: none;
        }

        .group:hover .thumbnail-shadow-gradient {
          opacity: 1;
        }
      `}</style>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-full mx-auto overflow-hidden">
        {filteredProjects.map((project, index) => (
          <ThumbnailCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </section>
  )
}

function ThumbnailCard({ project, index }: { project: any; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group overflow-hidden cursor-pointer flex flex-col"
      onClick={() => (window.location.href = `/gallery/${project.slug}`)}
    >
      <motion.div className="w-full overflow-hidden relative transition-all duration-100 aspect-16-10 work-thumbnail-image">
        <motion.img
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          loading="lazy"
          className="w-full h-full object-cover"
          animate={{ scale: 1 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        />
        <div className="thumbnail-shadow-gradient"></div>
        <div className="thumbnail-hover-content">
          <div className="hover-left">
            <div className="hover-title">{project.title}</div>
            <div className="hover-designer">addan akif</div>
          </div>
          <button className="hover-cta">click</button>
        </div>
      </motion.div>
    </motion.div>
  )
}

export { allProjects }
