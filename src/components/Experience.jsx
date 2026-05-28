import React from 'react';
import { motion } from 'framer-motion';

const ExperienceItem = ({ year, title, subtitle, description, alignRight }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      style={{ 
        display: 'flex', 
        flexDirection: alignRight ? 'row-reverse' : 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 'var(--spacing-xl)',
        width: '100%',
        position: 'relative'
      }}
    >
      
      {/* Content Side */}
      <div style={{ flex: 1, display: 'flex', justifyContent: alignRight ? 'flex-start' : 'flex-end' }}>
        <div className="surface-1" style={{ 
          padding: 'var(--spacing-lg)', 
          maxWidth: '500px',
          width: '100%',
          textAlign: alignRight ? 'left' : 'right'
        }}>
          <div className="text-eyebrow" style={{ marginBottom: 'var(--spacing-xxs)' }}>{year}</div>
          <h4 className="text-card-title" style={{ marginBottom: 'var(--spacing-xxs)' }}>{title}</h4>
          <p className="text-caption" style={{ color: 'var(--colors-ink-muted)', marginBottom: 'var(--spacing-xs)' }}>{subtitle}</p>
          <p className="text-body-sm" style={{ color: 'var(--colors-ink-subtle)' }}>{description}</p>
        </div>
      </div>

      {/* Timeline Dot Side */}
      <div style={{ 
        width: '16px', 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center',
        position: 'relative'
      }}>
        <div style={{ 
          width: '8px', 
          height: '8px', 
          backgroundColor: 'var(--colors-primary)', 
          borderRadius: '50%',
          position: 'relative',
          zIndex: 2
        }}></div>
      </div>

      {/* Empty Side for alignment */}
      <div style={{ flex: 1 }}></div>

    </motion.div>
  );
};

const Experience = () => {
  const experiences = [
    { year: '2024', title: 'G-STAR 인디 게임 행사 참여', subtitle: '오프라인 행사', description: '최신 게임 트렌드 분석 및 인디 게임 개발자들과의 네트워킹을 진행했습니다.', alignRight: false },
    { year: '2023', title: '코믹월드 & 서브컬처 온리전 참가', subtitle: '팬 커뮤니티', description: '다양한 서브컬처 IP 분석 및 2차 창작 활동 (덕질)을 통해 유저 니즈를 체득했습니다.', alignRight: true },
    { year: '2022', title: '글로벌 게임 잼 (Global Game Jam)', subtitle: 'Game Jam', description: '48시간 내 레벨 디자인 및 기획 담당하여 프로토타입을 완성했습니다.', alignRight: false },
    { year: '2021', title: '하드코어 게이밍 커뮤니티 운영진', subtitle: '온라인 커뮤니티', description: '유저 피드백 수집 및 게임 시스템 분석 스터디를 주도적으로 진행했습니다.', alignRight: true },
  ];

  return (
    <section className="container" style={{ padding: 'var(--spacing-section) var(--spacing-xl)' }}>
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        style={{ textAlign: 'center', marginBottom: 'var(--spacing-xxl)' }}
      >
        <h2 className="text-eyebrow" style={{ marginBottom: 'var(--spacing-xs)' }}>EXPERIENCE</h2>
        <h3 className="text-display-md">활동 이력</h3>
      </motion.div>
      
      <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', gap: 'var(--spacing-xl)' }}>
        
        {/* Timeline Center Line */}
        <div style={{ 
          position: 'absolute', 
          top: 0, 
          bottom: 0, 
          left: '50%', 
          width: '1px', 
          backgroundColor: 'var(--colors-hairline-strong)',
          transform: 'translateX(-50%)',
          zIndex: 1
        }}></div>

        {experiences.map((exp, index) => (
          <ExperienceItem key={index} {...exp} />
        ))}
        
      </div>
    </section>
  );
};

export default Experience;
