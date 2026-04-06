"use client"

import { motion } from "framer-motion"

const skills = [
  "Unreal Engine 5",
  "Blueprint",
  "Blender",
  "Photoshop",
  "World Partition",
  "Nanite",
  "Lumen",
  "Substance Painter",
  "ZBrush",
  "Maya",
]

export function About() {
  return (
    <section id="about" className="relative w-full py-32 flex flex-col items-center">
      <div className="w-full max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-start justify-start gap-12 w-full">
          {/* Profile Photo */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative shrink-0 w-full max-w-[300px]"
          >
            <div className="relative aspect-[3/4] max-h-[400px] rounded-xl overflow-hidden bg-gradient-to-br from-secondary to-muted">
              <div className="absolute inset-0 flex items-center justify-center text-muted-foreground/50">
                김용언
              </div>
              {/* Decorative border */}
              <div className="absolute inset-0 rounded-xl border border-border" />
            </div>
            {/* Floating accent */}
            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -bottom-6 -right-6 w-24 h-24 rounded-xl bg-primary/20 blur-2xl"
            />
          </motion.div>

          {/* Bio Content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-sm uppercase tracking-[0.3em] text-primary mb-4">
              Profile
            </p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
              김용언
            </h2>
            <p className="text-xl text-muted-foreground mb-4">
              레벨디자이너
            </p>
            <div className="space-y-4 text-muted-foreground leading-relaxed mb-8">
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
            
            {/* Skills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-8"
            >
              <div className="flex flex-wrap justify-center md:justify-start gap-8">
                {[
                  { name: "Unreal 4, 5", percentage: 90, color: "#A78BFA" },
                  { name: "Unity", percentage: 70, color: "#A78BFA" },
                  { name: "PowerPoint", percentage: 85, color: "#A78BFA" },
                  { name: "Excel", percentage: 75, color: "#A78BFA" },
                  { name: "Word", percentage: 80, color: "#A78BFA" },
                  { name: "Photoshop", percentage: 85, color: "#A78BFA" },
                  { name: "Clipstudio", percentage: 80, color: "#A78BFA" },
                ].map((skill, i) => {
                  const radius = 36;
                  const circumference = 2 * Math.PI * radius;
                  return (
                    <div key={skill.name} className="flex flex-col items-center gap-3">
                      <div className="relative w-20 h-20 flex items-center justify-center">
                        <svg className="absolute inset-0 w-full h-full transform -rotate-90">
                          <circle
                            cx="40"
                            cy="40"
                            r={radius}
                            stroke="currentColor"
                            strokeWidth="6"
                            fill="transparent"
                            className="text-gray-700"
                          />
                          <motion.circle
                            cx="40"
                            cy="40"
                            r={radius}
                            stroke={skill.color}
                            strokeWidth="6"
                            fill="transparent"
                            strokeLinecap="round"
                            initial={{ strokeDashoffset: circumference }}
                            whileInView={{ strokeDashoffset: circumference - (skill.percentage / 100) * circumference }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.5, delay: 0.2 + i * 0.1, ease: "easeInOut" }}
                            style={{ strokeDasharray: circumference }}
                          />
                        </svg>
                        <div className="relative z-10 text-[10px] text-muted-foreground font-medium">Logo</div>
                      </div>
                      <span className="text-sm font-medium text-foreground whitespace-nowrap">{skill.name}</span>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
