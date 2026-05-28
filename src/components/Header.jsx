import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Header = () => {
  const handleScroll = (e, id) => {
    if (window.location.pathname === '/') {
      const element = document.getElementById(id);
      if (element) {
        e.preventDefault();
        const headerOffset = 56;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
  };

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      style={{
        position: 'fixed', // Changed to fixed so it stays on top across pages
        top: 0,
        width: '100%',
        zIndex: 100,
        backgroundColor: 'rgba(1, 1, 2, 0.8)', // translucent
        backdropFilter: 'blur(10px)',
        borderBottom: '1px solid var(--colors-hairline)',
        height: '56px',
        display: 'flex',
        alignItems: 'center',
        padding: '0 var(--spacing-xl)'
      }}
    >
      <div style={{ flex: 1, display: 'flex', alignItems: 'center' }}>
        <Link to="/" style={{ textDecoration: 'none' }}>
          <span style={{ fontSize: '16px', fontWeight: 800, color: 'var(--colors-ink)' }}>레벨 디자이너 </span>
          <span style={{ fontSize: '16px', fontWeight: 800, color: 'var(--colors-primary)' }}>라이</span>
        </Link>
      </div>
      <nav style={{ display: 'flex', gap: 'var(--spacing-lg)' }}>
        <Link to="/#portfolio" onClick={(e) => handleScroll(e, 'portfolio')} className="text-caption" style={{ color: 'var(--colors-ink-subtle)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.4px', cursor: 'pointer', textDecoration: 'none', fontSize: '14px' }}>Portfolio</Link>
        <Link to="/#about" onClick={(e) => handleScroll(e, 'about')} className="text-caption" style={{ color: 'var(--colors-ink-subtle)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.4px', cursor: 'pointer', textDecoration: 'none', fontSize: '14px' }}>About Me</Link>
        <Link to="/gallery" className="text-caption" style={{ color: 'var(--colors-ink-subtle)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.4px', cursor: 'pointer', textDecoration: 'none', fontSize: '14px' }}>Gallery</Link>
        <Link to="/#contact" onClick={(e) => handleScroll(e, 'contact')} className="text-caption" style={{ color: 'var(--colors-ink-subtle)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.4px', cursor: 'pointer', textDecoration: 'none', fontSize: '14px' }}>Contact</Link>
      </nav>
    </motion.header>
  );
};

export default Header;
