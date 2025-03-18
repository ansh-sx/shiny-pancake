"use client"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import ProfileIsland from "@/components/profile-island"
import IntroSection from "@/components/intro-section"
import ProjectScroll from "@/components/project-scroll"
import ClientLogos from "@/components/client-logos"
import SkillsSection from "@/components/skills-section"

export default function Home() {

  return (
    <div className="min-h-screen bg-white">
        <>
          <div className=" flex justify-center">
            <ProfileIsland initialAnimation={false} />
          </div>

          <AnimatePresence>
            
              <motion.main
                className="items-center justify-center mx-auto max-w-[420px] pb-16"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
              >
                <motion.div className="mb-12" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }}>
                  <IntroSection />
                </motion.div>

                <motion.section className="mb-8" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }}>
                  <p className="text-lg mb-8">In conclusion, I'm a professional prompt engineer who lets ChatGPT do most of the actual coding.</p>
                  <motion.div className="mb-16" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }}>
                  <SkillsSection />
                </motion.div>
                  <p className="p-text text-lg mb-12"><span className="bg-blue-100 text-blue-500 px-2 py-1 rounded-md">Spoiler</span>: These clients don’t know I spent 90% of the time writing prompts, not code.</p>

                  <motion.div className="mb-16" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }}>
                    <ClientLogos />
                    <h3 className="text-sm text-gray-400 text-center mt-4">Recent Clients</h3>
                  </motion.div>

                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }}>
                    <ProjectScroll />
                  </motion.div>
                </motion.section>

                <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }}>
                  <p className="text-lg mb-6">
                    Want to build something cool?
                  </p>
                  <p className="text-lg mb-6">I’ll bring the prompts, GPT brings the code — together, we’ll fake it till we make it.</p>
                </motion.section>

                

                <motion.div className="flex space-x-4 mb-8" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }}>
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
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8 }}
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
            
          </AnimatePresence>
             </>
    </div>
  )
                    }
