"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"

const projects = [
  {
    id: 1,
    title: "Project One",
    description: "A beautiful design project",
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    id: 2,
    title: "Project Two",
    description: "An amazing app design",
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    id: 3,
    title: "Project Three",
    description: "Innovative web platform",
    image: "/placeholder.svg?height=400&width=400",
  },
]

export default function ProjectScroll() {
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  return (
    <div className="overflow-x-auto">
      <div className="flex gap-6 pb-6 min-w-full md:grid md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            className="relative min-w-[300px] md:min-w-0"
            onMouseEnter={() => setHoveredId(project.id)}
            onMouseLeave={() => setHoveredId(null)}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 + 0.2 }}
          >
            <div className="aspect-square rounded-lg overflow-hidden relative">
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                width={400}
                height={400}
                className="object-cover w-full h-full"
              />
              <AnimatePresence>
                {hoveredId === project.id && (
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <motion.div
                      initial={{ y: 50, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: 50, opacity: 0 }}
                      transition={{ type: "spring", stiffness: 300, damping: 25 }}
                    >
                      <Link
                        href={`/product/${project.id}`}
                        className="bg-[#999999] px-4 py-3 rounded-full font-medium text-white"
                      >
                        View
                      </Link>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div className="mt-4">
              <h3 className="font-semibold">{project.title}</h3>
              <p className="text-sm text-gray-500">{project.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

