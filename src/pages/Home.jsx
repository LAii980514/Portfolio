import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Profile from '../components/Profile';
import Projects from '../components/Projects';
import Contact from '../components/Contact';

const Home = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Projects />
        <Profile />
        <Contact />
      </main>
      <footer style={{ 
        padding: 'var(--spacing-lg) var(--spacing-xl)', 
        borderTop: '1px solid var(--colors-hairline)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <p className="text-caption" style={{ color: 'var(--colors-ink-subtle)' }}>
          © {new Date().getFullYear()} 김용언. All rights reserved.
        </p>
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          style={{
            background: 'transparent',
            border: 'none',
            color: 'var(--colors-ink-subtle)',
            fontSize: '12px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '4px'
          }}
        >
          맨 위로 ↑
        </button>
      </footer>
    </>
  );
};

export default Home;
