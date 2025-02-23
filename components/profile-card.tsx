"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Image from "next/image"

interface ProfileCardProps {
  isExpanded: boolean
  onExpand: () => void
}

export default function ProfileCard({ isExpanded, onExpand }: ProfileCardProps) {
  return (
    <motion.div
      className="bg-gray-50 rounded-full mx-auto cursor-pointer"
      initial={false}
      animate={{
        width: isExpanded ? "100%" : "300px",
        height: isExpanded ? "auto" : "80px",
        borderRadius: isExpanded ? "1rem" : "9999px",
      }}
      transition={{ duration: 0.3 }}
      onClick={onExpand}
    >
      <div className="p-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full overflow-hidden relative">
            <Image src="/placeholder.svg?height=48&width=48" alt="Profile" width={48} height={48} />
          </div>
          <span className="font-semibold">Sajon Islam</span>
        </div>
        <Button>Book a call</Button>
      </div>

      {isExpanded && (
        <motion.div className="p-8" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
          <h1 className="text-2xl font-semibold mb-4">
            Meet your trusted design partner Sajon, a design-focused engineer who enjoys designing.
          </h1>
          <p className="text-gray-600">
            A multidisciplinary designer who crafting strong brands for SaaS products, Website, and Apps with a deep
            understanding of user needs.
          </p>
        </motion.div>
      )}
    </motion.div>
  )
}

