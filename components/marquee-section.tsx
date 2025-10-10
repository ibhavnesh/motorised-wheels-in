"use client"

import { motion } from "framer-motion"
import { Car, Zap, Settings, Shield, Award, Users } from "lucide-react"

const marqueeItems = [
  { icon: Car, text: "PREMIUM AUTOMOTIVE SERVICES" },
  { icon: Zap, text: "HIGH PERFORMANCE TUNING" },
  { icon: Settings, text: "EXPERT MAINTENANCE" },
  { icon: Shield, text: "QUALITY GUARANTEED" },
  { icon: Award, text: "AWARD WINNING TEAM" },
  { icon: Users, text: "500+ SATISFIED CUSTOMERS" },
]

export function MarqueeSection() {
  return (
    <section className="py-8 bg-gradient-to-r from-orange-500 via-yellow-500 to-orange-500 overflow-hidden">
      <div className="flex whitespace-nowrap">
        <motion.div
          className="flex items-center space-x-12 pr-12"
          animate={{ x: [0, -100 * marqueeItems.length] }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        >
          {[...marqueeItems, ...marqueeItems, ...marqueeItems].map((item, index) => (
            <div key={index} className="flex items-center space-x-3 text-black font-bold text-xl">
              <item.icon className="w-6 h-6" />
              <span>{item.text}</span>
              <span className="text-2xl">•</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
