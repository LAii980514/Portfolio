"use client"

import { motion } from "framer-motion"
import { ArrowDown } from "lucide-react"

export function Hero() {
  return (
    <section className="relative w-full min-h-screen flex flex-col justify-between overflow-hidden bg-black text-white px-8 md:px-16 lg:px-[10%] xl:px-[15%] pt-32 pb-16">
      
      {/* Container for the huge typography - Left aligned */}
      <div className="flex flex-col justify-center w-full flex-1 mt-10">
        <h1 className="flex flex-col font-black tracking-tighter uppercase leading-[0.82] text-[16vw] sm:text-[15vw] md:text-[13vw] lg:text-[10vw] text-left">
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
            className="block -mt-[2%]"
          >
            DESIGN
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="block -mt-[2%]"
          >
            PORTFOLIO
          </motion.span>
        </h1>
      </div>

      {/* Bottom section: Arrow on bottom left, Subtitle on bottom right */}
      <div className="w-full flex flex-col-reverse sm:flex-row justify-between items-start sm:items-end mt-16 gap-8">
        
        {/* Scroll indicator (Bottom Left) */}
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

        {/* Subtitle (Bottom Right) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-md sm:text-left text-left sm:max-w-xs md:max-w-sm lg:max-w-md"
        >
          <p className="text-lg md:text-xl font-normal text-neutral-400 leading-relaxed">
            시선을 이끄는 감각으로,<br />
            플레이 경험을 설계합니다.
          </p>
          <p className="mt-4 text-neutral-500 font-medium tracking-wide">
            레벨디자이너 김용언
          </p>
        </motion.div>
        
      </div>
    </section>
  )
}
