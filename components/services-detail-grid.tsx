"use client"
import { useState, useEffect, useRef } from "react"

interface Service {
  id: number
  title: string
  description: string
  features: string[]
  image: string
}

const services: Service[] = [
  {
    id: 1,
    title: "Logo Design",
    description:
      "No matter the size of your brand, we design logos that are clear, unique and built to last. Our process is thoughtful and collaborative. We dive into your brand, understand what makes it special and turn that into a logo that looks great and feels right. We make sure it works across everything - your website, packaging, social media and more.",
    features: [
      "Discover and brand alignment",
      "Moodboard and creative direction",
      "Typography and symbol design",
      "Icon and wordmark variants",
      "Usage guidelines and file export",
      "Logo animation (optional)",
    ],
    image: "https://05nt8uhx23vzdvuu.public.blob.vercel-storage.com/Visa%20Card.jpg",
  },
  {
    id: 2,
    title: "Brand Identity",
    description:
      "A brand is more than a logo. We help you show up the same way everywhere - Online, offline and everything between. Building a complete brand identity that resonates with your audience and stands out in the market. From color palettes to typography, we ensure consistency across all touchpoints.",
    features: [
      "Brand strategy and positioning",
      "Visual identity system",
      "Color palette and typography",
      "Brand guidelines documentation",
      "Collateral design templates",
      "Brand voice and messaging",
    ],
    image: "https://dbz3qkxac4rgq1sq.public.blob.vercel-storage.com/Trevora%2007.jpg",
  },
  {
    id: 3,
    title: "Brand Strategy",
    description:
      "Lozinr begins every journey with a deep dive into the essence of your brand. Through comprehensive research and analysis, we uncover the insights that shape your brand's unique identity and market positioning",
    features: [
      "Brand strategy and positioning",
      "Visual identity system",
      "Color palette and typography",
      "Brand guidelines documentation",
      "Collateral design templates",
      "Brand voice and messaging",
    ],
    image: "https://dbz3qkxac4rgq1sq.public.blob.vercel-storage.com/Trevora%2007.jpg",
  },
  {
    id: 4,
    title: "Packaging Design",
    description:
      "Good packaging tells a story before anyone reads a word. We design packs that stand out, feel great and connect. Every element is carefully considered to reflect your brand and attract your target audience. From concept to production, we handle every detail.",
    features: [
      "Package concept development",
      "Structural design planning",
      "Graphic design and layout",
      "Material and finish selection",
      "Production-ready files",
      "Brand consistency application",
    ],
    image: "/packaging-design.jpg",
  },
]

function TypingText({ text }: { text: string }) {
  const [displayedText, setDisplayedText] = useState("")
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLSpanElement>(null)

  // Intersection Observer to detect when element enters viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.3 },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  // Typing animation that starts only when element is visible
  useEffect(() => {
    if (!isVisible) return

    let index = 0
    setDisplayedText("")
    const interval = setInterval(() => {
      setDisplayedText(text.substring(0, index + 1))
      index++
      if (index >= text.length) {
        clearInterval(interval)
      }
    }, 30)

    return () => clearInterval(interval)
  }, [text, isVisible])

  return <span ref={ref}>{displayedText || text}</span>
}

function ServiceCard({ service }: { service: Service }) {
  return (
    <div className="flex flex-col h-full">
      <div className="flex items-baseline gap-2 mb-6">
        <span className="text-[38px] lg:text-[60px] font-medium tracking-tight text-chart-5 whitespace-nowrap">
          {String(service.id).padStart(2, "0")}.
        </span>
        <h2 className="text-[38px] md:text-[60px] uppercase tracking-tighter text-chart-5 font-medium">
          <TypingText text={service.title} />
        </h2>
      </div>

      <p className="text-[18px] md:text-[24px] leading-relaxed tracking-tighter text-chart-5 mb-8">
        {service.description}
      </p>

      <ul className="divide-y divide-[#888] flex-1">
        {service.features.map((feature, index) => (
          <li key={index} className="text-[24px] md:text-[34px] tracking-tighter text-chart-5 py-3 md:py-4">
            {feature}
          </li>
        ))}
      </ul>
    </div>
  )
}

export function ServicesDetailGrid() {
  return (
    <div className="bg-background text-secondary min-h-screen p-6 md:p-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 lg:gap-20">
        {services.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </div>
  )
}
