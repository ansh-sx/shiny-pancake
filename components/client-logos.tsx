"use client"

import { motion } from "framer-motion"

const logos = [
  "Client 1",
  "Client 2",
  "Client 3",
  "Client 4",
  "Client 5",
  "Client 1",
  "Client 2",
  "Client 3",
  "Client 4",
  "Client 5",
]

export default function ClientLogos() {
  return (
    <div className="overflow-hidden">
      <motion.div
        className="flex gap-8 whitespace-nowrap"
        animate={{
          x: [0, -1000],
        }}
        transition={{
          x: {
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "loop",
            duration: 20,
            ease: "linear",
          },
        }}
      >
        {logos.map((logo, index) => (
          <span key={index} className="text-2xl font-semibold opacity-50">
            {logo}
          </span>
        ))}
      </motion.div>
    </div>
  )
}

