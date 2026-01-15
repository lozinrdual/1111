"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { FooterSVG } from "./footer-svg"

function CustomArrow() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="social-arrow"
    >
      <path
        d="M4 12L12 4M12 4H5.5M12 4V10.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function AnimatedLink({ href, children }: { href: string; children: string }) {
  const letters = children.split("")

  return (
    <a
      href={href}
      className="animated-text-link text-[14px] group flex items-center gap-2"
      style={{ color: "#f9f9f9" }}
    >
      <span className="text-swap-container">
        <span className="text-layer text-layer-primary">
          {letters.map((letter, index) => (
            <span key={index} className="letter-swap" style={{ transitionDelay: `${index * 0.03}s` }}>
              {letter === " " ? "\u00A0" : letter}
            </span>
          ))}
        </span>
        <span className="text-layer text-layer-secondary">
          {letters.map((letter, index) => (
            <span key={index} className="letter-swap" style={{ transitionDelay: `${index * 0.03}s` }}>
              {letter === " " ? "\u00A0" : letter}
            </span>
          ))}
        </span>
      </span>
      <CustomArrow />
    </a>
  )
}

function AnimatedLinkMobile({ href, children }: { href: string; children: string }) {
  const letters = children.split("")

  return (
    <a
      href={href}
      className="animated-text-link text-[14px] group flex items-center gap-2"
      style={{ color: "#f9f9f9" }}
    >
      <span className="text-swap-container">
        <span className="text-layer text-layer-primary">
          {letters.map((letter, index) => (
            <span key={index} className="letter-swap" style={{ transitionDelay: `${index * 0.03}s` }}>
              {letter === " " ? "\u00A0" : letter}
            </span>
          ))}
        </span>
        <span className="text-layer text-layer-secondary">
          {letters.map((letter, index) => (
            <span key={index} className="letter-swap" style={{ transitionDelay: `${index * 0.03}s` }}>
              {letter === " " ? "\u00A0" : letter}
            </span>
          ))}
        </span>
      </span>
      <CustomArrow />
    </a>
  )
}

function AnimatedEmailLink({ href, children }: { href: string; children: string }) {
  const letters = children.split("")

  return (
    <a href={href} className="animated-text-link text-[14px] font-medium inline-flex" style={{ color: "#f9f9f9" }}>
      <span className="text-swap-container">
        <span className="text-layer text-layer-primary">
          {letters.map((letter, index) => (
            <span key={index} className="letter-swap" style={{ transitionDelay: `${index * 0.03}s` }}>
              {letter === " " ? "\u00A0" : letter}
            </span>
          ))}
        </span>
        <span className="text-layer text-layer-secondary">
          {letters.map((letter, index) => (
            <span key={index} className="letter-swap" style={{ transitionDelay: `${index * 0.03}s` }}>
              {letter === " " ? "\u00A0" : letter}
            </span>
          ))}
        </span>
      </span>
    </a>
  )
}

function NavLink({ href, children }: { href: string; children: string }) {
  const letters = children.split("")

  return (
    <Link href={href} className="animated-text-link text-[14px]" style={{ color: "#f9f9f9" }}>
      <span className="text-swap-container">
        <span className="text-layer text-layer-primary">
          {letters.map((letter, index) => (
            <span key={index} className="letter-swap" style={{ transitionDelay: `${index * 0.03}s` }}>
              {letter === " " ? "\u00A0" : letter}
            </span>
          ))}
        </span>
        <span className="text-layer text-layer-secondary">
          {letters.map((letter, index) => (
            <span key={index} className="letter-swap" style={{ transitionDelay: `${index * 0.03}s` }}>
              {letter === " " ? "\u00A0" : letter}
            </span>
          ))}
        </span>
      </span>
    </Link>
  )
}

function NavLinkMobile({ href, children }: { href: string; children: string }) {
  const letters = children.split("")

  return (
    <Link href={href} className="animated-text-link text-[14px]" style={{ color: "#f9f9f9" }}>
      <span className="text-swap-container">
        <span className="text-layer text-layer-primary">
          {letters.map((letter, index) => (
            <span key={index} className="letter-swap" style={{ transitionDelay: `${index * 0.03}s` }}>
              {letter === " " ? "\u00A0" : letter}
            </span>
          ))}
        </span>
        <span className="text-layer text-layer-secondary">
          {letters.map((letter, index) => (
            <span key={index} className="letter-swap" style={{ transitionDelay: `${index * 0.03}s` }}>
              {letter === " " ? "\u00A0" : letter}
            </span>
          ))}
        </span>
      </span>
    </Link>
  )
}

