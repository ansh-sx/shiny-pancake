"use client"
import ProfileIsland from "@/components/profile-island"
import IntroSection from "@/components/intro-section"
import ProjectScroll from "@/components/project-scroll"
import ClientLogos from "@/components/client-logos"

export default function Home() {
  return (
    <main className="items-center justify-center  mx-auto max-w-[420px] ">
      <div className="mt-4 mb-12">
        <ProfileIsland />
      </div>

      <div className="mb-16">
        <IntroSection />
      </div>

      <section className="mb-8">

        <p className="text-lg mb-4">I have 10years+ experience</p>
        <p className="p-text text-lg  mb-12">  
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.  
          </p>

          
        <div className="mb-16">
        <ClientLogos />
          <h3 className="text-sm text-gray-400 text-center mt-4">Recent Clients</h3>
          
        </div>

        <ProjectScroll />
      </section>

      <section >
        <p className="text-lg mb-6 ">
          I bring a unique creative vision to every project, delivering outstanding results.
        </p >
        <p className="text-lg mb-6 " >
        Jut a llorem tht a dha om dkmsfsjvsjbk</p>
      </section>

      <div className="flex space-x-4 mb-8">
        <button className="bg-black text-white rounded-full px-4 f py-2">Boke a Call</button>
          <button
              className="bg-[#F4F4F4] text-black  rounded-full px-4 py-2"
                  onClick={() => navigator.clipboard.writeText("anshsxa@gmail.com")}
                    >
                        Copy Email
                          </button>
                          </div>

                          <div className="bg-[#F4F4F4] flex items-center space-x-3 p-4 mb-16">
                            <a href="https://x.com/AnshSX" target="_blank" className="hover:text-black">
                                <svg className="w-6 h-6 inline" viewBox="0 0 24 24" fill="currentColor"><path d="M20.57 3.75H3.43a1.68 1.68 0 00-1.68 1.68v13.14a1.68 1.68 0 001.68 1.68h17.14a1.68 1.68 0 001.68-1.68V5.43a1.68 1.68 0 00-1.68-1.68zm-6.86 13.72l-3.3-4.8-3.58 4.8H5.25L9.55 12 5.25 7.53h2.58l3.22 4.5 3.04-4.5h2.58l-3.94 4.8 4.19 5.48h-2.58z"/></svg>
                                    Twitter
                                      </a>
                                        <a href="https://instagram.com/AnshSX" target="_blank" className="hover:text-black">
                                            <svg className="w-6 h-6 inline" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.16c3.2 0 3.58 0 4.85.07 1.17.06 1.94.25 2.64.53.72.28 1.33.65 1.93 1.24.6.6.96 1.21 1.24 1.93.28.7.47 1.47.53 2.64.07 1.27.07 1.65.07 4.85s0 3.58-.07 4.85c-.06 1.17-.25 1.94-.53 2.64-.28.72-.65 1.33-1.24 1.93-.6.6-1.21.96-1.93 1.24-.7.28-1.47.47-2.64.53-1.27.07-1.65.07-4.85.07s-3.58 0-4.85-.07c-1.17-.06-1.94-.25-2.64-.53-.72-.28-1.33-.65-1.93-1.24-.6-.6-.96-1.21-1.24-1.93-.28-.7-.47-1.47-.53-2.64C2.16 15.58 2.16 15.2 2.16 12s0-3.58.07-4.85c.06-1.17.25-1.94.53-2.64.28-.72.65-1.33 1.24-1.93.6-.6 1.21-.96 1.93-1.24.7-.28 1.47-.47 2.64-.53C8.42 2.16 8.8 2.16 12 2.16m0-2.16C8.74 0 8.32 0 7.05.07 5.74.14 4.81.33 3.94.67 3.06 1 2.33 1.46 1.65 2.15c-.68.68-1.14 1.41-1.48 2.29C.33 5.32.14 6.25.07 7.55.02 8.85 0 9.26 0 12s0 3.15.07 4.45c.07 1.3.26 2.23.53 3.11.34.88.8 1.61 1.48 2.29.68.68 1.41 1.14 2.29 1.48.88.34 1.81.53 3.11.6C8.32 23.98 8.74 24 12 24s3.15 0 4.45-.07c1.3-.07 2.23-.26 3.11-.53.88-.34 1.61-.8 2.29-1.48.68-.68 1.14-1.41 1.48-2.29.34-.88.53-1.81.6-3.11.07-1.3.07-1.71.07-4.45s0-3.15-.07-4.45c-.07-1.3-.26-2.23-.53-3.11-.34-.88-.8-1.61-1.48-2.29-.68-.68-1.41-1.14-2.29-1.48-.88-.34-1.81-.53-3.11-.6C15.15.02 14.74 0 12 0z"/></svg>
                                                Instagram
                                                  </a>
                                                    <a href="https://linkedin.com/in/AnshSX" target="_blank" className="hover:text-black">
                                                        <svg className="w-6 h-6 inline" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.8 0-5 2.2-5 5v14c0 2.8 2.2 5 5 5h14c2.8 0 5-2.2 5-5v-14c0-2.8-2.2-5-5-5zm-11.5 19h-3v-9h3v9zm-1.5-10.4c-1 0-1.7-.8-1.7-1.7s.8-1.7 1.7-1.7 1.7.8 1.7 1.7-.8 1.7-1.7 1.7zm14 10.4h-3v-5c0-1.2-.4-2-1.5-2-.8 0-1.3.6-1.5 1.1-.1.3-.1.7-.1 1v5h-3v-9h3v1.3c.4-.6 1.1-1.5 2.7-1.5 2 0 3.4 1.3 3.4 4v5.2z"/></svg>
                                                            LinkedIn
                                                              </a>
                                                              </div>
    </main>
  )
}

