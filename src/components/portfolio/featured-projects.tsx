"use client"

import { motion } from "framer-motion"
import { Play, FileText } from "lucide-react"

const featuredProjects = [
  {
    id: 1,
    title: "CONCRETE MONOLITH",
    subtitle: "SURVIVAL HORROR / LEVEL DESIGN",
    genre: "Survival Horror",
    engine: "UNREAL ENGINE 5",
    mapSize: "실내 / 우주정거장",
    role: "레벨 디자인 100%",
    bullets: [
      "조명 대비를 활용한 플레이어 동선 유도",
      "스텔스 및 회피에 적합한 우회로(Flanking Route) 구현"
    ],
    tags: ["UE5", "Blueprints", "Lighting", "Blockout"],
    youtubeId: "LXb3EKWsInQ", 
    docLink: "#",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200",
  },
  {
    id: 2,
    title: "NUL SYSTEM",
    subtitle: "OPEN WORLD ARPG / TERRAIN",
    genre: "Open World ARPG",
    engine: "UNITY",
    mapSize: "2km x 2km",
    role: "지형 및 퀘스트 노드 설계",
    bullets: [
      "탁 트인 지형(Terrain)을 활용한 광활한 탐험 경험 제공"
    ],
    tags: ["Unity", "Level Design", "Terrain", "Puzzle"],
    youtubeId: "aqz-KE-bpKQ", 
    docLink: "#",
    image: "https://images.unsplash.com/photo-1509281373149-e957c6296406?auto=format&fit=crop&q=80&w=800",
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
          className="mb-24 text-left"
        >
          <p className="text-sm uppercase tracking-[0.3em] text-neutral-500 mb-4 font-bold">
            Featured Works
          </p>
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase">
            대표 포트폴리오
          </h2>
        </motion.div>

        {/* V1 "More Posts" Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-32 gap-y-20 md:gap-y-32">
          {featuredProjects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: 0.8, 
                ease: [0.16, 1, 0.3, 1],
                delay: index * 0.1
              }}
              className="flex flex-col"
            >
              <div className="relative w-full aspect-video bg-zinc-900 flex-shrink-0 overflow-hidden pointer-events-none mb-5">
                <iframe
                  className="absolute inset-0 w-full h-full object-cover scale-[1.3]"
                  src={`https://www.youtube.com/embed/${project.youtubeId}?autoplay=1&mute=1&loop=1&playlist=${project.youtubeId}&controls=0&showinfo=0&rel=0&modestbranding=1`}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
                <div className="absolute inset-0 shadow-[inset_0_0_50px_rgba(0,0,0,0.5)] pointer-events-none" />
              </div>

              {/* Title & Subtitle (Void Studio Vibe) */}
              <h3 className="text-3xl lg:text-4xl font-black mt-6 uppercase tracking-tight">
                {project.title}
              </h3>
              <p className="text-xs font-bold text-neutral-500 uppercase mt-2 tracking-widest">
                {project.subtitle}
              </p>

              {/* Detailed Information (Reduced height to look aesthetic in tight grids) */}
              <div className="mt-6 flex flex-col border-t border-white/10 pt-6">
                
                {/* Meta Minimal */}
                <div className="flex flex-wrap gap-4 mb-6 text-[11px]">
                  <div>
                    <span className="text-neutral-500 font-bold mr-2 uppercase tracking-wider">GENRE</span>
                    <span className="text-white/90">{project.genre}</span>
                  </div>
                  <div>
                    <span className="text-neutral-500 font-bold mr-2 uppercase tracking-wider">ENGINE</span>
                    <span className="text-white/90">{project.engine}</span>
                  </div>
                </div>

                {/* Bullets (Simplified for space) */}
                <ul className="flex flex-col gap-2 mb-8 text-neutral-400 text-sm">
                  {project.bullets.map((bullet, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-blue-500 mr-2 font-bold">•</span>
                      <span className="leading-snug">{bullet}</span>
                    </li>
                  ))}
                </ul>

                {/* Buttons */}
                <div className="flex flex-col xl:flex-row gap-3 mt-auto">
                  <a
                    href={`https://youtube.com/watch?v=${project.youtubeId}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-1 items-center justify-center px-4 py-3 bg-white text-black hover:bg-neutral-200 rounded-none font-bold transition-colors text-xs"
                  >
                    <Play className="w-3.5 h-3.5 mr-2 fill-current" />
                    시청하기
                  </a>
                  <a
                    href={project.docLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-1 items-center justify-center px-4 py-3 bg-transparent border border-white/20 text-white hover:bg-white/10 rounded-none font-bold transition-all text-xs"
                  >
                    <FileText className="w-3.5 h-3.5 mr-2" />
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