export function Footer() {
  const [animationKey, setAnimationKey] = useState(0)
  const footerRef = useRef(null)
  const svgRef = useRef<SVGSVGElement>(null)
  const [isDark, setIsDark] = useState(true)

  useEffect(() => {
    const checkTheme = () => {
      const htmlElement = document.documentElement
      const isDarkMode = htmlElement.classList.contains("dark")
      setIsDark(isDarkMode)
    }

    checkTheme()

    const observer = new MutationObserver(checkTheme)
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] })

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimationKey((prev) => prev + 1)

          setTimeout(() => {
            if (svgRef.current) {
              const letters = svgRef.current.querySelectorAll(".letter")
              letters.forEach((letter) => {
                letter.classList.add("animate")
              })
            }
          }, 10)
        }
      },
      { threshold: 0.4 },
    )

    if (footerRef.current) {
      observer.observe(footerRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <footer className="bg-[#191919] text-black transition-colors duration-300" ref={footerRef}>
      <style>{`
        @keyframes slideUpLetterSmooth {
          0% {
            opacity: 0;
            transform: translateY(100%);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .letter {
          opacity: 0;
          display: inline-block;
        }

        .letter.animate {
          animation: slideUpLetterSmooth 0.8s cubic-bezier(0.33, 0, 0.2, 1) forwards;
        }

        .svg-container {
          transition: filter 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        .svg-container.dark-theme {
          filter: none;
        }

        .svg-container.light-theme {
          filter: none;
        }

        /* Text swap animation styles */
        .animated-text-link {
          position: relative;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          text-decoration: none;
        }

        .text-swap-container {
          position: relative;
          display: inline-flex;
          overflow: hidden;
          height: 1.2em;
        }

        .text-layer {
          display: inline-flex;
        }

        .text-layer-primary {
          position: relative;
        }

        .text-layer-secondary {
          position: absolute;
          top: 0;
          left: 0;
        }

        .text-layer-primary .letter-swap {
          display: inline-block;
          transition: transform 0.3s ease;
        }

        .text-layer-secondary .letter-swap {
          display: inline-block;
          transform: translateY(-100%);
          transition: transform 0.3s ease;
        }

        .animated-text-link:hover .text-layer-primary .letter-swap {
          transform: translateY(100%);
        }

        .animated-text-link:hover .text-layer-secondary .letter-swap {
          transform: translateY(0);
        }

        /* Updated arrow animation for SVG */
        .social-arrow {
          transition: transform 0.3s ease;
          display: inline-block;
          transform: rotate(0deg);
        }

        .animated-text-link:hover .social-arrow {
          transform: rotate(45deg);
        }

        .cta-button {
          position: relative;
          overflow: hidden;
          background-color: #f9f9f9;
        }

        .cta-button::before {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 0%;
          background-color: #ff6633;
          z-index: 0;
          transition: height 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          transform-origin: bottom;
        }

        .cta-button::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 0%;
          background-color: #ff6633;
          z-index: 0;
          transition: height 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          transform-origin: bottom;
        }

        .cta-button-text {
          position: relative;
          z-index: 1;
          transition: color 0.4s ease 0.1s;
          color: var(--background) !important;
        }

        .cta-button:hover::before {
          height: 100%;
        }

        .cta-button:hover::after {
          height: 100%;
        }

        .cta-button:hover .cta-button-text {
          color: white !important;
        }

        .social-icon-fill {
          fill: currentColor;
        }
      `}</style>

      <div className="px-3 md:px-6 lg:px-8 py-16 md:py-24 lg:py-32">
        {/* Mobile Layout */}
        <div className="lg:hidden flex flex-col gap-8">
          <div className="w-full">
            <h2 className="text-[48px] font-regular tracking-tighter leading-none mb-5" style={{ color: "#f9f9f9" }}>
              Great Design.
              <br />
              Strong Brands
            </h2>

            <Link href="/contact">
              <button className="cta-button w-full px-8 py-4 font-medium transition-colors duration-300 mb-8">
                <span className="cta-button-text">Let's Talk</span>
              </button>
            </Link>

            <div className="text-[16px]" style={{ color: "#f9f9f9" }}>
              <p className="mb-1">New Business :</p>
              <AnimatedEmailLink href="mailto:lozinrcontact@gmail.com">lozinrcontact@gmail.com</AnimatedEmailLink>
            </div>
          </div>

          <div className="flex justify-between gap-4">
            <div className="flex flex-col">
              <div className="flex flex-col gap-2" style={{ color: "#f9f9f9" }}>
                <NavLinkMobile href="/work">WORK</NavLinkMobile>
                <NavLinkMobile href="/store">STORE</NavLinkMobile>
                <NavLinkMobile href="/about">ABOUT</NavLinkMobile>
                <NavLinkMobile href="/contact">CONTACT</NavLinkMobile>
                <NavLinkMobile href="/services">SERVICES</NavLinkMobile>
              </div>
              <div className="mt-12 text-[14px]" style={{ color: "#f9f9f9" }}>
                <p>Dhaka</p>
                <p>Bangladesh, Asia</p>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex flex-col">
              <div className="flex flex-col gap-2" style={{ color: "#f9f9f9" }}>
                <AnimatedLinkMobile href="https://x.com/adnandzinr">TWITTER</AnimatedLinkMobile>
                <AnimatedLinkMobile href="#">LINKEDIN</AnimatedLinkMobile>
                <AnimatedLinkMobile href="https://web.facebook.com/brandzinr">FACEBOOK</AnimatedLinkMobile>
                <AnimatedLinkMobile href="https://www.instagram.com/adnanakifdesign/">INSTAGRAM</AnimatedLinkMobile>
              </div>
              <div className="mt-18 flex flex-col gap-1" style={{ color: "#f9f9f9" }}>
                <NavLinkMobile href="/terms">Terms & Conditions</NavLinkMobile>
                <NavLinkMobile href="/privacy">Privacy Policy</NavLinkMobile>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:flex flex-col lg:flex-row gap-8 md:gap-12 lg:gap-16 justify-between">
          <div className="w-full lg:w-max-full">
            <h2
              className="text-4xl md:text-5xl lg:text-[48px] font-regular tracking-tighter leading-tight mb-5 whitespace-nowrap"
              style={{ color: "#f9f9f9" }}
            >
              Great Design. Strong Brands
            </h2>

            <Link href="/contact">
              <button className="cta-button w-full md:w-xl px-8 md:px-16 py-4 md:py-4 font-medium transition-colors duration-300 mb-8">
                <span className="cta-button-text">Let's Talk</span>
              </button>
            </Link>

            <div className="text-[16px]" style={{ color: "#f9f9f9" }}>
              <p className="mb-1">New Business :</p>
              <AnimatedEmailLink href="mailto:lozinrcontact@gmail.com">lozinrcontact@gmail.com</AnimatedEmailLink>
            </div>
          </div>

          <div className="w-full lg:w-2/5 flex flex-col justify-start">
            <div className="flex justify-between gap-8">
              <div className="flex flex-col pt-3">
                <div className="flex flex-col gap-2" style={{ color: "#f9f9f9" }}>
                  <NavLink href="/work">WORK</NavLink>
                  <NavLink href="/store">STORE</NavLink>
                  <NavLink href="/about">ABOUT</NavLink>
                  <NavLink href="/contact">CONTACT</NavLink>
                  <NavLink href="/services">SERVICES</NavLink>
                </div>
                <div className="mt-12 text-[14px]" style={{ color: "#f9f9f9" }}>
                  <p>Dhaka</p>
                  <p>Bangladesh, Asia</p>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex flex-col lg:mt-3">
                <div className="flex flex-col gap-2" style={{ color: "#f9f9f9" }}>
                  <AnimatedLink href="https://www.instagram.com/adnanakifdesign/">INSTAGRAM</AnimatedLink>
                  <AnimatedLink href="#">LINKEDIN</AnimatedLink>
                  <AnimatedLink href="https://web.facebook.com/brandzinr">FACEBOOK</AnimatedLink>
                  <AnimatedLink href="https://x.com/adnandzinr">TWITTER</AnimatedLink>
                  <AnimatedLink href="mailto:adnanakif.co@email.com">EMAIL</AnimatedLink>
                </div>
                <div className="mt-12 flex flex-col gap-1" style={{ color: "#f9f9f9" }}>
                  <NavLink href="/terms">Terms & Conditions</NavLink>
                  <NavLink href="/privacy">Privacy Policy</NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full text-foreground/70">
        <FooterSVG />
      </div>
    </footer>
  )
}
