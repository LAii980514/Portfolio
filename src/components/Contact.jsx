import React from 'react';
import { motion } from 'framer-motion';
import { User, Mail, Phone } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="container" style={{ padding: 'var(--spacing-section) var(--spacing-xl)', marginBottom: 'var(--spacing-section)' }}>
      
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        className="surface-1"
        style={{ 
          width: '100%',
          padding: 'var(--spacing-xxl) 48px',
          borderRadius: 'var(--rounded-xl)',
          display: 'flex',
          flexDirection: 'column',
          gap: '32px'
        }}
      >
        <h3 className="text-display-sm" style={{ fontWeight: 700, marginBottom: '24px' }}>Contact Information</h3>
        
        {/* 2-Column Grid for Items */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: '1fr 1fr', 
          gap: 'var(--spacing-xl)' 
        }}>
          
          {/* Left Column: Name */}
          <div style={{ display: 'flex', alignItems: 'flex-start' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
              <div style={{ 
                width: '60px', height: '60px', 
                borderRadius: '50%', 
                backgroundColor: 'var(--colors-surface-2)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: 'var(--colors-primary)'
              }}>
                <User size={26} />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <span className="text-body-sm" style={{ color: 'var(--colors-ink-subtle)', fontWeight: 500 }}>Name</span>
                <span style={{ fontSize: '32px', fontWeight: 600, color: 'var(--colors-ink)' }}>김용언</span>
              </div>
            </div>
          </div>

          {/* Right Column: Email & Phone */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            
            {/* Email */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
              <div style={{ 
                width: '60px', height: '60px', 
                borderRadius: '50%', 
                backgroundColor: 'var(--colors-surface-2)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: 'var(--colors-primary)'
              }}>
                <Mail size={26} />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <span className="text-body-sm" style={{ color: 'var(--colors-ink-subtle)', fontWeight: 500 }}>Email</span>
                <a href="mailto:jack6245@naver.com" style={{ fontSize: '28px', fontWeight: 600, color: 'var(--colors-ink)', textDecoration: 'none' }}>jack6245@naver.com</a>
              </div>
            </div>

            {/* Phone */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
              <div style={{ 
                width: '60px', height: '60px', 
                borderRadius: '50%', 
                backgroundColor: 'var(--colors-surface-2)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: 'var(--colors-primary)'
              }}>
                <Phone size={26} />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <span className="text-body-sm" style={{ color: 'var(--colors-ink-subtle)', fontWeight: 500 }}>Phone</span>
                <a href="tel:010-0000-0000" style={{ fontSize: '28px', fontWeight: 600, color: 'var(--colors-ink)', textDecoration: 'none' }}>010-0000-0000</a>
              </div>
            </div>

          </div>
        </div>

      </motion.div>
    </section>
  );
};

export default Contact;
