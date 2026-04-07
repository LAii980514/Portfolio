"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"

/*
 * 갤러리 그리드: 명시적 grid-row / grid-column 위치 지정
 * 4열 기준, gridAutoRows = 180px
 * 모든 셀의 위치를 수동 지정하여 빈 틈 0
 *
 * Visual layout (6 rows):
 *   Col:  1        2        3        4
 * R1  [ #1(2R) ] [   #2 (2C)      ] [ #3     ]
 * R2  [        ] [ #4     ] [ #5 (2C)         ]
 * R3  [ #6(2R) ] [ #7(2R) ] [ #8     ] [ #9   ]
 * R4  [        ] [        ] [ #10(2C)         ]
 * R5  [ #11    ] [ #12(2C)         ] [ #13(2R)]
 * R6  [ #14(2C)           ] [ #15   ] [       ]
 */
const galleryImages: {
  id: number
  title: string
  src: string
  style: React.CSSProperties
}[] = [
  // Row 1-2, Col 1: portrait
  { id: 1,  title: "도쿄 스카이트리", src: "/images/gallery_3.jpg", style: { gridColumn: "1 / 2",  gridRow: "1 / 3" } },
  // Row 1, Col 2-3: wide
  { id: 2,  title: "호숫가 공원",     src: "/images/gallery_1.jpg", style: { gridColumn: "2 / 4",  gridRow: "1 / 2" } },
  // Row 1, Col 4
  { id: 3,  title: "도심 전경",       src: "/images/gallery_2.jpg", style: { gridColumn: "4 / 5",  gridRow: "1 / 2" } },
  // Row 2, Col 2
  { id: 4,  title: "도쿄 타워",       src: "/images/gallery_4.jpg", style: { gridColumn: "2 / 3",  gridRow: "2 / 3" } },
  // Row 2, Col 3-4: wide
  { id: 5,  title: "오후의 도심",     src: "/images/gallery_5.jpg", style: { gridColumn: "3 / 5",  gridRow: "2 / 3" } },
  // Row 3-4, Col 1: portrait
  { id: 6,  title: "산 정상",         src: "",                      style: { gridColumn: "1 / 2",  gridRow: "3 / 5" } },
  // Row 3-4, Col 2: portrait
  { id: 7,  title: "철도 풍경",       src: "/images/gallery_6.jpg", style: { gridColumn: "2 / 3",  gridRow: "3 / 5" } },
  // Row 3, Col 3
  { id: 8,  title: "고대 유적",       src: "",                      style: { gridColumn: "3 / 4",  gridRow: "3 / 4" } },
  // Row 3, Col 4
  { id: 9,  title: "추가 예정",       src: "",                      style: { gridColumn: "4 / 5",  gridRow: "3 / 4" } },
  // Row 4, Col 3-4: wide
  { id: 10, title: "추가 예정",       src: "",                      style: { gridColumn: "3 / 5",  gridRow: "4 / 5" } },
  // Row 5, Col 1
  { id: 11, title: "추가 예정",       src: "",                      style: { gridColumn: "1 / 2",  gridRow: "5 / 6" } },
  // Row 5, Col 2-3: wide
  { id: 12, title: "추가 예정",       src: "",                      style: { gridColumn: "2 / 4",  gridRow: "5 / 6" } },
  // Row 5-6, Col 4: portrait
  { id: 13, title: "추가 예정",       src: "",                      style: { gridColumn: "4 / 5",  gridRow: "5 / 7" } },
  // Row 6, Col 1-2: wide
  { id: 14, title: "추가 예정",       src: "",                      style: { gridColumn: "1 / 3",  gridRow: "6 / 7" } },
  // Row 6, Col 3
  { id: 15, title: "추가 예정",       src: "",                      style: { gridColumn: "3 / 4",  gridRow: "6 / 7" } },
]

const illustrations = [
  { id: 1, title: "오피스 라이프", image: "/images/illust_1.jpg" },
  { id: 2, title: "나른한 오후",   image: "/images/illust_2.jpg" },
  { id: 3, title: "가챠샵 쇼핑",   image: "/images/illust_3.jpg" },
  { id: 4, title: "학교의 선생님", image: "/images/illust_4.jpg" },
  { id: 5, title: "하교길 경계",   image: "/images/illust_5.jpg" },
  { id: 6, title: "여름 바다",     image: "/images/illust_6.jpg" },
]

type Tab = "gallery" | "illustrations"

