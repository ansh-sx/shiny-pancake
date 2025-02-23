"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

export default function ProfileIsland() {
  const [isExpanded, setIsExpanded] = useState(false)

  const personalInfo = {
    age: "17",
    email: "anshsxa@gmail.com",
    phone: "+91 9149871270",
    location: "Jammu, India",
  }

  return (
    <div className="flex justify-center">
      <motion.div
        className="bg-[#F4F4F4] rounded-full cursor-pointer relative overflow-hidden"
        initial={false}
        animate={{
          width: isExpanded ? "425px" : "425px",
          height: isExpanded ? "160px" : "64px",
          borderRadius: isExpanded ? "1rem" : "2rem",
        }}
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <motion.div
          className="h-12"
          animate={{
            y: isExpanded ? 0 : 0,
            opacity: isExpanded ? 1 : 1,
          }}
        >
          <div className="flex items-center justify-between px-3 py-3 ">
            <div className="flex items-center">
                <img
                      src="https://raw.githubusercontent.com/ansh-sx/shiny-pancake/main/MOOD%20(2).png"
                            alt="Avatar"
                                  className="w-10 h-10 rounded-full"
                                      />
                                          <span className="ml-3 text-lg font-medium">Ansh Sharma</span>
                                            </div>
                                              <button className="px-4 py-2 text-white bg-black cursor-pointer rounded-full">
                                                  Book a Call
                                                    </button>
                                                    </div>
        </motion.div>

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

