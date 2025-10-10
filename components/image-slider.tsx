"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Play } from "lucide-react"
import { Button } from "@/components/ui/button"

const slides = [
  {
    id: 1,
    image: "/luxury-sports-car-in-garage.jpg",
    title: "Performance Redefined",
    subtitle: "Experience the ultimate in automotive excellence",
    cta: "Explore Now",
  },
  {
    id: 2,
    image: "/modern-car-workshop-with-tools.jpg",
    title: "Expert Craftsmanship",
    subtitle: "Where precision meets passion in every detail",
    cta: "Learn More",
  },
  {
    id: 3,
    image: "/car-engine-close-up-with-orange-lighting.jpg",
    title: "Innovation Unleashed",
    subtitle: "Cutting-edge technology for tomorrow's roads",
    cta: "Discover",
  },
  {
    id: 4,
    image: "/racing-car-on-track-at-sunset.jpg",
    title: "Speed & Style",
    subtitle: "Where performance meets uncompromising design",
    cta: "Get Started",
  },
]

export function ImageSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  return (
    <section className="relative h-screen overflow-hidden car-slider">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          className="absolute inset-0"
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.7 }}
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slides[currentSlide].image})` }}
          />
          <div className="absolute inset-0 bg-black/60" />

          {/* Grid Pattern Overlay */}
          <div className="absolute inset-0 grid-pattern opacity-30" />

          <div className="relative z-10 h-full flex items-center justify-center">
            <div className="text-center max-w-4xl mx-auto px-4">
              <motion.h2
                className="text-5xl md:text-7xl font-bold mb-6"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.8 }}
              >
                <span className="bg-gradient-to-r from-orange-400 via-yellow-500 to-orange-600 bg-clip-text text-transparent">
                  {slides[currentSlide].title}
                </span>
              </motion.h2>

              <motion.p
                className="text-xl md:text-2xl text-gray-300 mb-8"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                {slides[currentSlide].subtitle}
              </motion.p>

              <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-black font-semibold px-8 py-4 text-lg orange-glow"
                >
                  {slides[currentSlide].cta}
                </Button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-black/50 hover:bg-black/70 text-orange-400 hover:text-orange-300 transition-all"
        onMouseEnter={() => setIsAutoPlaying(false)}
        onMouseLeave={() => setIsAutoPlaying(true)}
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-black/50 hover:bg-black/70 text-orange-400 hover:text-orange-300 transition-all"
        onMouseEnter={() => setIsAutoPlaying(false)}
        onMouseLeave={() => setIsAutoPlaying(true)}
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide ? "bg-orange-400 scale-125" : "bg-white/50 hover:bg-white/70"
            }`}
          />
        ))}
      </div>

      {/* Auto-play Toggle */}
      <button
        onClick={() => setIsAutoPlaying(!isAutoPlaying)}
        className="absolute top-6 right-6 z-20 p-2 rounded-full bg-black/50 hover:bg-black/70 text-orange-400 hover:text-orange-300 transition-all"
      >
        <Play className={`w-5 h-5 ${isAutoPlaying ? "opacity-100" : "opacity-50"}`} />
      </button>
    </section>
  )
}
