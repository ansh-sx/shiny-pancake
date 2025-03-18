"use client"

import { motion } from "framer-motion"

export default function LoadingAnimation() {
  return (
    <motion.div
      className="fixed inset-0 flex items-center justify-center bg-white z-50"
      initial={{ opacity: 1 }}
      exit={{
        opacity: 0,
        transition: { duration: 0.5, delay: 2.5 },
      }}
    >
      <div className="relative w-full h-full flex items-center justify-center">
        {/* Background pill that expands */}
        <motion.div
          className="absolute bg-[#F4F4F4] rounded-full"
          initial={{ width: 0, height: 64, top: "50%", left: "50%", x: "-50%", y: "-50%", zIndex: 1 }}
          animate={{
            width: ["0px", "0px", "425px", "425px"],
            left: ["50%", "50%", "50%", "50%"],
            top: ["50%", "50%", "50%", "10%"],
          }}
          transition={{
            duration: 2.5,
            times: [0, 0.3, 0.7, 1],
            ease: "easeInOut",
          }}
        />

        {/* Name that shifts position */}
        <motion.h1
          className="text-2xl font-medium z-10 absolute"
          initial={{
            top: "50%",
            left: "50%",
            x: "-50%",
            y: "-50%",
          }}
          animate={{
            top: ["50%", "50%", "50%", "10%"],
            left: ["50%", "50%", "50%", "30%"],
            x: ["-50%", "-50%", "-50%", "-50%"],
            y: ["-50%", "-50%", "-50%", "-50%"],
          }}
          transition={{
            duration: 2.5,
            times: [0, 0.3, 0.7, 1],
            ease: "easeInOut",
          }}
        >
          Ansh Sharma
        </motion.h1>

        {/* Profile image that appears */}
        <motion.div
          className="absolute z-10 rounded-full overflow-hidden"
          initial={{
            opacity: 0,
            width: 40,
            height: 40,
            top: "10%",
            left: "15%",
            y: "-50%",
          }}
          animate={{
            opacity: [0, 0, 0, 1],
          }}
          transition={{
            duration: 2.5,
            times: [0, 0.6, 0.8, 1],
            ease: "easeInOut",
          }}
        >
          <img
            src="https://raw.githubusercontent.com/ansh-sx/shiny-pancake/main/MOOD%20(2).png"
            alt="Avatar"
            className="w-10 h-10 rounded-full"
          />
        </motion.div>

        {/* Message button that appears */}
        <motion.div
          className="absolute z-10"
          initial={{
            opacity: 0,
            top: "10%",
            right: "15%",
            y: "-50%",
          }}
          animate={{
            opacity: [0, 0, 0, 1],
          }}
          transition={{
            duration: 2.5,
            times: [0, 0.6, 0.8, 1],
            ease: "easeInOut",
          }}
        >
          <div className="px-4 py-2 text-white bg-black cursor-pointer rounded-full">Message Me</div>
        </motion.div>

        {/* Content that fades in */}
        <motion.div
          className="absolute top-[30%] left-0 right-0 bottom-0"
          initial={{ opacity: 0, y: 50 }}
          animate={{
            opacity: [0, 0, 0, 1],
            y: [50, 50, 50, 0],
          }}
          transition={{
            duration: 2.5,
            times: [0, 0.7, 0.9, 1],
            ease: "easeInOut",
          }}
        >
          <div className="w-full h-full bg-gradient-to-b from-transparent to-white opacity-20"></div>
        </motion.div>
      </div>
    </motion.div>
  )
}

