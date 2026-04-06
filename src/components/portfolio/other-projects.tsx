"use client"

import { motion } from "framer-motion"

const otherProjects = [
  {
    id: 1,
    title: "PVE 디자인 원리 분석",
    description: "MMORPG 던전의 레벨디자인-내러티브 간의 유기적 연결과 합리적인 학습곡선에 대한 분석",
    image: "/images/gallery_3.jpg",
  },
  {
    id: 2,
    title: "2030 공간 재발명 프로젝트",
    description: "공간 활성화를 위해 이동형 구조체 문화 HUB와 치밀한 레벨(1.4km x 400m) 설계",
    image: "/images/gallery_4.jpg",
  },
  {
    id: 3,
    title: "Minath Tirith",
    description: "반지의 제왕 미나스 티리스를 모티브로 한 소울라이크 오픈월드 레벨디자인",
    image: "/images/gallery_6.jpg",
  }
]

export function OtherProjects() {
  return (
    <section className="relative w-full py-20 flex flex-col items-center">
      <div className="w-full max-w-7xl px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Other Projects
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {otherProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.8,
                delay: index * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="flex flex-col group cursor-pointer"
            >
              <div className="relative aspect-video w-full rounded-2xl overflow-hidden mb-6 bg-secondary">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="w-full h-full"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
                
                {/* Hover overlay hint */}
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-colors duration-500 pointer-events-none" />
              </div>

              <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-[#A78BFA] transition-colors duration-300">
                {project.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {project.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
