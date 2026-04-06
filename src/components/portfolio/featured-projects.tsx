"use client"

import { motion } from "framer-motion"
import { Play, FileText } from "lucide-react"

const featuredProjects = [
  {
    id: 1,
    title: "마법소녀의 기억",
    genre: "Survival Horror",
    engine: "UNREAL ENGINE 5",
    mapSize: "실내 / 우주정거장",
    role: "레벨 디자인 100%",
    bullets: [
      "조명 대비를 활용한 플레이어 동선 유도",
      "폐쇄된 우주 정거장의 공포스러운 분위기 연출",
      "스텔스 및 회피에 적합한 우회로(Flanking Route) 구현"
    ],
    tags: ["UE5", "Blueprints", "Lighting", "Blockout"],
    youtubeId: "LXb3EKWsInQ", // 더미 고화질 영상
    docLink: "#",
    image: "/images/project-cathedral.jpg"
  },
  {
    id: 2,
    title: "침묵하는 원천",
    genre: "Open World ARPG",
    engine: "UNITY",
    mapSize: "2km x 2km",
    role: "지형 및 퀘스트 노드 설계",
    bullets: [
      "탁 트인 지형(Terrain)을 활용한 광활한 탐험 경험 제공",
      "주요 랜드마크 배치를 통한 시각적 내비게이션 유도",
      "퍼즐 기믹을 활용한 환경 상호작용 설계"
    ],
    tags: ["Unity", "Level Design", "Terrain", "Puzzle"],
    youtubeId: "aqz-KE-bpKQ", // 더미 고화질 영상
    docLink: "#",
    image: "/images/project-neon.jpg"
  }
]

export function FeaturedProjects() {
  return (
    <section id="portfolio" className="relative w-full py-32 flex flex-col items-center bg-black text-white">
      <div className="w-full max-w-7xl px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-20 text-left"
        >
          <p className="text-sm uppercase tracking-[0.3em] text-neutral-500 mb-4 font-bold">
            Featured Work
          </p>
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase">
            대표 포트폴리오
          </h2>
        </motion.div>

        <div className="flex flex-col gap-24">
          {featuredProjects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ 
                duration: 0.8, 
                ease: [0.16, 1, 0.3, 1]
              }}
              className={`flex flex-col overflow-hidden rounded-[2rem] bg-zinc-950 border border-white/10 shadow-2xl ${
                index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'
              }`}
            >
              {/* Image / Video Section */}
              <div className="relative w-full md:w-1/2 min-h-[400px] md:min-h-[600px] bg-black">
                {project.youtubeId ? (
                  <iframe
                    className="absolute inset-0 w-full h-full object-cover pointer-events-none scale-150"
                    src={`https://www.youtube.com/embed/${project.youtubeId}?autoplay=1&mute=1&loop=1&playlist=${project.youtubeId}&controls=0&showinfo=0&rel=0&modestbranding=1`}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                ) : (
                  <div className="absolute inset-0 bg-gradient-to-br from-neutral-800 to-neutral-900 flex items-center justify-center">
                    <img src={project.image} alt={project.title} className="w-full h-full object-cover opacity-50" />
                  </div>
                )}
                <div className="absolute inset-0 shadow-[inset_0_0_50px_rgba(0,0,0,0.5)] pointer-events-none" />
              </div>

              {/* Content Section */}
              <div className="flex flex-col justify-center w-full md:w-1/2 p-8 md:p-12 lg:p-16">
                <h3 className="text-4xl md:text-5xl font-bold tracking-tight mb-8">
                  {project.title}
                </h3>

                {/* Meta Grid */}
                <div className="grid grid-cols-2 gap-y-8 gap-x-4 border-y border-white/10 py-8 mb-8">
                  <div>
                    <h4 className="text-neutral-500 font-bold mb-2 uppercase tracking-wider text-xs">GENRE</h4>
                    <p className="font-semibold text-white/90">{project.genre}</p>
                  </div>
                  <div>
                    <h4 className="text-neutral-500 font-bold mb-2 uppercase tracking-wider text-xs">ENGINE</h4>
                    <p className="font-semibold text-white/90">{project.engine}</p>
                  </div>
                  <div>
                    <h4 className="text-neutral-500 font-bold mb-2 uppercase tracking-wider text-xs">MAP SIZE</h4>
                    <p className="font-semibold text-white/90">{project.mapSize}</p>
                  </div>
                  <div>
                    <h4 className="text-neutral-500 font-bold mb-2 uppercase tracking-wider text-xs">ROLE</h4>
                    <p className="font-semibold text-white/90">{project.role}</p>
                  </div>
                </div>

                {/* Bullets */}
                <ul className="flex flex-col gap-4 mb-10 text-neutral-300">
                  {project.bullets.map((bullet, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-blue-500 mr-3 font-bold mt-0.5">•</span>
                      <span className="leading-snug">{bullet}</span>
                    </li>
                  ))}
                </ul>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-12">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-4 py-2 text-xs font-bold text-neutral-400 bg-white/5 border border-white/5 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 mt-auto">
                  <a
                    href={`https://youtube.com/watch?v=${project.youtubeId}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-1 items-center justify-center px-6 py-4 bg-blue-600 text-white hover:bg-blue-500 rounded-xl font-bold transition-colors"
                  >
                    <Play className="w-5 h-5 mr-2 fill-current" />
                    영상 시청
                  </a>
                  <a
                    href={project.docLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-1 items-center justify-center px-6 py-4 bg-transparent border border-white/20 text-white hover:bg-white hover:text-black rounded-xl font-bold transition-all"
                  >
                    <FileText className="w-5 h-5 mr-2" />
                    기획서 보기
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
