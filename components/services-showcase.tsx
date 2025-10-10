"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Wrench, Zap, Shield, Car, Settings, Award } from "lucide-react"

const services = [
  {
    icon: Wrench,
    title: "Engine Tuning",
    description: "Maximize your vehicle's performance with our expert engine optimization services.",
    image: "/car-engine-tuning-workshop.jpg",
    price: "From $299",
  },
  {
    icon: Car,
    title: "Body Modifications",
    description: "Transform your car's appearance with our custom body modification solutions.",
    image: "/custom-car-body-modification.jpg",
    price: "From $599",
  },
  {
    icon: Zap,
    title: "Performance Upgrades",
    description: "Boost power and efficiency with our cutting-edge performance enhancement packages.",
    image: "/car-performance-upgrade-parts.jpg",
    price: "From $799",
  },
  {
    icon: Settings,
    title: "Maintenance",
    description: "Keep your vehicle running smoothly with our comprehensive maintenance programs.",
    image: "/professional-car-maintenance-service.jpg",
    price: "From $149",
  },
  {
    icon: Shield,
    title: "Diagnostics",
    description: "Advanced diagnostic services to identify and resolve any vehicle issues quickly.",
    image: "/car-diagnostic-equipment-modern.jpg",
    price: "From $99",
  },
  {
    icon: Award,
    title: "Custom Builds",
    description: "Complete custom vehicle builds tailored to your exact specifications and dreams.",
    image: "/custom-built-sports-car-garage.jpg",
    price: "From $2999",
  },
]

export function ServicesShowcase() {
  return (
    <section className="py-20 bg-black grid-pattern">
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
              Our Services
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            From routine maintenance to complete custom builds, we offer comprehensive automotive services that exceed
            expectations and deliver exceptional results.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <Card className="bg-gray-900/50 border-gray-800 hover:border-orange-500/50 transition-all duration-300 overflow-hidden group">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                  <div className="absolute top-4 left-4 p-2 bg-orange-500 rounded-lg">
                    <service.icon className="w-6 h-6 text-black" />
                  </div>
                  <div className="absolute bottom-4 right-4 text-orange-400 font-bold text-lg">{service.price}</div>
                </div>

                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-400 mb-4 line-clamp-3">{service.description}</p>

                  <Button
                    variant="outline"
                    className="w-full border-orange-500/50 text-orange-400 hover:bg-orange-500 hover:text-black transition-all bg-transparent"
                  >
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
