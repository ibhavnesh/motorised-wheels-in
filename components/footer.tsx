"use client"

import Link from "next/link"
import { Car, Facebook, Twitter, Instagram, Linkedin, Zap } from "lucide-react"
import { motion } from "framer-motion"

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-4 group">
              <motion.div className="relative" whileHover={{ scale: 1.1 }} transition={{ duration: 0.2 }}>
                <Car className="h-8 w-8 text-orange-500" />
                <motion.div
                  className="absolute -top-1 -right-1"
                  animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 180, 360],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                >
                  <Zap className="w-3 h-3 text-yellow-400" />
                </motion.div>
              </motion.div>
              <span className="text-xl font-bold bg-gradient-to-r from-orange-500 via-red-500 to-yellow-500 bg-clip-text text-transparent">
                MOTORISED WHEELS
              </span>
            </Link>
            <p className="text-muted-foreground mb-4 max-w-md">
              Experience automotive excellence redefined. Where passion meets precision in every detail.
            </p>
            <div className="flex space-x-4">
              {[
                { icon: Facebook, href: "#" },
                { icon: Twitter, href: "#" },
                { icon: Instagram, href: "#" },
                { icon: Linkedin, href: "#" },
              ].map((social, index) => (
                <motion.div key={index} whileHover={{ scale: 1.2, y: -2 }} whileTap={{ scale: 0.9 }}>
                  <Link href={social.href} className="text-muted-foreground hover:text-orange-500 transition-colors">
                    <social.icon className="h-5 w-5" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { name: "About", href: "/about" },
                { name: "Services", href: "/services" },
                { name: "Blog", href: "/blog" },
                { name: "Contact", href: "/contact" },
              ].map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link href={link.href} className="text-muted-foreground hover:text-orange-500 transition-colors">
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              {[
                { name: "Login", href: "/auth/login" },
                { name: "Dashboard", href: "/dashboard" },
                { name: "Help Center", href: "#" },
                { name: "Privacy Policy", href: "#" },
              ].map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 + 0.4 }}
                >
                  <Link href={link.href} className="text-muted-foreground hover:text-orange-500 transition-colors">
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>

        <motion.div
          className="border-t border-border mt-8 pt-8 text-center text-muted-foreground"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <p>&copy; 2025 MOTORISED WHEELS. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  )
}
