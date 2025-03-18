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
      const timer = setTimeout(() => setAnimationComplete(true), 1800)
      return () => clearTimeout(timer)
    }
  }, [initialAnimation])

  if (initialAnimation && !animationComplete) {
    return (
      <div className="fixed inset-0 flex flex-col items-center justify-center z-50 bg-white">
        <motion.div
          className="bg-[#F4F4F4] rounded-full absolute"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          style={{ width: "425px", height: "64px" }}
        />

        <motion.div
          className="absolute flex items-center justify-between px-4 py-3 w-[425px] z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6, ease: "easeInOut" }}
        >
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
        </motion.div>
      </div>
    )
  }

  return (
    <div className="w-full">
      <motion.div
        className="bg-[#F4F4F4] rounded-full cursor-pointer relative overflow-hidden mx-auto mt-10"
        animate={{
          width: "425px",
          height: isExpanded ? "160px" : "64px",
          borderRadius: isExpanded ? "1rem" : "2rem",
        }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
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
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
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

      <motion.div
        className="mt-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.6, ease: "easeInOut" }}
      >
        {/* Add your other content below here */}
      </motion.div>
    </div>
  )
}
