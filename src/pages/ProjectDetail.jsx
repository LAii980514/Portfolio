import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ExternalLink, FileText, ChevronLeft, ChevronRight } from 'lucide-react';
import Header from '../components/Header';
import { mainProjects, otherProjects } from '../data/projects';

const ProjectDetail = () => {
  const { id } = useParams();
  const allProjects = [...mainProjects, ...otherProjects];
  const project = allProjects.find(p => p.id === parseInt(id));
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  // 항상 페이지 최상단에서 시작
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project) {
    return (
      <div style={{ padding: '100px', textAlign: 'center', color: 'var(--colors-ink)' }}>
        <h2>프로젝트를 찾을 수 없습니다.</h2>
        <Link to="/" style={{ color: 'var(--colors-primary)' }}>홈으로 돌아가기</Link>
      </div>
    );
  }

  const fadeUpVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 50 : -50,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction) => ({
      x: direction < 0 ? 50 : -50,
      opacity: 0
    })
  };

  return (
    <div style={{ backgroundColor: 'var(--colors-background)', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header />
      
      <main style={{ paddingTop: '56px', flex: 1 }}>
        {/* Title Area */}
        <section style={{ padding: 'var(--spacing-xxl) var(--spacing-xl)', textAlign: 'center' }}>
          <motion.h1 
            initial="hidden" animate="visible" variants={fadeUpVariant}
            className="text-display-md" 
            style={{ marginBottom: 'var(--spacing-xs)' }}
          >
            {project.title}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
            className="text-body-md" 
            style={{ color: 'var(--colors-ink-muted)', fontWeight: 500 }}
          >
            {project.genre}
          </motion.p>
        </section>

        {/* Video Area */}
        <section className="container" style={{ padding: '0 var(--spacing-xl)', marginBottom: 'var(--spacing-xxl)', display: 'flex', justifyContent: 'center' }}>
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.3 }}
            style={{ 
              width: '100%', 
              maxWidth: '1100px',
              aspectRatio: '16/9', 
              backgroundColor: 'var(--colors-surface-1)',
              borderRadius: 'var(--rounded-xl)',
              overflow: 'hidden',
              boxShadow: '0 20px 40px rgba(0,0,0,0.4)',
              border: '1px solid var(--colors-hairline)'
            }}
          >
            {project.videoId ? (
              <iframe 
                src={`https://www.youtube.com/embed/${project.videoId}?rel=0&modestbranding=1`}
                style={{ width: '100%', height: '100%', border: 'none' }}
                allow="encrypted-media; fullscreen"
                allowFullScreen
                title={project.title}
              />
            ) : (
              <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ color: 'var(--colors-ink-muted)' }}>Video Not Available</span>
              </div>
            )}
          </motion.div>
        </section>

        {/* Content Area (Document + Info Sidebar) */}
        <section className="container" style={{ padding: '0 var(--spacing-xl)', marginBottom: 'var(--spacing-xxl)', display: 'flex', justifyContent: 'center' }}>
          <div style={{ 
            width: '100%',
            maxWidth: '1100px',
            display: 'grid', 
            gridTemplateColumns: '1fr 350px', 
            gap: 'var(--spacing-xl)',
            alignItems: 'stretch'
          }}>
            
            {/* Left Column: Project Document Banner */}
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}
              style={{ display: 'flex', flexDirection: 'column' }}
            >
              <h2 className="text-display-sm" style={{ marginBottom: 'var(--spacing-lg)', color: '#ffffff', fontWeight: 800 }}>
                프로젝트 문서
              </h2>
              
              <div className="surface-1" style={{
                borderRadius: 'var(--rounded-lg)',
                border: '1px solid var(--colors-hairline)',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                flex: 1, // Stretch to match right sidebar
                backgroundColor: 'var(--colors-surface-1)'
              }}>
                {project.docLink && project.docLink !== '#' ? (
                  <>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 16px', borderBottom: '1px solid var(--colors-hairline)', background: 'var(--colors-surface-2)' }}>
                      <span className="text-body-sm" style={{ fontWeight: 600, display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <FileText size={16} /> 기획서 미리보기
                      </span>
                      <a href={project.docLink} target="_blank" rel="noopener noreferrer" className="button button-outline" style={{ gap: '6px', fontSize: '13px', padding: '6px 12px' }}>
                        기획서 보기 <ExternalLink size={14} />
                      </a>
                    </div>
                    <iframe 
                      src={project.docLink.includes('drive.google.com') ? project.docLink.replace(/\/view.*$/, '/preview') : project.docLink} 
                      style={{ width: '100%', height: '100%', minHeight: '500px', border: 'none', flex: 1 }}
                      title="Project Document"
                    />
                  </>
                ) : (
                  <div style={{ padding: 'var(--spacing-xxl) var(--spacing-xl)', textAlign: 'center', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                    <FileText size={48} color="var(--colors-ink-muted)" style={{ marginBottom: 'var(--spacing-md)' }} />
                    <h3 className="text-headline" style={{ marginBottom: 'var(--spacing-sm)' }}>기획서 준비중</h3>
                    <p className="text-body-sm" style={{ color: 'var(--colors-ink-muted)' }}>
                      상세 기획서 문서가 아직 등록되지 않았습니다.
                    </p>
                  </div>
                )}
              </div>
            </motion.div>

            {/* Right Column: Project Information Sidebar */}
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}
              style={{ display: 'flex', flexDirection: 'column' }}
            >
              <h2 className="text-display-sm" style={{ marginBottom: 'var(--spacing-lg)', color: '#ffffff', fontWeight: 800 }}>
                프로젝트 정보
              </h2>
              
              <div className="surface-2" style={{
                borderRadius: 'var(--rounded-lg)',
                padding: 'var(--spacing-xl)',
                border: '1px solid var(--colors-hairline)',
                display: 'flex',
                flexDirection: 'column',
                gap: 'var(--spacing-md)',
                flex: 1 // Stretch to match left box
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: '12px' }}>
                  <div className="text-body-sm" style={{ color: 'var(--colors-ink-muted)', fontWeight: 600 }}>장르</div>
                  <div className="text-body-sm" style={{ fontWeight: 600, color: 'var(--colors-ink)' }}>{project.genre}</div>
                </div>
                
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: '12px' }}>
                  <div className="text-body-sm" style={{ color: 'var(--colors-ink-muted)', fontWeight: 600 }}>작업 시간</div>
                  <div className="text-body-sm" style={{ fontWeight: 600, color: 'var(--colors-ink)' }}>{project.mapSize}</div>
                </div>
                
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: '12px' }}>
                  <div className="text-body-sm" style={{ color: 'var(--colors-ink-muted)', fontWeight: 600 }}>사용 엔진</div>
                  <div className="text-body-sm" style={{ fontWeight: 600, color: 'var(--colors-ink)' }}>{project.engine}</div>
                </div>
                
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: '12px' }}>
                  <div className="text-body-sm" style={{ color: 'var(--colors-ink-muted)', fontWeight: 600 }}>플레이타임</div>
                  <div className="text-body-sm" style={{ fontWeight: 600, color: 'var(--colors-ink)' }}>{project.role}</div>
                </div>

                {project.coreExperience && (
                  <div style={{ paddingBottom: '12px' }}>
                    <div className="text-body-sm" style={{ color: 'var(--colors-ink-muted)', fontWeight: 600, marginBottom: '8px' }}>핵심 경험</div>
                    <div className="text-body-sm" style={{ fontWeight: 500, color: 'var(--colors-ink-subtle)', lineHeight: 1.6, wordBreak: 'keep-all', fontFamily: "'S-Core Dream', sans-serif" }}>{project.coreExperience}</div>
                  </div>
                )}

                {project.references && (
                  <div style={{ paddingBottom: '12px' }}>
                    <div className="text-body-sm" style={{ color: 'var(--colors-ink-muted)', fontWeight: 600, marginBottom: '8px' }}>레퍼런스</div>
                    <div className="text-body-sm" style={{ fontWeight: 500, color: 'var(--colors-ink-subtle)', lineHeight: 1.6, wordBreak: 'keep-all', fontFamily: "'S-Core Dream', sans-serif" }}>{project.references}</div>
                  </div>
                )}
                
              </div>
            </motion.div>
          </div>
        </section>

        {/* Map & Screenshots Area - Only show if screenshots exist */}
        {project.screenshots && project.screenshots.length > 0 && (
          <section className="container" style={{ padding: '0 var(--spacing-xl)', marginBottom: 'var(--spacing-xxl)', display: 'flex', justifyContent: 'center' }}>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant} style={{ width: '100%', maxWidth: '1100px' }}>
              <h2 className="text-display-sm" style={{ marginBottom: 'var(--spacing-lg)', color: '#ffffff', fontWeight: 800 }}>
                조감도
              </h2>
              
              <div style={{ position: 'relative', width: '100%', aspectRatio: '16/9', borderRadius: 'var(--rounded-xl)', overflow: 'hidden', backgroundColor: 'var(--colors-surface-2)', border: '1px solid var(--colors-hairline)' }}>
                <AnimatePresence mode="wait" custom={direction}>
                  <motion.div
                    key={currentImageIndex}
                    custom={direction}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.3 }}
                    style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'var(--colors-surface-1)', position: 'relative' }}
                  >
                    <img 
                      src={project.screenshots[currentImageIndex]} 
                      alt={`Screenshot ${currentImageIndex + 1}`} 
                      style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} 
                    />
                  </motion.div>
                </AnimatePresence>
                
                <button 
                  onClick={() => {
                    setDirection(-1);
                    setCurrentImageIndex(prev => (prev === 0 ? project.screenshots.length - 1 : prev - 1));
                  }}
                  style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', backgroundColor: 'rgba(0,0,0,0.5)', border: 'none', borderRadius: '50%', width: '48px', height: '48px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', color: '#fff', backdropFilter: 'blur(4px)' }}
                >
                  <ChevronLeft size={24} />
                </button>
                
                <button 
                  onClick={() => {
                    setDirection(1);
                    setCurrentImageIndex(prev => (prev === project.screenshots.length - 1 ? 0 : prev + 1));
                  }}
                  style={{ position: 'absolute', right: '16px', top: '50%', transform: 'translateY(-50%)', backgroundColor: 'rgba(0,0,0,0.5)', border: 'none', borderRadius: '50%', width: '48px', height: '48px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', color: '#fff', backdropFilter: 'blur(4px)' }}
                >
                  <ChevronRight size={24} />
                </button>
                
                <div style={{ position: 'absolute', bottom: '16px', left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: '8px' }}>
                  {project.screenshots.map((_, idx) => (
                    <button 
                      key={idx}
                      onClick={() => {
                        if (idx !== currentImageIndex) {
                          setDirection(idx > currentImageIndex ? 1 : -1);
                          setCurrentImageIndex(idx);
                        }
                      }}
                      style={{ 
                        width: '10px', height: '10px', borderRadius: '50%', border: 'none', cursor: 'pointer',
                        backgroundColor: currentImageIndex === idx ? 'var(--colors-primary)' : 'rgba(255,255,255,0.3)',
                        transition: 'all 0.3s'
                      }}
                    />
                  ))}
                </div>
              </div>
              
            </motion.div>
          </section>
        )}
        
        {/* Back Link */}
        <section className="container" style={{ padding: '0 var(--spacing-xl)', marginBottom: 'var(--spacing-xxl)', textAlign: 'center' }}>
          <Link to="/#portfolio" className="button button-secondary" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '12px 24px', textDecoration: 'none' }}>
            <ArrowLeft size={16} /> 포트폴리오 목록으로 돌아가기
          </Link>
        </section>
      </main>
      
      <footer style={{ 
        padding: 'var(--spacing-lg) var(--spacing-xl)', 
        borderTop: '1px solid var(--colors-hairline)',
        textAlign: 'center'
      }}>
        <p className="text-caption" style={{ color: 'var(--colors-ink-subtle)' }}>
          © 2026 Level Designer Rai. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default ProjectDetail;
