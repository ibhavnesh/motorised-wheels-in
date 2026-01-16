"use client"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { ImageSlider } from "@/components/image-slider"
import { MarqueeSection } from "@/components/marquee-section"
import { ServicesShowcase } from "@/components/services-showcase"
import { StatsSection } from "@/components/stats-section"
import LoadingScreen from "@/components/loading-screen"
import { AnimatePresence } from "framer-motion"

export default function HomePage() {
  const [isLoading, setIsLoading] = useState(true)

  const handleLoadingComplete = () => {
    setIsLoading(false)
  }

  return (
    <>
      <AnimatePresence>{isLoading && <LoadingScreen onComplete={handleLoadingComplete} />}</AnimatePresence>

      {!isLoading && (
        <main className="min-h-screen bg-black">
          <Navbar />
          <Hero />
          <MarqueeSection />
          <ImageSlider />
          <ServicesShowcase />
          <StatsSection />
          <MarqueeSection />
        </main>
      )}
    </>
  )
}
