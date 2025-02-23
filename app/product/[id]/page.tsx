import { notFound } from "next/navigation"
import Image from "next/image"

export default function ProductPage({ params }: { params: { id: string } }) {
  // In a real app, fetch project data based on params.id
  const project = {
    title: "Project Details",
    description: "Full project description would go here",
    image: "/placeholder.svg?height=600&width=800",
  }

  if (!project) {
    notFound()
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6">{project.title}</h1>
      <div className="aspect-video relative mb-8">
        <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover rounded-lg" />
      </div>
      <p className="text-gray-600">{project.description}</p>
    </div>
  )
}

