"use client"

import { motion } from "framer-motion"
import { ChevronDown } from "lucide-react"

export function Hero() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden flex-col">
      <div className="absolute inset-0 z-0">
        <motion.div
          animate={{ x: [0, 100, 0], y: [0, 50, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute -top-1/4 -left-1/4 w-[50vw] h-[50vw] rounded-full bg-[#7c3aed] opacity-15 blur-[100px] pointer-events-none"
        />
        <motion.div
          animate={{ x: [0, -100, 0], y: [0, -50, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 -right-1/4 w-[50vw] h-[50vw] rounded-full bg-[#3b82f6] opacity-15 blur-[100px] pointer-events-none"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </div>

      {/* Animated grid pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(to right, currentColor 1px, transparent 1px),
                             linear-gradient(to bottom, currentColor 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}
        />
      </div>

      {/* Floating accent orb */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.15, 0.25, 0.15],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-primary/20 blur-[100px]"
      />

      <div className="relative z-10 w-full max-w-7xl px-4 md:px-6 text-center flex flex-col items-center">
        {/* Main Headline */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight text-balance">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0, ease: [0.16, 1, 0.3, 1] }}
            className="block"
          >
            <span className="text-[#A78BFA]">시선</span>을 이끄는 감각으로,
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="block mt-2"
          >
            <span className="text-[#A78BFA]">플레이 경험</span>을 설계합니다.
          </motion.span>
        </h1>

        {/* Spacer 1 */}
        <div className="h-16 md:h-20 w-full" aria-hidden="true"></div>

        {/* Subtitle / Name */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="text-xl md:text-2xl font-medium text-foreground max-w-2xl mx-auto"
        >
          레벨디자이너 김용언
        </motion.p>

        {/* Spacer 2 */}
        <div className="h-16 md:h-20 w-full" aria-hidden="true"></div>

        {/* CTA Button */}
        <div className="text-center w-full flex justify-center">
          <motion.a
            href="#portfolio"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block w-auto px-8 py-3 whitespace-nowrap bg-white text-black hover:bg-primary hover:text-black rounded-full font-medium transition-colors"
          >
            대표 포트폴리오 보기
          </motion.a>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown className="w-6 h-6 text-muted-foreground" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
