"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowUpRight } from "lucide-react"

const filters = ["전체", "환경설계", "라이팅", "블록아웃"]

const projects = [
  {
    id: 1,
    title: "고대 사원 유적",
    description: "숨겨진 경로와 비밀이 있는 탐험 중심의 환경입니다.",
    category: "환경설계",
    image: "/images/project-1.jpg",
  },
  {
    id: 2,
    title: "공상과학 복도",
    description: "동적인 조명 상태를 가진 모듈형 복도 시스템입니다.",
    category: "라이팅",
    image: "/images/project-2.jpg",
  },
  {
    id: 3,
    title: "숲의 공터",
    description: "시간에 따른 조명 변화가 있는 자연 환경입니다.",
    category: "환경설계",
    image: "/images/project-3.jpg",
  },
]

export function ProjectsGrid() {
  const [activeFilter, setActiveFilter] = useState("전체")

  const filteredProjects = activeFilter === "전체"
    ? projects
    : projects.filter(p => p.category === activeFilter)

  return (
    <section className="relative w-full py-32 bg-secondary/30 flex flex-col items-center">
      <div className="w-full max-w-7xl px-4 md:px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12"
        >
          <div className="flex items-center gap-4 mb-8">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
              다양한 프로젝트
            </h2>
            <div className="flex-1 h-px bg-border" />
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-2">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
                  activeFilter === filter
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-muted-foreground hover:text-foreground"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.article
                key={project.id}
                layout
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ 
                  duration: 0.8, 
                  delay: index * 0.1,
                  ease: [0.16, 1, 0.3, 1]
                }}
                className="group"
              >
                <div className="relative overflow-hidden rounded-xl bg-white/[0.03] border border-white/10 hover:border-[#A78BFA]/50 hover:shadow-[0_0_20px_rgba(167,139,250,0.15)] transition-all duration-300">
                  {/* Thumbnail */}
                  <div className="relative aspect-video overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-secondary to-muted flex items-center justify-center">
                      <span className="text-muted-foreground/50 text-sm">Thumbnail</span>
                    </div>
                    <motion.div
                      className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    />
                    
                    {/* Hover overlay */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <motion.div
                        initial={{ scale: 0 }}
                        whileHover={{ scale: 1.1 }}
                        className="w-12 h-12 rounded-full bg-primary flex items-center justify-center"
                      >
                        <ArrowUpRight className="w-5 h-5 text-primary-foreground" />
                      </motion.div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    <span className="text-xs font-medium text-primary uppercase tracking-wider">
                      {project.category}
                    </span>
                    <h3 className="text-lg font-medium mt-2 mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
