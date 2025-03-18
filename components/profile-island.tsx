"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface ProfileIslandProps {
  initialAnimation?: boolean
}

export default function ProfileIsland({ initialAnimation = false }: ProfileIslandProps) {
  const [isExpanded, setIsExpanded] = useState(false)
  const [animationComplete, setAnimationComplete] = useState(!initialAnimation)

  const personalInfo = {
    age: "17",
    email: "anshsxa@gmail.com",
    phone: "+91 9149871270",
    location: "Jammu, India",
  }

  useEffect(() => {
    if (initialAnimation) {
      // Mark animation as complete after it finishes
      const timer = setTimeout(() => {
        setAnimationComplete(true)
      }, 3000)

      return () => clearTimeout(timer)
    }
  }, [initialAnimation])

  if (initialAnimation) {
    return (
      <div className="fixed inset-0 flex flex-col items-center justify-center">
        {/* Step 1: Name appears at center */}
        <motion.div
          className="relative z-20"
          initial={{ opacity: 0 }}
          animate={{
            opacity: [0, 1, 1, 1, 1],
            y: [0, 0, 0, -150, -150],
          }}
          transition={{
            duration: 3,
            times: [0, 0.1, 0.3, 0.7, 1],
          }}
        >
          <motion.span className="text-2xl font-medium">Ansh Sharma</motion.span>
        </motion.div>

        {/* Step 2-3: Circle appears and expands */}
        <motion.div
          className="bg-[#F4F4F4] rounded-full absolute"
          initial={{
            width: 0,
            height: 64,
            opacity: 0,
          }}
          animate={{
            width: [0, 10, 425, 425],
            height: [0, 64, 64, 64],
            opacity: [0, 1, 1, 1],
            y: [0, 0, 0, -150],
          }}
          transition={{
            duration: 3,
            times: [0, 0.2, 0.5, 0.7],
          }}
        >
          <div className="h-16 flex items-center justify-between px-3 py-3 relative">
            {/* Step 4: Profile image appears */}
            <motion.div className="flex items-center">
              <motion.img
                src="https://raw.githubusercontent.com/ansh-sx/shiny-pancake/main/MOOD%20(2).png"
                alt="Avatar"
                className="w-10 h-10 rounded-full"
                initial={{ opacity: 0, scale: 0 }}
                animate={{
                  opacity: [0, 0, 0, 1],
                  scale: [0, 0, 0, 1.2, 1],
                }}
                transition={{
                  duration: 3,
                  times: [0, 0.4, 0.5, 0.6, 0.7],
                }}
              />
              <span className="ml-3 text-lg font-medium opacity-0">Ansh Sharma</span>
            </motion.div>

            {/* Step 4: Button appears */}
            <motion.a
              href="https://wa.me/919149871270"
              target="_blank"
              className="px-4 py-2 text-white bg-black cursor-pointer rounded-full"
              initial={{ opacity: 0, scale: 0 }}
              animate={{
                opacity: [0, 0, 0, 1],
                scale: [0, 0, 0, 1.2, 1],
              }}
              transition={{
                duration: 3,
                times: [0, 0.4, 0.5, 0.6, 0.7],
              }}
              rel="noreferrer"
            >
              Message Me
            </motion.a>
          </div>
        </motion.div>
      </div>
    )
  }

  // Regular non-animated component
  return (
    <div className="w-full">
      <motion.div
        className="bg-[#F4F4F4] rounded-full cursor-pointer relative overflow-hidden mx-auto"
        animate={{
          width: "425px",
          height: isExpanded ? "160px" : "64px",
          borderRadius: isExpanded ? "1rem" : "2rem",
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 30,
        }}
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex items-center justify-between px-3 py-3">
          <div className="flex items-center">
            <img
              src="https://raw.githubusercontent.com/ansh-sx/shiny-pancake/main/MOOD%20(2).png"
              alt="Avatar"
              className="w-10 h-10 rounded-full"
            />
            <span className="ml-3 text-lg font-medium">Ansh Sharma</span>
          </div>
          <a
            href="https://wa.me/919149871270"
            target="_blank"
            className="px-4 py-2 text-white bg-black cursor-pointer rounded-full"
            rel="noreferrer"
          >
            Message Me
          </a>
        </div>

        <AnimatePresence>
          {isExpanded && (
            <motion.div
              className="p-6 grid grid-cols-2 gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
            >
              {Object.entries(personalInfo).map(([key, value]) => (
                <div key={key} className="text-sm">
                  <span className="text-gray-500 capitalize">{key}: </span>
                  <span className="font-medium">{value}</span>
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  )
}

