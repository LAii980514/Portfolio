"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"

const illustrations = [
  { id: 1, title: "오피스 라이프", image: "/images/illust_1.jpg" },
  { id: 2, title: "나른한 오후", image: "/images/illust_2.jpg" },
  { id: 3, title: "가챠샵 쇼핑", image: "/images/illust_3.jpg" },
]

export function Illustrations() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  return (
    <section className="relative w-full py-32 flex flex-col items-center">
      <div className="w-full max-w-7xl px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12"
        >
          <div className="flex items-center gap-4 mb-4">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
              일러스트 개인작
            </h2>
            <div className="flex-1 h-px bg-border" />
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {illustrations.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group cursor-pointer flex flex-col gap-4"
              onClick={() => setSelectedImage(item.id)}
            >
              <div className="relative aspect-[3/4] overflow-hidden rounded-xl bg-white/[0.03] border border-white/10 hover:border-[#A78BFA]/50 hover:shadow-[0_0_20px_rgba(167,139,250,0.15)] transition-all duration-300">
                {/* Scale target */}
                <motion.div 
                  className="absolute inset-0 transition-transform duration-500 group-hover:scale-105"
                >
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                </motion.div>
                
                {/* Hover overlay hint */}
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-colors duration-500 pointer-events-none" />
              </div>
              
              <p className="text-center font-medium text-foreground group-hover:text-primary transition-colors">
                {item.title}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-background/95 backdrop-blur-xl flex items-center justify-center p-6"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative max-w-[90vw] max-h-[90vh] flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img 
                src={illustrations.find(img => img.id === selectedImage)?.image} 
                alt="Illustration full view" 
                className="max-w-[90vw] max-h-[90vh] object-contain rounded-lg shadow-2xl" 
              />
            </motion.div>

            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 p-2 text-foreground hover:text-primary transition-colors"
              aria-label="Close lightbox"
            >
              <X className="w-8 h-8" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
