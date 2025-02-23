"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"

interface ProjectCardProps {
  title: string
  subtitle: string
  image: string
  gradient: string
}

export default function ProjectCard({ title, subtitle, image, gradient }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className="relative rounded-2xl overflow-hidden group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`bg-gradient-to-br ${gradient} p-6 aspect-[4/3] relative`}>
        <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover rounded-lg" />
      </div>

      <motion.div
        className="absolute inset-0 bg-blue-500/80 flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.2 }}
      >
        <Button variant="secondary" size="lg" className="opacity-0 group-hover:opacity-100 transition-opacity">
          View
        </Button>
      </motion.div>

      <div className="p-4">
        <h3 className="font-semibold">{title}</h3>
        <p className="text-gray-500 text-sm">{subtitle}</p>
      </div>
    </div>
  )
}

