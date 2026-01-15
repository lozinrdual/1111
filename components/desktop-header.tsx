"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect } from "react"
import { ArrowRight } from "lucide-react"
import { DesktopHeaderSVG } from "./desktop-header-svg"

export function DesktopHeader() {
  const pathname = usePathname()

  const navLinks = [
    { href: "/work", label: "Work" },
    { href: "/services", label: "Services" },
  ]

  const socialLinks = [
    { href: "https://instagram.com/adnanbranding", label: "Instagram" },
    { href: "https://facebook.com/adnanbranding", label: "Facebook" },
  ]

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/"
    return pathname.startsWith(href)
  }

  useEffect(() => {
    // Removed MutationObserver for animation tracking
  }, [])

  return (
    <header className="hidden lg:block fixed top-0 left-0 right-0 z-[9999] bg-[#000000] w-full">
      <style>{`
        
        .header-nav-link {
          position: relative;
          transition: color 0.3s ease;
        }

        .header-nav-link::after {
          content: '';
          position: absolute;
          bottom: 0px;
          left: 0;
          width: 100%;
          height: 1px;
          background-color: currentColor;
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.3s ease;
        }

        .header-nav-link:hover::after {
          transform: scaleX(1);
        }

        .header-social-link {
          position: relative;
          transition: color 0.3s ease;
        }

        .header-social-link::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 100%;
          height: 1px;
          background-color: currentColor;
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.3s ease;
        }

        .header-social-link:hover::after {
          transform: scaleX(1);
        }

        .header-cta-button {
          position: relative;
          overflow: hidden;
          z-index: 10;
        }

        .header-cta-button::before {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 0%;
          background-color: white;
          z-index: -1;
          transition: height 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          transform-origin: bottom;
        }

        .header-cta-button::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 0%;
          background-color: white;
          z-index: -1;
          transition: height 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          transform-origin: bottom;
        }

        .header-cta-button-text {
          position: relative;
          z-index: 1;
          transition: color 0.4s ease 0.1s;
        }

        .header-cta-button:hover::before {
          height: 100%;
          z-index: -1;
        }

        .header-cta-button:hover::after {
          height: 100%;
          z-index: -1;
        }

        .header-cta-button:hover .header-cta-button-text {
          color: black;
        }
      `}</style>
      <div className="w-full px-8 py-3">
        <div className="flex items-start justify-between gap-8">
          <Link href="/" className="flex items-center gap-4 flex-shrink-0">
            <div className="w-48 h-12">
              <DesktopHeaderSVG />
            </div>
          </Link>

          <div className="text-[14px] font-medium text-white">Branding Studio</div>

          <nav className="flex gap-5">
            <div className="flex flex-col gap-0.7 leading-none">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`header-nav-link text-sm font-medium ${isActive(link.href) ? "text-white" : "text-white"}`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </nav>

          <div className="flex flex-col gap-2 leading-none">
            {socialLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="header-social-link text-[14px] font-medium text-white"
              >
                {link.label}
              </a>
            ))}
          </div>

          <Link
            href="/contact"
            className="header-cta-button flex-shrink-0 px-5 py-2 bg-white text-black text-[14px] font-medium rounded-lg flex items-center gap-2"
          >
            <span className="header-cta-button-text">Lets Talk</span>
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </header>
  )
}
