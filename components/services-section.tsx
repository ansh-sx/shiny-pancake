"use client"

import { Code2, Palette, Smartphone } from "lucide-react"
import { motion } from "framer-motion"

const services = [
  {
    icon: <Palette className="w-6 h-6" />,
    title: "Website Design",
    description: "High conversion landing pages",
  },
  {
    icon: <Smartphone className="w-6 h-6" />,
    title: "App Design",
    description: "Mobile and web applications",
  },
  {
    icon: <Code2 className="w-6 h-6" />,
    title: "Custom Design",
    description: "Tailored design systems",
  },
]

export default function ServicesSection() {
  return (
    <section className="mb-16">
      <h2 className="text-2xl font-semibold mb-8">My Services Include</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center text-center p-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <div className="mb-4 p-3 bg-gray-50 rounded-full">{service.icon}</div>
            <h3 className="font-semibold mb-2">{service.title}</h3>
            <p className="text-sm text-gray-500">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

