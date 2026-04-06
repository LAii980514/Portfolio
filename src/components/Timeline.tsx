"use client"

import { motion } from "framer-motion"

const experiences = [
  {
    year: "2024",
    role: "G-STAR 인디 게임 행사 참여",
    company: "오프라인 행사",
    description: "최신 게임 트렌드 분석 및 인디 게임 개발자들과의 네트워킹을 진행했습니다.",
  },
  {
    year: "2023",
    role: "코믹월드 & 서브컬처 온리전 참가",
    company: "팬 커뮤니티",
    description: "다양한 서브컬처 IP 분석 및 2차 창작 활동 (덕질)을 통해 유저 니즈를 체득했습니다.",
  },
  {
    year: "2022",
    role: "글로벌 게임 잼 (Global Game Jam)",
    company: "Game Jam",
    description: "48시간 내 레벨 디자인 및 기획 담당하여 프로토타입을 완성했습니다.",
  },
  {
    year: "2021",
    role: "하드코어 게이밍 커뮤니티 운영진",
    company: "온라인 커뮤니티",
    description: "유저 피드백 수집 및 게임 시스템 분석 스터디를 주도적으로 진행했습니다.",
  },
]

export function Timeline() {
  return (
    <section id="experience" className="py-32 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-sm uppercase tracking-[0.3em] text-primary mb-4">
            Experience
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            활동 이력
          </h2>
        </motion.div>

        <div className="relative max-w-5xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-border hidden md:block" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className={`relative flex flex-col md:flex-row items-center gap-8 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Content */}
                <div className={`flex-1 w-full ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                  <div className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-colors">
                    <span className="text-primary font-mono text-sm">{exp.year}</span>
                    <h3 className="text-xl font-semibold mt-2 mb-1">{exp.role}</h3>
                    <p className="text-muted-foreground text-sm mb-3">{exp.company}</p>
                    <p className="text-muted-foreground leading-relaxed text-sm">
                      {exp.description}
                    </p>
                  </div>
                </div>

                {/* Timeline dot */}
                <div className="hidden md:flex items-center justify-center w-4 h-4 rounded-full bg-primary border-4 border-background z-10" />

                {/* Spacer for alternating layout */}
                <div className="flex-1 hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