export function Gallery() {
  const [activeTab, setActiveTab] = useState<Tab>("gallery")
  const [selectedImage, setSelectedImage] = useState<{ src: string; title: string } | null>(null)

  const tabs: { id: Tab; label: string }[] = [
    { id: "gallery", label: "갤러리" },
    { id: "illustrations", label: "일러스트 개인작" },
  ]

  return (
    <section id="gallery" className="relative w-full py-32 flex flex-col items-center">
      <div className="w-full max-w-7xl px-4 md:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-10"
        >
          <div className="flex items-center gap-4 mb-4">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
              갤러리
            </h2>
            <div className="flex-1 h-px bg-border" />
          </div>
          <p className="text-muted-foreground">
            다양한 프로젝트의 스크린샷, 컨셉 아트, 렌더링 결과물 및 개인 일러스트입니다.
          </p>
        </motion.div>

        {/* Tabs */}
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
           className="flex gap-2 mb-12 p-1.5 rounded-2xl bg-white/[0.03] border border-white/10 w-fit"
         >
           {tabs.map((tab) => (
             <button
               key={tab.id}
               id={`gallery-tab-${tab.id}`}
               onClick={() => setActiveTab(tab.id)}
               className={`relative px-6 py-2.5 text-sm md:text-base font-bold rounded-xl transition-all duration-300 outline-none ${
                 activeTab === tab.id
                   ? "text-black shadow-sm"
                   : "text-neutral-400 hover:text-white"
               }`}
             >
               {activeTab === tab.id && (
                 <motion.div
                   layoutId="active-tab-bg"
                   className="absolute inset-0 bg-white rounded-xl"
                   transition={{ type: "spring", stiffness: 400, damping: 35 }}
                 />
               )}
               <span className="relative z-10">{tab.label}</span>
             </button>
           ))}
         </motion.div>

        {/* Tab Content */}
        <AnimatePresence mode="wait">
          {activeTab === "gallery" && (
            <motion.div
              key="gallery"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            >
              {/*
               * 4-col grid with fixed row height so portrait (row-span-2)
               * fills exactly 2 rows and wide (col-span-2) fills 2 cols.
               * auto-rows = 200px → portrait = 400px+gap, wide = 2col,
               * no leftover black gaps.
               */}
              <div
                className="grid grid-cols-2 md:grid-cols-4 gap-3"
                style={{ gridAutoRows: "180px" }}
              >
                {galleryImages.map((image, index) => (
                  <motion.div
                    key={image.id}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{
                      duration: 0.8,
                      delay: (index % 4) * 0.08,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    onClick={() =>
                      image.src
                        ? setSelectedImage({ src: image.src, title: image.title })
                        : null
                    }
                    className="group relative cursor-pointer overflow-hidden rounded-xl"
                    style={image.style}
                  >
                    {/* Fill entire cell */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/[0.04] to-white/[0.01] flex items-center justify-center">
                      {image.src ? (
                        <img
                          src={image.src}
                          alt={image.title}
                          className="absolute inset-0 w-full h-full object-cover"
                        />
                      ) : (
                        <span className="text-muted-foreground/40 text-sm relative z-10">
                          {image.title}
                        </span>
                      )}
                    </div>

                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <p className="text-foreground font-medium text-sm">
                        {image.title}
                      </p>
                    </div>

                    {/* Subtle tint removal on hover */}
                    <div className="absolute inset-0 bg-background/15 group-hover:bg-transparent transition-all duration-300" />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {activeTab === "illustrations" && (
            <motion.div
              key="illustrations"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            >
              <motion.div
                className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.15 }}
                variants={{
                  hidden: {},
                  visible: { transition: { staggerChildren: 0.12 } },
                }}
              >
                {illustrations.map((item) => (
                  <motion.div
                    key={item.id}
                    variants={{
                      hidden:  { opacity: 0, y: 50, scale: 0.96 },
                      visible: {
                        opacity: 1, y: 0, scale: 1,
                        transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
                      },
                    }}
                    className="group cursor-pointer flex flex-col gap-4"
                    onClick={() =>
                      item.image
                        ? setSelectedImage({ src: item.image, title: item.title })
                        : null
                    }
                  >
                    <div className="relative aspect-[3/4] overflow-hidden rounded-xl bg-white/[0.03] border border-white/10 hover:border-[#A78BFA]/50 hover:shadow-[0_0_20px_rgba(167,139,250,0.15)] transition-all duration-300">
                      {item.image ? (
                        <motion.div className="absolute inset-0 transition-transform duration-500 group-hover:scale-105">
                          <img
                            src={item.image}
                            alt={item.title}
                            className="w-full h-full object-cover"
                          />
                        </motion.div>
                      ) : (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span className="text-muted-foreground/40 text-sm">{item.title}</span>
                        </div>
                      )}
                      <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-colors duration-500 pointer-events-none" />
                    </div>
                    <p className="text-center font-medium text-foreground group-hover:text-primary transition-colors">
                      {item.title}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
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
                src={selectedImage.src}
                alt={selectedImage.title}
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
