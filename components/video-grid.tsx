export default function VideoGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {[1, 2].map((item) => (
        <div key={item} className="aspect-video bg-gray-100 rounded-lg overflow-hidden">
          <video className="w-full h-full object-cover" poster="/placeholder.svg?height=400&width=600">
            <source src="" type="video/mp4" />
          </video>
        </div>
      ))}
    </div>
  )
}

