export default function IntroSection() {
  return (
    <div className="grid items-center justify-center mx-auto max-w-[420px]">
      <div className="max-w-3xl">
        <p className="  text-lg mb-4">
          Meet your trusted design partner Sajon, a design-focused engineer who enjoys designing.
        </p>
        <p className="text-lg mb-8 ">
          A multidisciplinary designer who crafting strong brands for SaaS products, Website, and Apps with a deep
          understanding of user needs.
        </p>
      </div>

      <div className="aspect-video bg-gray-100 rounded-lg mb-4 overflow-hidden">
        <video className="w-full h-full object-cover " poster="/placeholder.svg?height=400&width=600" autoPlay loop>
          <source src="/demo-reel.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
      </div>
      <hr className="border-t w-[420px] border-[#bfbfbf]  mx-auto mb-2" />
      <p className="text-sm text-gray-400 text-center ">My Recent Projects</p>
    </div>
  )
}

