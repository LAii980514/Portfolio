import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
    }
  };

  return (
    <section className="container" style={{ minHeight: 'calc(100vh - 56px)', display: 'flex', flexDirection: 'column', justifyContent: 'center', position: 'relative', padding: 'var(--spacing-section) var(--spacing-xl)' }}>
      
      <div style={{ position: 'relative', zIndex: 10, transform: 'translateY(-10vh)' }}>
        <motion.h1 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          style={{ 
            margin: 0, 
            display: 'flex', 
            flexDirection: 'column', 
            textTransform: 'uppercase',
            lineHeight: '0.85',
            fontSize: 'clamp(60px, 12vw, 170px)',
            fontWeight: 900,
            letterSpacing: '-0.05em'
          }}
        >
          <motion.span variants={itemVariants} style={{ color: '#ffffff' }}>LEVEL</motion.span>
          <motion.span variants={itemVariants} style={{ color: 'var(--colors-primary)' }}>DESIGN</motion.span>
          <motion.span variants={itemVariants} style={{ color: '#ffffff' }}>PORTFOLIO</motion.span>
        </motion.h1>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
        style={{ position: 'absolute', bottom: 'var(--spacing-section)', right: 'var(--spacing-xl)', textAlign: 'left', maxWidth: '600px' }}
      >
        <p style={{ fontSize: '18px', lineHeight: '1.6', fontWeight: 500, color: 'var(--colors-ink-muted)', marginBottom: '8px', wordBreak: 'keep-all', fontFamily: "'S-Core Dream', sans-serif" }}>
          동선과 분위기로 이끌어, 오래 기억에 남는 플레이 경험을 만듭니다.
        </p>
        <p style={{ fontSize: '15px', fontWeight: 600, color: 'var(--colors-ink-subtle)' }}>
          레벨 디자이너 김용언
        </p>
      </motion.div>

    </section>
  );
};

export default Hero;
