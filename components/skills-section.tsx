"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function SkillsSection() {
  return (
    <section className="mb-8">
      <h2 className="text-center text-lg font-medium mb-6">Skills & Tech Stack</h2>

      <div className="bg-gray-50 rounded-xl p-4 overflow-hidden">
        <motion.div
          className="aspect-video relative"
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
        >
          <Image
            src="/placeholder.svg?height=300&width=400"
            alt="Skills and Tech Stack"
            width={400}
            height={300}
            className="rounded-lg w-full h-auto"
          />
        </motion.div>
      </div>
    </section>
  )
}

