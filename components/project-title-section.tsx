"use client"

import type { ReactNode } from "react"
import Image from "next/image"

interface ProjectTitleSectionProps {
  projectName: string
  services: string[]
  logo?: ReactNode
  galleryImages?: string[]
}

export function ProjectTitleSection({ projectName, services, logo, galleryImages }: ProjectTitleSectionProps) {
  return (
    <section className="w-full">
      {/* Title Section */}
      <div className="w-full py-16 md:py-24">
        <div className="max-w-full mx-auto px-3 md:px-7">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-10 md:items-start">
            {/* Left Column - Project Logo/Name */}
            <div className="flex items-start justify-start md:justify-end md:mr-6">
              {logo ? (
                <div className="w-full h-full flex items-center md:justify-end justify-start">{logo}</div>
              ) : (
                <h1 className="text-[85px] lg:text-[145px] font-medium text-chart-5 tracking-tighter md:text-right">
                  {projectName}
                </h1>
              )}
            </div>

            {/* Right Column - Services List */}
            <div className="space-y-3 lg:space-y-4">
              <h2 className="text-[24px] lg:text-[24px] font-semibold tracking-tight text-foreground">Services:</h2>
              <ul className="space-y-2 md:space-y-2">
                {services.map((service, index) => (
                  <li
                    key={index}
                    className="font-normal text-[20px] lg:text-[30px] tracking-tighter text-foreground/90 leading-[1]"
                  >
                    {service}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Gallery Grid - 0px gap, 10 images */}
      {galleryImages && galleryImages.length > 0 && (
        <div className="w-full">
          <div className="max-w-full mx-auto px-0 lg:px-0">
            <div className="grid grid-cols-1 gap-0">
              {galleryImages.map((image, index) => (
                <div key={index} className="relative aspect-[16/11] overflow-hidden bg-gray-100">
                  <Image
                    src={image || "/placeholder.svg"}
                    alt={`Gallery image ${index + 1}`}
                    fill
                    className="object-cover w-full h-auto"
                    sizes="(max-width: full) 50vw, 20vw"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
