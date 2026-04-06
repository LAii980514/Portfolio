"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Play, FileText, PlayCircle } from "lucide-react"

const featuredProjects = [
  {
    id: 1,
    title: "마법소녀의 기억",
    subtitle: "SURVIVAL HORROR / LEVEL DESIGN",
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
    youtubeId: "LXb3EKWsInQ", // 더미 영상
    docLink: "#",
    image: "/images/project-cathedral.jpg"
  },
  {
    id: 2,
    title: "침묵하는 원천",
    subtitle: "OPEN WORLD ARPG / TERRAIN",
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
    youtubeId: "aqz-KE-bpKQ", // 더미 영상
    docLink: "#",
    image: "/images/project-neon.jpg"
  },
  {
    id: 3,
    title: "고대 사원 유적",
    subtitle: "ENVIRONMENT DESIGN / EXPLORATION",
    genre: "Environment Design",
    engine: "UNREAL ENGINE 5",
    mapSize: "1km x 1km",
    role: "월드 빌딩 및 최적화",
    bullets: [
      "숨겨진 경로와 비밀이 있는 탐험 중심의 환경 구축",
      "다양한 고도차를 이용한 입체적인 레벨 배치",
      "자연물과 고대 유적 프랍의 조화로운 믹싱"
    ],
    tags: ["UE5", "World Building", "Optimization", "Foliage"],
    youtubeId: "dQw4w9WgXcQ", // 더미 영상
    docLink: "#",
    image: "/images/project-1.jpg"
  },
  {
    id: 4,
    title: "공상과학 복도",
    subtitle: "LIGHTING / MODULAR LEVEL",
    genre: "Lighting Design",
    engine: "UNREAL ENGINE 5",
    mapSize: "실내 모듈식 세트",
    role: "모듈형 에셋 조립 및 라이팅",
    bullets: [
      "동적인 조명 상태를 가진 모듈형 피스 시스템 구축",
      "Lumen을 활용한 극적인 광원 효과 연출",
      "안개와 파티클을 결합한 딥(Deep) 스페이스 무드 구현"
    ],
    tags: ["Lighting", "Modular", "Lumen", "Sci-Fi"],
    youtubeId: "yO7MRb0P4sg", // 더미 영상
    docLink: "#",
    image: "/images/project-2.jpg"
  }
]

export function FeaturedProjects() {
  const [playingId, setPlayingId] = useState<number | null>(null)

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

        {/* Staggered Masonry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24 md:gap-y-0">
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
              // 짝수 번째 아이템(오른쪽)은 스크롤 시 위아래로 어긋나 보이도록 크게 내려줍니다.
              className={`flex flex-col ${index % 2 === 1 ? 'md:mt-48 md:mb-[-12rem]' : ''}`}
            >
              <div className="relative w-full aspect-[4/3] bg-zinc-900 border border-white/5 flex-shrink-0 group overflow-hidden cursor-pointer">
                {playingId === project.id && project.youtubeId ? (
                  // 👉 Click State: Auto playing Youtube Video
                  <iframe
                    className="absolute inset-0 w-full h-full object-cover scale-[1.01]"
                    src={`https://www.youtube.com/embed/${project.youtubeId}?autoplay=1&mute=0&rel=0&modestbranding=1`}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                ) : (
                  // 👉 Initial/Hover State: Grayscale Image to Color on Hover
                  <div 
                    className="absolute inset-0 w-full h-full"
                    onClick={() => setPlayingId(project.id)}
                  >
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-out" 
                    />
                    
                    {/* Dark gradient overlay for raw starkness */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
                    
                    {/* Play Button Indicator on Hover */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-black/20">
                      <div className="flex flex-col items-center gap-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                        <PlayCircle className="w-20 h-20 text-white/90 drop-shadow-[0_0_15px_rgba(0,0,0,0.5)]" />
                        <span className="text-white/90 font-bold tracking-widest text-sm drop-shadow-md">클릭하여 영상 재생</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Title & Subtitle (Void Studio Vibe) */}
              <h3 className="text-4xl md:text-4xl font-black mt-8 uppercase tracking-tight">
                {project.title}
              </h3>
              <p className="text-sm font-bold text-neutral-500 uppercase mt-2 tracking-wider">
                {project.subtitle}
              </p>

              {/* Detailed Information */}
              <div className="mt-8 flex flex-col">
                {/* Meta Grid */}
                <div className="grid grid-cols-2 gap-y-6 gap-x-4 border-t border-white/10 pt-6 mb-8 text-xs md:text-sm">
                  <div>
                    <h4 className="text-neutral-500 font-bold mb-1 uppercase tracking-wider text-[10px]">GENRE</h4>
                    <p className="font-semibold text-white/90">{project.genre}</p>
                  </div>
                  <div>
                    <h4 className="text-neutral-500 font-bold mb-1 uppercase tracking-wider text-[10px]">ENGINE</h4>
                    <p className="font-semibold text-white/90">{project.engine}</p>
                  </div>
                  <div>
                    <h4 className="text-neutral-500 font-bold mb-1 uppercase tracking-wider text-[10px]">MAP SIZE</h4>
                    <p className="font-semibold text-white/90">{project.mapSize}</p>
                  </div>
                  <div>
                    <h4 className="text-neutral-500 font-bold mb-1 uppercase tracking-wider text-[10px]">ROLE</h4>
                    <p className="font-semibold text-white/90">{project.role}</p>
                  </div>
                </div>

                {/* Bullets */}
                <ul className="flex flex-col gap-3 mb-8 text-neutral-300 text-sm xl:min-h-[120px]">
                  {project.bullets.map((bullet, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-blue-500 mr-2 font-bold mt-0.5">•</span>
                      <span className="leading-snug">{bullet}</span>
                    </li>
                  ))}
                </ul>

                {/* Buttons (Preserved as Requested) */}
                <div className="flex flex-col xl:flex-row gap-4 mt-auto border-t border-white/10 pt-8">
                  {/* 영상 시청 버튼 (클릭하면 이미지 위치에 영상을 재생) */}
                  <button
                    onClick={() => {
                      setPlayingId(project.id);
                      // 만약 스크롤을 영상 위치로 올리고 싶다면 아래 코드를 활성화하세요.
                      // document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="flex flex-1 items-center justify-center px-6 py-4 bg-white text-black hover:bg-neutral-200 rounded-none font-bold transition-colors text-sm"
                  >
                    <Play className="w-4 h-4 mr-2 fill-current" />
                    영상 자동 재생
                  </button>
                  <a
                    href={project.docLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-1 items-center justify-center px-6 py-4 bg-transparent border border-white/20 text-white hover:bg-white/10 rounded-none font-bold transition-all text-sm"
                  >
                    <FileText className="w-4 h-4 mr-2" />
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
