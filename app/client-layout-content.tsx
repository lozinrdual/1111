"use client"

import type React from "react"
import { Footer } from "@/components/footer"
import { DesktopHeader } from "@/components/desktop-header"
import { SiteHeader } from "@/components/site-header"
import { ThemeToggleButton } from "@/components/theme-toggle-button"
import { usePathname } from "next/navigation"
// import { LoadingReveal } from "@/components/loading-reveal"

export function ClientLayoutContent({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const isGalleryRoute = pathname.startsWith("/gallery")

  return (
    <>
      {/* <LoadingReveal /> */}
      {!isGalleryRoute && (
        <>
          <div className="hidden lg:block">
            <DesktopHeader />
          </div>
          <div className="lg:hidden">
            <SiteHeader />
          </div>
        </>
      )}
      {children}
      <Footer />
      <ThemeToggleButton />
    </>
  )
}
