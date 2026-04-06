"use client"

import { motion } from "framer-motion"
import { ArrowDown } from "lucide-react"

export function Hero() {
  return (
    <section className="relative w-full min-h-screen flex flex-col justify-end overflow-hidden bg-black text-white px-4 md:px-12 lg:px-24 pb-12 pt-32">
      {/* Container for the huge typography */}
      <div className="flex-1 flex flex-col justify-center">
        <h1 className="flex flex-col font-black tracking-tighter uppercase leading-[0.85] text-[15vw] sm:text-[14vw] md:text-[12vw] lg:text-[11vw] text-left">
          <motion.span
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="block"
          >
            LEVEL
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="block"
          >
            DESIGN
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="block"
          >
            PORTFOLIO
          </motion.span>
        </h1>
      </div>

      {/* Bottom section with subtitle and scroll indicator */}
      <div className="w-full flex flex-col sm:flex-row justify-between items-start sm:items-end mt-12 gap-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-md"
        >
          <p className="text-xl md:text-2xl font-medium text-neutral-300">
            시선을 이끄는 감각으로,<br />
            플레이 경험을 설계합니다.
          </p>
          <p className="mt-4 text-neutral-500 font-medium">
            레벨디자이너 김용언
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center justify-center p-4 border border-white/20 rounded-full hover:bg-white hover:text-black transition-colors cursor-pointer"
          onClick={() => {
            const el = document.getElementById("portfolio");
            el?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          <ArrowDown className="w-6 h-6" />
        </motion.div>
      </div>
    </section>
  )
}
