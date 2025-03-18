"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function SkillsSection() {
  return (
    <section className="grid items-center justify-center mx-auto max-w-[420px] mb-8">
      
      <div className="bg-gray-50 rounded-xl mb-4 overflow-hidden">
        <motion.div
          className="aspect-video relative"
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
        >
          <Image
            src="/placeholder.svg?height=300&width=400"
            alt="Skills and Tech Stack"
            width={400}
            
            className="rounded-lg w-full h-auto"
          />
        </motion.div>
      </div>
      <hr className="border-t w-[420px] border-[#bfbfbf]  mx-auto mb-2" />
      <p className="text-sm text-gray-400 text-center ">My Skills & Tech Stack</p>
    </section>
  )
}

