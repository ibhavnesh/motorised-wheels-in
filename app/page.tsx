"use client"

import { useState, useEffect } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { 
  Car, 
  Wrench, 
  Zap, 
  Shield, 
  Star, 
  ArrowRight, 
  Play, 
  CheckCircle,
  Users,
  Award,
  Clock,
  TrendingUp,
  Sparkles,
  Target,
  Heart,
  Quote,
  ChevronLeft,
  ChevronRight,
  Gauge,
  Settings,
  Hammer,
  Battery,
  Palette,
  Camera,
  MapPin,
  Phone,
  Mail,
  MessageCircle,
  Calendar
} from "lucide-react"
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
import LoadingScreen from "@/components/loading-screen"
import ChatWidget from "@/components/chat-widget"

export default function HomePage() {
  const [isLoading, setIsLoading] = useState(true)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [currentSlide, setCurrentSlide] = useState(0)
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const handleLoadingComplete = () => {
    setIsLoading(false)
  }

  return (
    <>
      <AnimatePresence>{isLoading && <LoadingScreen onComplete={handleLoadingComplete} />}</AnimatePresence>

      {!isLoading && (
        <main className="min-h-screen bg-black overflow-hidden">
          {/* Animated Background */}
          <div className="fixed inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
            <div 
              className="absolute w-96 h-96 bg-orange-500/10 rounded-full blur-3xl"
              style={{
                left: mousePosition.x - 192,
                top: mousePosition.y - 192,
                transition: 'all 0.3s ease-out'
              }}
            />
            <motion.div 
              className="absolute inset-0 bg-[url('/automotive-grid-pattern.jpg')] opacity-5"
              style={{ y }}
            />
          </div>

          <Navbar />

          {/* Hero Section */}
          <section className="relative min-h-screen flex items-center justify-center pt-20">
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              {/* Floating Elements */}
              <motion.div
                className="absolute top-20 left-10 text-orange-500/30"
                animate={{
                  rotate: 360,
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 8,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear",
                }}
              >
                <Car className="w-16 h-16" />
              </motion.div>

              <motion.div
                className="absolute bottom-20 right-10 text-yellow-400/30"
                animate={{
                  rotate: -360,
                  y: [-10, 10, -10],
                }}
                transition={{
                  duration: 6,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              >
                <Zap className="w-12 h-12" />
              </motion.div>

              {/* Badge */}
              <motion.div
                className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-orange-500/20 to-red-500/20 border border-orange-500/30 text-orange-400 text-sm font-medium mb-8 backdrop-blur-sm"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Sparkles className="w-4 h-4 mr-2" />
                <span>PREMIUM AUTOMOTIVE EXCELLENCE</span>
              </motion.div>

              {/* Main Heading */}
              <motion.h1
                className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 text-balance"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <motion.span
                  className="bg-gradient-to-r from-orange-500 via-red-500 to-yellow-500 bg-clip-text text-transparent"
                  animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "linear",
                  }}
                >
                  REVOLUTIONARY
                </motion.span>
                <br />
                <span className="text-white">AUTOMOTIVE</span>
                <br />
                <motion.span
                  className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent"
                  animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "linear",
                    delay: 1,
                  }}
                >
                  EXPERIENCE
                </motion.span>
              </motion.h1>

              {/* Subtitle */}
              <motion.p
                className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto text-pretty leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                Where cutting-edge technology meets unparalleled craftsmanship. 
                Experience the future of automotive excellence with our premium services, 
                state-of-the-art facilities, and world-class expertise.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    size="lg"
                    className="text-lg px-10 py-6 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 shadow-2xl shadow-orange-500/25"
                  >
                    <Target className="mr-2 h-5 w-5" />
                    Discover Services
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    variant="outline"
                    size="lg"
                    className="text-lg px-10 py-6 bg-transparent border-2 border-orange-500/50 hover:bg-orange-500/10 hover:border-orange-500 backdrop-blur-sm"
                  >
                    <Play className="mr-2 h-5 w-5" />
                    Watch Experience
                  </Button>
                </motion.div>
              </motion.div>

              {/* Enhanced Stats */}
              <motion.div
                className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12 pt-12 border-t border-gray-800"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.0 }}
              >
                {[
                  { number: "1000+", label: "Premium Clients", icon: Users },
                  { number: "20+", label: "Years Excellence", icon: Award },
                  { number: "99.8%", label: "Satisfaction", icon: Heart },
                  { number: "24/7", label: "Premium Support", icon: Clock },
                ].map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    className="text-center group cursor-pointer"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                  >
                    <motion.div
                      className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent mb-2"
                      animate={{
                        backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "linear",
                        delay: index * 0.5,
                      }}
                    >
                      {stat.number}
                    </motion.div>
                    <div className="flex items-center justify-center gap-2 text-gray-400">
                      <stat.icon className="w-4 h-4" />
                      <span>{stat.label}</span>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </section>

          {/* Services Showcase */}
          <section className="relative py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                className="text-center mb-12"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl md:text-6xl font-bold mb-6">
                  <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                    PREMIUM SERVICES
                  </span>
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Experience our comprehensive range of automotive services, 
                  designed to exceed your expectations with cutting-edge technology and expert craftsmanship.
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    icon: Wrench,
                    title: "Performance Tuning",
                    description: "Unlock your vehicle's true potential with our advanced performance tuning services.",
                    features: ["ECU Remapping", "Turbo Optimization", "Custom Mapping"]
                  },
                  {
                    icon: Shield,
                    title: "Premium Detailing",
                    description: "Restore your vehicle's showroom finish with our premium ceramic coating services.",
                    features: ["Ceramic Coating", "Paint Correction", "Interior Protection"]
                  },
                  {
                    icon: Zap,
                    title: "Electrical Systems",
                    description: "Complete electrical diagnostics and upgrades for modern vehicles.",
                    features: ["Diagnostic Services", "Wiring Upgrades", "Battery Systems"]
                  }
                ].map((service, index) => (
                  <motion.div
                    key={service.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -10 }}
                  >
                    <Card className="h-full bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-sm border-gray-700/50 hover:border-orange-500/50 transition-all duration-300">
                      <CardContent className="p-8">
                        <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl mb-6 mx-auto">
                          <service.icon className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-4 text-center">{service.title}</h3>
                        <p className="text-gray-300 mb-6 text-center leading-relaxed">{service.description}</p>
                        <ul className="space-y-2">
                          {service.features.map((feature, idx) => (
                            <li key={idx} className="flex items-center text-gray-400">
                              <CheckCircle className="w-4 h-4 text-green-500 mr-3" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Animated Marquee Section */}
          <section className="relative py-16 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-gray-900/50 to-gray-800/50"></div>
            <motion.div
              className="flex whitespace-nowrap"
              animate={{ x: [0, -1000] }}
              transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            >
              {[
                "PREMIUM AUTOMOTIVE EXCELLENCE",
                "CUTTING-EDGE TECHNOLOGY",
                "WORLD-CLASS CRAFTSMANSHIP",
                "REVOLUTIONARY PERFORMANCE",
                "UNMATCHED QUALITY",
                "INNOVATION REDEFINED",
                "PREMIUM AUTOMOTIVE EXCELLENCE",
                "CUTTING-EDGE TECHNOLOGY",
                "WORLD-CLASS CRAFTSMANSHIP",
                "REVOLUTIONARY PERFORMANCE",
                "UNMATCHED QUALITY",
                "INNOVATION REDEFINED"
              ].map((text, index) => (
                <span
                  key={index}
                  className="text-6xl md:text-8xl font-bold text-orange-500/10 mx-8 whitespace-nowrap"
                >
                  {text}
                </span>
              ))}
            </motion.div>
          </section>

          {/* Features Grid */}
          <section className="relative py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                className="text-center mb-12"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl md:text-6xl font-bold mb-6">
                  <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                    WHY CHOOSE US?
                  </span>
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Experience the difference with our cutting-edge facilities, expert technicians, and commitment to excellence.
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                  { icon: Gauge, title: "Advanced Diagnostics", description: "State-of-the-art diagnostic equipment" },
                  { icon: Settings, title: "Expert Technicians", description: "Certified professionals with 20+ years experience" },
                  { icon: Hammer, title: "Premium Tools", description: "Latest automotive tools and equipment" },
                  { icon: Battery, title: "Warranty Coverage", description: "Comprehensive warranty on all services" },
                  { icon: Palette, title: "Custom Solutions", description: "Tailored services for your specific needs" },
                  { icon: Camera, title: "Progress Updates", description: "Real-time updates with photos and videos" },
                  { icon: MapPin, title: "Convenient Location", description: "Easy access with premium facilities" },
                  { icon: Heart, title: "Customer Care", description: "Dedicated support throughout your journey" }
                ].map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -10, scale: 1.05 }}
                    className="group cursor-pointer"
                  >
                    <Card className="h-full bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-sm border-gray-700/50 hover:border-orange-500/50 transition-all duration-300 group-hover:shadow-2xl group-hover:shadow-orange-500/10">
                      <CardContent className="p-6 text-center">
                        <motion.div
                          className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl mb-4 mx-auto"
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.6 }}
                        >
                          <feature.icon className="w-8 h-8 text-white" />
                        </motion.div>
                        <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                        <p className="text-gray-400 text-sm">{feature.description}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Image Gallery Slider */}
          <section className="relative py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                className="text-center mb-12"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl md:text-6xl font-bold mb-6">
                  <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                    OUR WORK
                  </span>
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  See the results of our premium automotive services in action.
                </p>
              </motion.div>

              <div className="relative">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {[
                    { image: "/luxury-sports-car-in-garage.jpg", title: "Premium Detailing", description: "Showroom finish restoration" },
                    { image: "/performance-car-tuning.jpg", title: "Performance Tuning", description: "ECU remapping and optimization" },
                    { image: "/ceramic-coating-car.jpg", title: "Ceramic Coating", description: "Long-lasting protection" },
                    { image: "/custom-car-body-modification.jpg", title: "Custom Modifications", description: "Personalized automotive solutions" },
                    { image: "/car-engine-tuning-workshop.jpg", title: "Engine Tuning", description: "Maximum performance optimization" },
                    { image: "/modern-automotive-workshop.jpg", title: "Professional Service", description: "State-of-the-art facilities" }
                  ].map((item, index) => (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.05, y: -10 }}
                      className="group cursor-pointer"
                    >
                      <Card className="overflow-hidden bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-sm border-gray-700/50 hover:border-orange-500/50 transition-all duration-300">
                        <div className="relative h-64 overflow-hidden">
                          <img
                            src={item.image}
                            alt={item.title}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                          <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <h3 className="text-xl font-bold mb-1">{item.title}</h3>
                            <p className="text-sm text-gray-200">{item.description}</p>
                          </div>
                        </div>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Testimonials Carousel */}
          <section className="relative py-16">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                className="text-center mb-12"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl md:text-6xl font-bold mb-6">
                  <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                    CLIENT TESTIMONIALS
                  </span>
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Hear what our satisfied customers have to say about their experience.
                </p>
              </motion.div>

              <div className="relative">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentTestimonial}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Card className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-sm border-gray-700/50">
                      <CardContent className="p-12 text-center">
                        <Quote className="w-16 h-16 text-orange-500 mx-auto mb-8" />
                        <blockquote className="text-2xl md:text-3xl text-white mb-8 leading-relaxed">
                          "{[
                            "Motorised Wheels transformed my car beyond my expectations. The performance tuning gave me incredible power while maintaining reliability. Truly professional service!",
                            "The ceramic coating service was outstanding. My car looks better than when it was new. The attention to detail and customer service is unmatched.",
                            "From diagnostics to repairs, every aspect of their service exceeded my expectations. Highly recommend for anyone serious about their vehicle.",
                            "The team's expertise and modern equipment made all the difference. My car runs smoother and more efficiently than ever before."
                          ][currentTestimonial]}"
                        </blockquote>
                        <div className="flex items-center justify-center gap-4">
                          <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center">
                            <span className="text-white font-bold text-xl">
                              {["JS", "MR", "DK", "AL"][currentTestimonial]}
                            </span>
                          </div>
                          <div className="text-left">
                            <h4 className="text-xl font-bold text-white">
                              {["John Smith", "Maria Rodriguez", "David Kumar", "Alex Lee"][currentTestimonial]}
                            </h4>
                            <p className="text-gray-400">
                              {["Performance Client", "Detailing Client", "Service Client", "Tuning Client"][currentTestimonial]}
                            </p>
                            <div className="flex gap-1 mt-2">
                              {[...Array(5)].map((_, i) => (
                                <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                              ))}
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </AnimatePresence>

                <div className="flex justify-center gap-4 mt-8">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setCurrentTestimonial((prev) => (prev - 1 + 4) % 4)}
                    className="bg-transparent border-orange-500/50 hover:bg-orange-500/10"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </Button>
                  <div className="flex gap-2">
                    {[...Array(4)].map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setCurrentTestimonial(i)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${
                          i === currentTestimonial ? 'bg-orange-500' : 'bg-gray-600'
                        }`}
                      />
                    ))}
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setCurrentTestimonial((prev) => (prev + 1) % 4)}
                    className="bg-transparent border-orange-500/50 hover:bg-orange-500/10"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* Contact CTA Section */}
          <section className="relative py-16">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div>
                  <h2 className="text-4xl md:text-5xl font-bold mb-6">
                    <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                      GET IN TOUCH
                    </span>
                  </h2>
                  <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                    Ready to experience automotive excellence? Contact us today to schedule your premium service appointment.
                  </p>
                  <div className="space-y-4">
                    {[
                      { icon: Phone, text: "+1 (555) 123-4567", href: "tel:+15551234567" },
                      { icon: Mail, text: "info@motorisedwheels.com", href: "mailto:info@motorisedwheels.com" },
                      { icon: MapPin, text: "123 Premium Auto Lane, Excellence City", href: "#" },
                      { icon: MessageCircle, text: "Live Chat Available 24/7", href: "#" }
                    ].map((contact, index) => (
                      <motion.a
                        key={contact.text}
                        href={contact.href}
                        className="flex items-center gap-4 text-gray-300 hover:text-orange-400 transition-colors duration-300 group"
                        whileHover={{ x: 10 }}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <div className="w-12 h-12 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-lg flex items-center justify-center group-hover:from-orange-500/30 group-hover:to-red-500/30 transition-all duration-300">
                          <contact.icon className="w-5 h-5" />
                        </div>
                        <span className="text-lg">{contact.text}</span>
                      </motion.a>
                    ))}
                  </div>
                </div>
                <motion.div
                  className="relative"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-sm border-gray-700/50 p-8">
                    <h3 className="text-2xl font-bold text-white mb-6">Book Your Service</h3>
                    <div className="space-y-4">
                      <Button className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 py-6 text-lg">
                        <Calendar className="w-5 h-5 mr-2" />
                        Schedule Appointment
                      </Button>
                      <Button variant="outline" className="w-full bg-transparent border-orange-500/50 hover:bg-orange-500/10 py-6 text-lg">
                        <Phone className="w-5 h-5 mr-2" />
                        Call Now
                      </Button>
                      <Button variant="outline" className="w-full bg-transparent border-orange-500/50 hover:bg-orange-500/10 py-6 text-lg">
                        <MessageCircle className="w-5 h-5 mr-2" />
                        Live Chat
                      </Button>
                    </div>
                  </Card>
                </motion.div>
              </motion.div>
            </div>
          </section>

          {/* Call to Action */}
          <section className="relative py-16">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl md:text-6xl font-bold mb-8">
                  <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                    READY TO EXPERIENCE
                  </span>
                  <br />
                  <span className="text-white">THE DIFFERENCE?</span>
                </h2>
                <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
                  Join thousands of satisfied customers who trust us with their automotive needs. 
                  Book your premium service today and experience automotive excellence redefined.
                </p>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    size="lg"
                    className="text-xl px-12 py-8 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 shadow-2xl shadow-orange-500/25"
                  >
                    <Star className="mr-3 h-6 w-6" />
                    Book Premium Service
                    <ArrowRight className="ml-3 h-6 w-6" />
                  </Button>
                </motion.div>
              </motion.div>
            </div>
          </section>

          {/* Final Marquee */}
          <section className="relative py-16 overflow-hidden">
            <motion.div
              className="flex whitespace-nowrap"
              animate={{ x: [-1000, 0] }}
              transition={{ duration: 25, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            >
              {[
                "TRUSTED BY THOUSANDS",
                "PREMIUM QUALITY GUARANTEED",
                "INNOVATION DRIVEN",
                "EXCELLENCE DELIVERED",
                "CUSTOMER SATISFACTION FIRST",
                "AUTOMOTIVE PERFECTION",
                "TRUSTED BY THOUSANDS",
                "PREMIUM QUALITY GUARANTEED",
                "INNOVATION DRIVEN",
                "EXCELLENCE DELIVERED",
                "CUSTOMER SATISFACTION FIRST",
                "AUTOMOTIVE PERFECTION"
              ].map((text, index) => (
                <span
                  key={index}
                  className="text-6xl md:text-8xl font-bold text-yellow-500/10 mx-8 whitespace-nowrap"
                >
                  {text}
                </span>
              ))}
            </motion.div>
          </section>

          <Footer />
          
          {/* Chat Widget */}
          <ChatWidget />
        </main>
      )}
    </>
  )
}
