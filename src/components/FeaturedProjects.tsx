"use client"

import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"

const featuredProjects = [
  {
    id: 1,
    title: "마법소녀의 기억",
    description: "플레이어의 감정을 자극하는 서사 중심의 레벨 디자인 프로젝트. 서서히 변해가는 환경과 라이팅을 통해 심리적 변화를 표현했습니다.",
    tags: ["Unreal Engine", "스토리텔링", "레벨디자인"],
    image: "/images/project-cathedral.jpg",
  },
  {
    id: 2,
    title: "침묵하는 원천",
    description: "긴장감 있는 공간 배치와 퍼즐 기믹을 활용한 탐험 중심의 스테이지 디자인. 플레이어의 선택에 따라 여러 경로로 돌파할 수 있는 레벨을 구현했습니다.",
    tags: ["Unity", "퍼즐기믹", "환경설계"],
    image: "/images/project-neon.jpg",
  },
]

export function FeaturedProjects() {
  return (
    <section id="portfolio" className="py-24 md:py-32 relative">
      <div className="w-full max-w-[1600px] mx-auto px-6 md:px-12 lg:px-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <p className="text-sm uppercase tracking-[0.3em] text-primary mb-4">
            Featured Work
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            대표 포트폴리오
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16">
          {featuredProjects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 40, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.2,
                ease: [0.22, 1, 0.36, 1]
              }}
              className="group"
            >
              <div className="relative overflow-hidden rounded-3xl bg-card border border-border h-full flex flex-col shadow-sm hover:shadow-xl transition-all duration-500">
                {/* Project Image */}
                <div className="relative aspect-[16/9] overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/30 to-background flex items-center justify-center">
                    <span className="text-muted-foreground/50 text-base">Project Image</span>
                  </div>
                  <motion.div
                    className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  />
                </div>

                {/* Project Info */}
                <div className="p-8 md:p-10 flex-1 flex flex-col">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs font-medium text-muted-foreground bg-secondary rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <h3 className="text-2xl md:text-3xl font-semibold mb-4 group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed mb-8 flex-1">
                    {project.description}
                  </p>

                  <motion.button
                    whileHover={{ x: 4 }}
                    className="inline-flex items-center gap-2 text-sm font-medium text-primary mt-auto"
                  >
                    자세히 보기
                    <ArrowUpRight className="w-4 h-4" />
                  </motion.button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
