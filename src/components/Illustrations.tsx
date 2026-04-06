"use client"

import { motion } from "framer-motion"

const illustrations = [
  {
    id: 1,
    title: "사이버펑크 캐릭터 스케치",
    description: "개인 작업으로 진행한 SF 컨셉 캐릭터 일러스트레이션입니다.",
    image: "/images/illustration-1.jpg",
  },
  {
    id: 2,
    title: "이세계 판타지 원경",
    description: "판타지 세계관의 광원 효과를 중점적으로 연습한 디지털 페인팅.",
    image: "/images/illustration-2.jpg",
  },
  {
    id: 3,
    title: "귀여운 마스코트 낙서",
    description: "덕질 활동 중 가볍게 그려본 팬아트 및 오리지널 캐릭터.",
    image: "/images/illustration-3.jpg",
  },
]

export function Illustrations() {
  return (
    <section id="illustrations" className="py-32 bg-secondary/10">
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
              일러스트 개인작
            </h2>
            <div className="flex-1 h-px bg-border" />
          </div>
          <p className="text-muted-foreground">
            개인적으로 그려본 일러스트 및 드로잉 작업물입니다.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {illustrations.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="relative aspect-[4/5] rounded-xl overflow-hidden bg-gradient-to-br from-secondary to-muted mb-4 border border-border group-hover:border-primary/50 transition-colors">
                {/* Placeholder Image */}
                <div className="absolute inset-0 flex items-center justify-center text-muted-foreground/50 text-sm">
                  {item.title}
                </div>
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              <h3 className="text-xl font-medium mb-2 group-hover:text-primary transition-colors">
                {item.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
