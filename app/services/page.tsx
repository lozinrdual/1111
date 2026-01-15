import type { Metadata } from "next"
import { ServicesDetailGrid } from "@/components/services-detail-grid"
import { WorkHeader } from "@/components/work-header"

export const metadata: Metadata = {
  title: "Services | Lozinr",
  description: "Explore our design services including logo design, brand identity, and packaging design.",
  openGraph: {
    title: "Services | Lozinr",
    description: "Explore our design services including logo design, brand identity, and packaging design.",
    url: "https://lozinr.com/services",
    type: "website",
  },
  alternates: {
    canonical: "https://lozinr.com/services",
  },
}

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-background">
      <WorkHeader
        title="Services"
          showFilters={false}
          tagline="A design studio built on purpose and the belief that great brands start with great ideas."
          location="Latitude: 23.4607° N Longitude: 91.1809° E"
      />
      <ServicesDetailGrid />
    </main>
  )
}
