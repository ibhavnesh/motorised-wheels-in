"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

const stats = [
  { number: 500, suffix: "+", label: "Happy Customers", icon: "👥" },
  { number: 15, suffix: "+", label: "Years Experience", icon: "🏆" },
  { number: 98, suffix: "%", label: "Success Rate", icon: "⚡" },
  { number: 24, suffix: "/7", label: "Support Available", icon: "🔧" },
  { number: 1000, suffix: "+", label: "Projects Completed", icon: "🚗" },
  { number: 50, suffix: "+", label: "Expert Technicians", icon: "👨‍🔧" },
]

function CountUp({ end, duration = 2 }: { end: number; duration?: number }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let startTime: number
    let animationFrame: number

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1)

      setCount(Math.floor(progress * end))

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      }
    }

    animationFrame = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animationFrame)
  }, [end, duration])

  return <span>{count}</span>
}

export function StatsSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-orange-400 via-yellow-500 to-orange-600 bg-clip-text text-transparent">
              Proven Excellence
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Numbers that speak for our commitment to automotive excellence and customer satisfaction.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center group"
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="bg-gray-800/50 rounded-2xl p-6 border border-gray-700 hover:border-orange-500/50 transition-all duration-300">
                <div className="text-4xl mb-4">{stat.icon}</div>
                <div className="text-3xl md:text-4xl font-bold mb-2">
                  <span className="bg-gradient-to-r from-orange-400 to-yellow-500 bg-clip-text text-transparent">
                    <CountUp end={stat.number} />
                    {stat.suffix}
                  </span>
                </div>
                <div className="text-gray-400 text-sm font-medium">{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
