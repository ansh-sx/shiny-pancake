export default function IntroSection() {
  return (
    <div className="grid items-center justify-center mx-auto max-w-[420px]">
      <div className="max-w-3xl">
        <p className="text-lg mb-4">
          Hey, I’m <span className="bg-blue-100 text-blue-500 px-2 py-1 rounded-md">Ansh</span>
           ,a 17-year-old web and app developer (read: professional prompt engineer who lets ChatGPT do most of the actual coding).
        </p>
        <p className="text-lg mb-4">I don’t write a lot of code — I write prompts, fix errors, and pretend I knew the solution all along.</p>
        <p className="text-lg mb-4">Still learning, still building, and yes, still copy-pasting from ChatGPT like it’s a superpower.</p>
        <p className="text-lg mb-8 ">
          If it runs, it’s mine. If it breaks, blame the AI 😌
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

