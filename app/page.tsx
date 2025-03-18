"use client"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import ProfileIsland from "@/components/profile-island"
import IntroSection from "@/components/intro-section"
import ProjectScroll from "@/components/project-scroll"
import ClientLogos from "@/components/client-logos"
import SkillsSection from "@/components/skills-section"

export default function Home() {
  const [loading, setLoading] = useState(true)
  const [showContent, setShowContent] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 3000)

    const contentTimer = setTimeout(() => {
      setShowContent(true)
    }, 3500)

    return () => {
      clearTimeout(timer)
      clearTimeout(contentTimer)
    }
  }, [])

  return (
    <div className="min-h-screen bg-white">
      <AnimatePresence>
        {loading ? (
          <motion.div
            key="profile-loader"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex justify-center items-center min-h-screen"
          >
            <ProfileIsland initialAnimation={true} />
          </motion.div>
        ) : (
          <>
            <div className="mt-4 mb-12 flex justify-center">
              <ProfileIsland initialAnimation={false} />
            </div>

            <AnimatePresence>
              {showContent && (
                <motion.main
                  className="items-center justify-center mx-auto max-w-[420px] pb-16"
                  initial="hidden"
                  animate="visible"
                  variants={{
                    hidden: { opacity: 0 },
                    visible: { opacity: 1 },
                  }}
                >
                  <motion.div
                    className="mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <IntroSection />
                  </motion.div>

                  <motion.section
                    className="mb-8"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    <p className="text-lg mb-4">I have 10years+ experience</p>
                    <p className="p-text text-lg mb-12">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

                    <motion.div
                      className="mb-16"
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.4 }}
                    >
                      <ClientLogos />
                      <h3 className="text-sm text-gray-400 text-center mt-4">Recent Clients</h3>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.6 }}
                    >
                      <ProjectScroll />
                    </motion.div>
                  </motion.section>

                  <motion.section
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                  >
                    <p className="text-lg mb-6">
                      I bring a unique creative vision to every project, delivering outstanding results.
                    </p>
                    <p className="text-lg mb-6">Jut a llorem tht a dha om dkmsfsjvsjbk</p>
                  </motion.section>

                  <motion.div
                    className="mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 1.0 }}
                  >
                    <SkillsSection />
                  </motion.div>

                  <motion.div
                    className="flex space-x-4 mb-8"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 1.2 }}
                  >
                    <a
                      href="https://wa.me/919149871270"
                      target="_blank"
                      className="bg-black text-white rounded-full px-4 py-2"
                      rel="noreferrer"
                    >
                      Message Me
                    </a>
                    <button
                      className="bg-[#F4F4F4] text-black rounded-full px-4 py-2"
                      onClick={() => navigator.clipboard.writeText("anshsxa@gmail.com")}
                    >
                      Copy Email
                    </button>
                  </motion.div>

                  <motion.div
                    className="bg-[#F4F4F4] flex items-center justify-center space-x-6 p-4 mb-16 rounded-full"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 1.4 }}
                  >
                    <a
                      href="https://twitter.com/AnshSX"
                      target="_blank"
                      className="hover:text-black flex items-center gap-2"
                      rel="noreferrer"
                    >
                      <img src="https://www.twitter.com/favicon.ico" alt="Twitter" className="w-5 h-5" />
                      Twitter
                    </a>
                    <a
                      href="https://instagram.com/AnshSX"
                      target="_blank"
                      className="hover:text-black flex items-center gap-2"
                      rel="noreferrer"
                    >
                      <img src="https://www.instagram.com/favicon.ico" alt="Instagram" className="w-5 h-5" />
                      Instagram
                    </a>
                    <a
                      href="https://linkedin.com/in/AnshSX"
                      target="_blank"
                      className="hover:text-black flex items-center gap-2"
                      rel="noreferrer"
                    >
                      <img src="https://www.linkedin.com/favicon.ico" alt="LinkedIn" className="w-5 h-5" />
                      LinkedIn
                    </a>
                  </motion.div>
                </motion.main>
              )}
            </AnimatePresence>
          </>
        )}
      </AnimatePresence>
    </div>
  )
            }
