"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"

const galleryImages = [
  { id: 1, title: "도쿄 스카이트리", aspect: "portrait", src: "/images/gallery_3.jpg" },
  { id: 2, title: "호숫가 공원", aspect: "landscape", src: "/images/gallery_1.jpg" },
  { id: 3, title: "도심 전경", aspect: "landscape", src: "/images/gallery_2.jpg" },
  { id: 4, title: "도쿄 타워", aspect: "portrait", src: "/images/gallery_4.jpg" },
  { id: 5, title: "오후의 도심", aspect: "landscape", src: "/images/gallery_5.jpg" },
  { id: 6, title: "산 정상", aspect: "portrait", src: "" },
  { id: 7, title: "철도 풍경", aspect: "landscape", src: "/images/gallery_6.jpg" },
  { id: 8, title: "고대 유적", aspect: "landscape", src: "" },
]

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  return (
    <section id="gallery" className="relative w-full py-32 flex flex-col items-center">
      <div className="w-full max-w-7xl px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12"
        >
          <div className="flex items-center gap-4 mb-4">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
              갤러리
            </h2>
            <div className="flex-1 h-px bg-border" />
          </div>
          <p className="text-muted-foreground">
            다양한 프로젝트의 스크린샷, 컨셉 아트 및 렌더링 결과물입니다.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: 0.8, 
                delay: (index % 3) * 0.1,
                ease: [0.16, 1, 0.3, 1]
              }}
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
                className={`w-full bg-gradient-to-br from-secondary to-muted flex items-center justify-center relative ${
                  image.aspect === "portrait" ? "aspect-[3/4]" : "aspect-video"
                }`}
              >
                {image.src ? (
                  <img src={image.src} alt={image.title} className="absolute inset-0 w-full h-full object-cover" />
                ) : (
                  <span className="text-muted-foreground/50 text-sm relative z-10">{image.title}</span>
                )}
              </div>
              
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <motion.p 
                  initial={{ y: 10 }}
                  whileHover={{ y: 0 }}
                  className="text-foreground font-medium"
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
              className="relative max-w-[90vw] max-h-[90vh] flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              {galleryImages.find((img) => img.id === selectedImage)?.src ? (
                <img 
                  src={galleryImages.find(img => img.id === selectedImage)?.src} 
                  alt="Gallery full view" 
                  className="max-w-[90vw] max-h-[90vh] object-contain rounded-lg shadow-2xl" 
                />
              ) : (
                <div className="w-[800px] aspect-video bg-gradient-to-br from-secondary to-muted rounded-2xl flex items-center justify-center">
                  <span className="text-muted-foreground">
                    {galleryImages.find(img => img.id === selectedImage)?.title}
                  </span>
                </div>
              )}
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
