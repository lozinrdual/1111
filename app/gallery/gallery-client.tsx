"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { motion } from "framer-motion"

export default function GalleryClientPage() {
  const [hoveredId, setHoveredId] = useState<string | null>(null)
  const router = useRouter()

  const projects = [
    {
      id: "1",
      slug: "Finure-Health",
      title: "Finure Health",
      category: "Health Tech Branding",
      client: "Finure Health Inc.",
      year: "2024",
      services: ["Brand Identity", "UI/UX Design", "Marketing Materials"],
      image: "https://05nt8uhx23vzdvuu.public.blob.vercel-storage.com/Thumbnail.jpg",
    },
    {
      id: "2",
      slug: "Trevora",
      title: "Trevora",
      category: "Trading Platform",
      client: "Trevora Trading",
      year: "2024",
      services: ["Logo Design", "Brand Strategy", "Digital Assets"],
      image: "https://dbz3qkxac4rgq1sq.public.blob.vercel-storage.com/Trevora%2001.jpg",
    },
    {
      id: "3",
      slug: "lozinr",
      title: "lOZ!NR",
      category: "Agency Branding",
      client: "Internal Project",
      year: "2023",
      services: ["Complete Rebrand", "Web Design", "Marketing"],
      image: "https://dbz3qkxac4rgq1sq.public.blob.vercel-storage.com/Lozinr-01.jpg",
    },
    {
      id: "4",
      slug: "rijq",
      title: "Rijq",
      category: "Food & Beverage",
      client: "Rijq Restaurant",
      year: "2023",
      services: ["Logo & Branding", "Packaging Design"],
      image: "https://q4bkxvdmgiqmmhbe.public.blob.vercel-storage.com/Frame%201.jpg",
    },
  ]

  return (
    <main className="min-h-screen bg-background">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="pt-20"
      >
        <div className="px-6 md:px-12 lg:px-24 py-12 md:py-16 lg:py-20">
          <motion.button
            onClick={() => router.back()}
            className="inline-flex items-center gap-2 text-foreground/60 hover:text-foreground transition-colors duration-300 mb-8 group"
            aria-label="Go back"
            whileHover={{ x: -4 }}
            transition={{ duration: 0.3 }}
          >
            <ArrowLeft size={18} className="transition-transform duration-300" />
            <span className="text-sm">Back</span>
          </motion.button>
        </div>

        <div className="px-6 md:px-12 lg:px-24 pb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-32"
          >
            <div className="flex items-start">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">Gallery</h1>
            </div>
            <div className="flex items-start">
              <p className="text-base md:text-lg text-foreground/70 leading-relaxed max-w-md">
                A collection of thoughtfully crafted brand identities and visual solutions. Each project represents our
                commitment to creating distinctive, meaningful designs that resonate with audiences and drive real
                results.
              </p>
            </div>
          </motion.div>
        </div>

        <div className="px-6 md:px-12 lg:px-24 pb-20 md:pb-32">
          <div className="space-y-32">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.12,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                {/* Title and Services Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-8">
                  {/* Left: Bold Title */}
                  <div className="flex items-start">
                    <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">{project.title}</h2>
                  </div>

                  {/* Right: Services List */}
                  <div className="flex items-start">
                    <div className="w-full">
                      <h3 className="text-foreground/60 text-sm md:text-base font-semibold uppercase tracking-wide mb-4">
                        Services:
                      </h3>
                      <ul className="space-y-2">
                        {project.services.map((service, idx) => (
                          <li key={idx} className="text-base md:text-lg text-foreground/80 leading-relaxed">
                            {service}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Featured Image */}
                <Link href={`/gallery/${project.slug}`} className="group block">
  <motion.div
    className="relative aspect-[16/9] w-full max-w-[420px] overflow-hidden rounded-lg bg-muted/30"
    animate={{
      scale: hoveredId === project.id ? 0.98 : 1,
    }}
    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
    onMouseEnter={() => setHoveredId(project.id)}
    onMouseLeave={() => setHoveredId(null)}
  >
    <motion.div className="absolute inset-0 bg-gradient-to-br from-[#ff3b00]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none" />

    <motion.img
      src={project.image || "/placeholder.svg"}
      alt={project.title}
      loading="lazy"
      className="w-full h-full object-cover"
      animate={{
        scale: hoveredId === project.id ? 1.08 : 1,
      }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    />
  </motion.div>
</Link>


              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </main>
  )
}
