"use client"

import { motion } from "framer-motion"
import { Car, Zap } from "lucide-react"
import { useEffect, useState } from "react"

export default function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer)
          setTimeout(onComplete, 500)
          return 100
        }
        return prev + 2
      })
    }, 50)

    return () => clearInterval(timer)
  }, [onComplete])

  return (
    <motion.div
      className="fixed inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center z-50"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="text-center">
        {/* Animated Logo */}
        <motion.div
          className="relative mb-8"
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div
            className="relative"
            animate={{
              rotateY: [0, 360],
            }}
            transition={{
              duration: 3,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          >
            <Car className="w-16 h-16 text-orange-500 mx-auto" />
          </motion.div>

          {/* Spark effects */}
          <motion.div
            className="absolute -top-2 -right-2"
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
            <Zap className="w-6 h-6 text-yellow-400" />
          </motion.div>
        </motion.div>

        {/* Brand Name */}
        <motion.h1
          className="text-4xl font-bold mb-8"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <span className="bg-gradient-to-r from-orange-500 via-red-500 to-yellow-500 bg-clip-text text-transparent">
            MOTORISED
          </span>
          <br />
          <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            WHEELS
          </span>
        </motion.h1>

        {/* Moving Cars Animation */}
        <div className="relative w-80 h-4 bg-slate-700 rounded-full mx-auto mb-6 overflow-hidden">
          <motion.div
            className="absolute top-0 left-0 h-full bg-gradient-to-r from-orange-500 to-red-500 rounded-full"
            style={{ width: `${progress}%` }}
            transition={{ duration: 0.1 }}
          />

          {/* Moving car icons */}
          <motion.div
            className="absolute top-1/2 transform -translate-y-1/2"
            animate={{ x: [0, 300] }}
            transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          >
            <Car className="w-4 h-4 text-white" />
          </motion.div>

          <motion.div
            className="absolute top-1/2 transform -translate-y-1/2"
            animate={{ x: [-20, 320] }}
            transition={{
              duration: 2.5,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
              delay: 0.5,
            }}
          >
            <Car className="w-3 h-3 text-orange-300" />
          </motion.div>
        </div>

        {/* Progress Text */}
        <motion.p
          className="text-slate-400 text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          Loading... {progress}%
        </motion.p>
      </div>
    </motion.div>
  )
}
