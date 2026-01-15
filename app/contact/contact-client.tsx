"use client"

import { WorkHeader } from "@/components/work-header"
import { ContactForm } from "@/components/contact-form"
import { FaqSection } from "@/components/faq-section"

export default function ContactClient() {
  return (
    <main className="min-h-screen bg-background transition-colors duration-300">
      <WorkHeader
        title="Contact"
        showFilters={false}
        tagline="Let's create something bold together. Reach out to discuss your design and branding vision."
        location="Latitude: 23.4607° N  Longitude: 91.1809° E"
      />
      <ContactForm />
      <FaqSection />
    </main>
  )
}
