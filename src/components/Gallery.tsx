"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"

const galleryImages = [
  { id: 1, title: "오후의 도심 거리", aspect: "portrait" },
  { id: 2, title: "노을 지는 강변", aspect: "landscape" },
  { id: 3, title: "새벽녘 숲길", aspect: "landscape" },
  { id: 4, title: "눈 덮인 산봉우리", aspect: "portrait" },
  { id: 5, title: "해안가 드라이브 코스", aspect: "landscape" },
  { id: 6, title: "오래된 뒷골목 정취", aspect: "portrait" },
  { id: 7, title: "비 오는 날의 카페 창가", aspect: "landscape" },
  { id: 8, title: "도심 야경", aspect: "landscape" },
]

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  return (
    <section id="gallery" className="py-32">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <div className="flex items-center gap-4 mb-4">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
              Gallery
            </h2>
            <div className="flex-1 h-px bg-border" />
          </div>
          <p className="text-muted-foreground">
            작업물, 스크린샷, 렌더링 및 진행 과정을 담은 갤러리.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              onClick={() => setSelectedImage(image.id)}
              className={`group relative cursor-pointer overflow-hidden rounded-xl ${
                image.aspect === "portrait" 
                  ? "row-span-2" 
                  : index === 1 || index === 4 
                    ? "col-span-2" 
                    : ""
              }`}
            >
              <div 
                className={`w-full bg-gradient-to-br from-secondary to-muted flex items-center justify-center ${
                  image.aspect === "portrait" ? "aspect-[3/4]" : "aspect-video"
                }`}
              >
                <span className="text-muted-foreground/50 text-sm whitespace-nowrap overflow-hidden text-ellipsis px-2">{image.title}</span>
              </div>
              
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <motion.p 
                  initial={{ y: 10 }}
                  whileHover={{ y: 0 }}
                  className="text-foreground font-medium text-center px-4"
                >
                  {image.title}
                </motion.p>
              </div>

              {/* Desaturate to color effect */}
              <div className="absolute inset-0 bg-background/20 group-hover:bg-transparent transition-all duration-300" />
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
              className="relative max-w-4xl w-full aspect-video bg-gradient-to-br from-secondary to-muted rounded-2xl flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <span className="text-muted-foreground text-lg">
                {galleryImages.find(img => img.id === selectedImage)?.title}
              </span>
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
