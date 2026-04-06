"use client"

import { motion } from "framer-motion"

const skills = [
  "Unreal Engine 5",
  "Unity",
  "Blueprint",
  "레벨 기획",
  "환경 설계",
  "라이팅 연출",
  "시스템 밸런싱",
  "Jira",
  "Confluence",
  "Photoshop",
]

export function About() {
  return (
    <section id="about" className="py-24 md:py-32 flex justify-center">
      <div className="w-full max-w-4xl px-6 flex flex-col items-center text-center">
        
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="w-full"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
            프로필 상세
          </h2>
          
          <div className="space-y-6 text-muted-foreground text-lg leading-relaxed mb-12">
            <p>
              안녕하세요. 몰입감 있는 공간과 스토리를 만드는 레벨디자이너 김용언입니다.
              플레이어가 게임 세계에 깊이 빠져들 수 있도록, 환경 스토리텔링과 
              치밀한 동선 설계를 결합하는 작업에 언제나 열정을 쏟고 있습니다.
            </p>
            <p>
              시각적인 아름다움을 넘어, 공간이 주는 감정적인 울림과 
              직관적인 플레이 메커니즘을 잇는 다리 역할을 지향합니다.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-6 tracking-tight text-foreground">주요 보유 기술</h3>
            <div className="flex flex-wrap gap-3 justify-center">
              {skills.map((skill, index) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 + 0.4 }}
                  whileHover={{ scale: 1.05, backgroundColor: "hsl(var(--primary))", color: "hsl(var(--primary-foreground))" }}
                  className="px-4 py-2 rounded-full bg-secondary/50 text-secondary-foreground text-sm cursor-default transition-colors border border-border/50"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
