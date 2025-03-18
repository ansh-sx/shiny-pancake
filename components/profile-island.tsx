"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

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
      const timer = setTimeout(() => {
        setAnimationComplete(true)
      }, 3000)
      return () => clearTimeout(timer)
    }
  }, [initialAnimation])

  if (initialAnimation && !animationComplete) {
    return (
      <div className="fixed inset-0 flex flex-col items-center justify-center z-50">
        {/* Capsule expanding */}
        <motion.div
          className="bg-[#F4F4F4] rounded-full absolute"
          initial={{ width: 0, height: 64, opacity: 0 }}
          animate={{
            width: [0, 10, 425, 425],
            height: [0, 64, 64, 64],
            opacity: [0, 1, 1, 1],
          }}
          transition={{ duration: 1.5, ease: "easeInOut", times: [0, 0.3, 0.6, 1] }}
        />

        {/* Profile Info + Button */}
        <div className="absolute flex items-center justify-between px-4 py-3 w-[425px] z-10 -translate-y-44">
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
      </div>
    )
  }

  return (
    <div className="w-full">
      <motion.div
        className="bg-[#F4F4F4] rounded-full cursor-pointer relative overflow-hidden mx-auto mt-10"
        animate={{
          height: isExpanded ? "160px" : "64px",
          borderRadius: isExpanded ? "1rem" : "2rem",
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 30,
        }}
        onClick={() => setIsExpanded(!isExpanded)}
        style={{ width: "425px" }}
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

        {isExpanded && (
          <div className="p-6 grid grid-cols-2 gap-4">
            {Object.entries(personalInfo).map(([key, value]) => (
              <div key={key} className="text-sm">
                <span className="text-gray-500 capitalize">{key}: </span>
                <span className="font-medium">{value}</span>
              </div>
            ))}
          </div>
        )}
      </motion.div>

      <div className="mt-10">
        {/* Add your other content here */}
      </div>
    </div>
  )
                       }
