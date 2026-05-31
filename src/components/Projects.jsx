import React from 'react';
import { motion } from 'framer-motion';
import { Play, FileText, ArrowRight } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const VideoThumbnail = ({ videoId, title, projectId }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/project/${projectId}`)}
      style={{
        width: '100%',
        height: '100%',
        position: 'absolute',
        top: 0,
        left: 0,
        cursor: 'pointer',
        overflow: 'hidden'
      }}
    >
      <img
        src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
        alt={title}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          transition: 'transform 0.3s ease, filter 0.3s ease',
          filter: 'brightness(0.5)'
        }}
        onMouseOver={(e) => { e.currentTarget.style.transform = 'scale(1.05)'; e.currentTarget.style.filter = 'brightness(0.7)'; }}
        onMouseOut={(e) => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.filter = 'brightness(0.5)'; }}
      />
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '56px',
        height: '56px',
        borderRadius: '50%',
        background: 'rgba(166, 148, 245, 0.9)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 4px 20px rgba(166, 148, 245, 0.4)',
        transition: 'transform 0.2s ease, box-shadow 0.2s ease',
        pointerEvents: 'none'
      }}>
        <Play size={22} fill="#fff" color="#fff" style={{ marginLeft: '2px' }} />
      </div>
    </div>
  );
};
import { mainProjects, otherProjects } from '../data/projects';

const Projects = () => {
  const fadeUpVariant = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <section id="portfolio" className="container" style={{ padding: 'var(--spacing-section) var(--spacing-xl)' }}>
      <motion.div 
        initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUpVariant}
        style={{ textAlign: 'center', marginBottom: 'var(--spacing-xxl)' }}
      >
        <h2 className="text-eyebrow" style={{ marginBottom: 'var(--spacing-xs)' }}>PORTFOLIO</h2>
        <h3 className="text-display-md">주요 프로젝트</h3>
      </motion.div>

      {/* Main Portfolios */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-xxl)', marginBottom: 'var(--spacing-section)' }}>
        {mainProjects.map((project) => {
          const isLeft = project.alignImage === 'left';
          
          return (
            <motion.div 
              key={`main-${project.id}`} 
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUpVariant}
              className="surface-1" 
              style={{ 
                display: 'flex', 
                flexDirection: isLeft ? 'row' : 'row-reverse',
                borderRadius: 'var(--rounded-xl)',
                overflow: 'hidden',
                minHeight: '360px' // Reduced height
              }}
            >
              {/* Image Side */}
              <div style={{ 
                flex: '1 1 55%', 
                backgroundColor: 'var(--colors-surface-2)',
                position: 'relative',
                overflow: 'hidden'
              }}>
                {project.mainImage ? (
                  <Link to={`/project/${project.id}`} style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', display: 'block', cursor: 'pointer' }}>
                    <img 
                      src={project.mainImage} 
                      alt={project.title} 
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        display: 'block',
                        transition: 'transform 0.3s ease',
                      }}
                      onMouseOver={(e) => { e.currentTarget.style.transform = 'scale(1.05)'; }}
                      onMouseOut={(e) => { e.currentTarget.style.transform = 'scale(1)'; }}
                    />
                  </Link>
                ) : project.videoId ? (
                  <iframe 
                    src={`https://www.youtube.com/embed/${project.videoId}?autoplay=1&mute=1&loop=1&playlist=${project.videoId}&controls=0&showinfo=0&rel=0&modestbranding=1`}
                    style={{
                      position: 'absolute',
                      top: '50%',
                      left: '50%',
                      width: '150%',
                      height: '150%',
                      transform: 'translate(-50%, -50%)',
                      pointerEvents: 'none',
                      border: 'none'
                    }}
                    allow="autoplay; encrypted-media"
                    title={project.title}
                  />
                ) : (
                  <span className="text-body-sm" style={{ color: 'var(--colors-ink-subtle)' }}>Image Placeholder</span>
                )}
              </div>

              {/* Content Side */}
              <div style={{ 
                flex: '1 1 45%', 
                padding: 'var(--spacing-xl) var(--spacing-xxl)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center'
              }}>
                <h4 className="text-display-sm" style={{ fontSize: '32px', fontWeight: 700, marginBottom: 'var(--spacing-lg)' }}>
                  {project.title}
                </h4>
                
                {/* Meta Grid */}
                <div style={{ 
                  display: 'grid', 
                  gridTemplateColumns: '1fr 1fr', 
                  gap: 'var(--spacing-md)',
                  padding: 'var(--spacing-md) 0',
                  borderTop: '1px solid var(--colors-hairline)',
                  borderBottom: '1px solid var(--colors-hairline)',
                  marginBottom: 'var(--spacing-lg)'
                }}>
                  <div>
                    <div className="text-caption" style={{ color: 'var(--colors-primary)', fontWeight: 600, marginBottom: '4px' }}>장르</div>
                    <div className="text-body-sm" style={{ fontWeight: 600 }}>{project.genre}</div>
                  </div>
                  <div>
                    <div className="text-caption" style={{ color: 'var(--colors-primary)', fontWeight: 600, marginBottom: '4px' }}>엔진</div>
                    <div className="text-body-sm" style={{ fontWeight: 600 }}>{project.engine}</div>
                  </div>
                  <div>
                    <div className="text-caption" style={{ color: 'var(--colors-primary)', fontWeight: 600, marginBottom: '4px' }}>작업기간</div>
                    <div className="text-body-sm" style={{ fontWeight: 600 }}>{project.mapSize}</div>
                  </div>
                  <div>
                    <div className="text-caption" style={{ color: 'var(--colors-primary)', fontWeight: 600, marginBottom: '4px' }}>플레이 타임</div>
                    <div className="text-body-sm" style={{ fontWeight: 600 }}>{project.role}</div>
                  </div>
                </div>

                {/* Bullets */}
                <ul style={{ 
                  display: 'flex', 
                  flexDirection: 'column', 
                  gap: 'var(--spacing-sm)', 
                  marginBottom: 'var(--spacing-lg)',
                  color: 'var(--colors-ink-muted)',
                  fontSize: '14px'
                }}>
                  {project.bullets.map((bullet, idx) => (
                    <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                      <span style={{ color: 'var(--colors-primary)', fontWeight: 'bold' }}>•</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                {/* Buttons */}
                <div style={{ display: 'flex', gap: '12px' }}>
                  <Link to={`/project/${project.id}`} style={{ textDecoration: 'none' }}>
                    <button className="button button-outline" style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '8px 16px' }}>
                      자세히 보기 <ArrowRight size={16} />
                    </button>
                  </Link>
                </div>

              </div>
            </motion.div>
          );
        })}
      </div>

      <motion.div 
        initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUpVariant}
        style={{ textAlign: 'center', marginBottom: 'var(--spacing-xl)' }}
      >
        <h3 className="text-headline">Other Projects</h3>
      </motion.div>

      {/* Other Projects (3 items) */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 'var(--spacing-lg)' }}>
        {otherProjects.map((project, i) => (
          <motion.div 
            key={`other-${project.id}`} 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} 
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: i * 0.1, ease: "easeOut" } }
            }}
            className="surface-1" 
            style={{ 
              display: 'flex', 
              flexDirection: 'column', 
              borderRadius: 'var(--rounded-lg)',
              overflow: 'hidden',
              padding: 0 // Remove default padding to let image bleed to edges
            }}
          >
            {/* Video Box */}
            <div style={{ 
              width: '100%', 
              aspectRatio: '16/9', 
              backgroundColor: '#000',
              position: 'relative',
              overflow: 'hidden'
            }}>
              {project.videoId ? (
                <VideoThumbnail videoId={project.videoId} title={project.title} projectId={project.id} />
              ) : (
                <span className="text-caption" style={{ color: 'var(--colors-ink-subtle)', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>No Video</span>
              )}
            </div>
            
            {/* Content Box */}
            <div style={{ 
              padding: 'var(--spacing-lg)', 
              display: 'flex', 
              flexDirection: 'column', 
              flex: 1 
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 'var(--spacing-xs)' }}>
                <h4 className="text-card-title" style={{ margin: 0 }}>{project.title}</h4>
                <span style={{ 
                  fontSize: '11px', 
                  fontWeight: 700, 
                  color: 'var(--colors-primary)', 
                  backgroundColor: 'var(--colors-surface-2)',
                  padding: '4px 10px',
                  borderRadius: 'var(--rounded-pill)',
                  border: '1px solid var(--colors-hairline)'
                }}>
                  {project.year}
                </span>
              </div>
              <p className="text-body-sm" style={{ color: 'var(--colors-ink-muted)', marginBottom: 'var(--spacing-md)', flex: 1, lineHeight: 1.5, wordBreak: 'keep-all' }}>
                {project.description}
              </p>
              
              {/* Divider & Buttons */}
              <div style={{ 
                borderTop: '1px solid var(--colors-hairline)', 
                paddingTop: 'var(--spacing-md)',
                display: 'flex',
                gap: '8px',
                marginTop: 'auto'
              }}>
                <Link to={`/project/${project.id}`} style={{ textDecoration: 'none', width: '100%' }}>
                  <button className="button button-outline" style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '6px', padding: '8px 12px', fontSize: '14px' }}>
                    자세히 보기 <ArrowRight size={14} />
                  </button>
                </Link>
              </div>

            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
