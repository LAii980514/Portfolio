import React from 'react';
import { motion } from 'framer-motion';

const SkillCircle = ({ name, percentage, iconId, iconText, iconImage, iconColor }) => {
  const radius = 24;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 'var(--spacing-sm)' }}>
      <div style={{ position: 'relative', width: '64px', height: '64px' }}>
        <svg width="64" height="64" viewBox="0 0 64 64" style={{ transform: 'rotate(-90deg)' }}>
          <circle
            cx="32" cy="32" r="24"
            fill="transparent"
            stroke="var(--colors-surface-3)"
            strokeWidth="4"
          />
          <motion.circle
            cx="32" cy="32" r="24"
            fill="transparent"
            stroke="var(--colors-primary)"
            strokeWidth="4"
            strokeDasharray={`${circumference} ${circumference}`}
            initial={{ strokeDashoffset: circumference }}
            whileInView={{ strokeDashoffset }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
            strokeLinecap="butt"
          />
        </svg>
        <div style={{ 
          position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, 
          display: 'flex', alignItems: 'center', justifyContent: 'center'
        }}>
          {iconImage ? (
            <img src={iconImage} alt={`${name} logo`} style={{ width: '28px', height: '28px', objectFit: 'contain', mixBlendMode: 'screen' }} />
          ) : iconId ? (
            <img src={`/svgs/${iconId}.svg`} alt={`${name} logo`} style={{ width: '28px', height: '28px' }} />
          ) : iconText ? (
            <span style={{ fontSize: '18px', fontWeight: 800, color: 'var(--colors-ink-muted)' }}>{iconText}</span>
          ) : (
            <span style={{ fontSize: '10px', color: 'var(--colors-ink-muted)' }}>Logo</span>
          )}
        </div>
      </div>
      <span className="text-caption" style={{ fontWeight: 600, fontFamily: "'S-Core Dream', sans-serif" }}>{name}</span>
    </div>
  );
};

const Profile = () => {
  const skills = [
    { name: 'Unreal 4, 5', percentage: 90, iconId: 'unrealengine' },
    { name: 'PowerPoint', percentage: 85, iconId: 'microsoftpowerpoint', iconColor: '#B7472A' },
    { name: 'Word', percentage: 80, iconId: 'microsoftword', iconColor: '#2B579A' },
    { name: 'Excel', percentage: 80, iconId: 'microsoftexcel', iconColor: '#217346' },
    { name: 'Photoshop', percentage: 75, iconId: 'adobephotoshop', iconColor: '#31A8FF' }
  ];

  const fadeUpVariant = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <section id="about" className="container" style={{ padding: 'var(--spacing-section) var(--spacing-xl)' }}>
      <div style={{ display: 'flex', gap: 'var(--spacing-xxl)', flexWrap: 'wrap' }}>
        
        {/* Avatar Image Placeholder */}
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUpVariant}
          style={{ flex: '0 0 280px' }}
        >
          <div className="surface-1" style={{ 
            width: '100%', 
            aspectRatio: '3/4', 
            borderRadius: 'var(--rounded-lg)',
            overflow: 'hidden',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'var(--colors-surface-2)'
          }}>
            <img src="/KakaoTalk_20260407_050129203_11.jpg" alt="김용언 프로필" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
        </motion.div>

        {/* Profile Content */}
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUpVariant}
          style={{ flex: '1 1 500px', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start' }}
        >
          <h2 className="text-eyebrow" style={{ marginBottom: 'var(--spacing-xs)' }}>PROFILE</h2>
          <h3 className="text-display-md" style={{ marginBottom: 'var(--spacing-md)', marginLeft: '-4px', fontFamily: "'S-Core Dream', sans-serif", fontWeight: 700 }}>김용언</h3>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', maxWidth: '620px', wordBreak: 'keep-all' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <p className="text-body-md" style={{ color: 'var(--colors-ink)', fontWeight: 500, lineHeight: 1.6, fontFamily: "'S-Core Dream', sans-serif" }}>
                안녕하세요.
              </p>
              <p className="text-body-md" style={{ color: 'var(--colors-ink)', fontWeight: 500, lineHeight: 1.6, fontFamily: "'S-Core Dream', sans-serif" }}>
                플레이 경험과 아름다움이 공존하는 공간을 만드는 레벨 디자이너 김용언입니다.
              </p>
            </div>
            
            <p className="text-body-sm" style={{ color: 'var(--colors-ink-muted)', fontWeight: 400, lineHeight: 1.6, fontFamily: "'S-Core Dream', sans-serif" }}>
              저는 좋은 레벨이 플레이와 배경의 균형에서 완성된다고 생각합니다.<br />
              길을 직관적으로 읽게 만드는 동선, 그 공간에 머물고 싶게 만드는 분위기.<br />
              이 두 가지가 함께할 때 공간은 단순한 배경이 아니라 플레이어가 기억하는 세계가 됩니다.
            </p>

            <p className="text-body-sm" style={{ color: 'var(--colors-ink-muted)', fontWeight: 400, lineHeight: 1.6, fontFamily: "'S-Core Dream', sans-serif" }}>
              7년간 그림을 그리며 쌓아온 감각으로 공간의 인상을 더하고,<br />
              레벨 디자인의 언어로 플레이어의 움직임을 설계합니다.<br />
              플레이어가 길을 찾고, 장면을 기억하고, 그 세계에 머무르게 만드는 사람.
            </p>

            <p className="text-body-sm" style={{ color: 'var(--colors-ink-muted)', fontWeight: 400, lineHeight: 1.6, fontFamily: "'S-Core Dream', sans-serif" }}>
              저는 그런 경험을 안내하는 인도자가 되고 싶습니다.
            </p>
          </div>

        </motion.div>
      </div>

      {/* SKILLS & DOCUMENTS Section */}
      <motion.div 
        initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUpVariant}
        style={{ marginTop: 'var(--spacing-xl)', paddingTop: 'var(--spacing-md)', borderTop: '1px solid var(--colors-hairline)' }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 'var(--spacing-lg)' }}>
          {/* Left: Skills */}
          <div>
            <h2 className="text-eyebrow" style={{ marginBottom: 'var(--spacing-md)' }}>SKILLS & TOOLS</h2>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '24px' }}>
              {skills.map(skill => (
                <SkillCircle key={skill.name} name={skill.name} percentage={skill.percentage} iconId={skill.iconId} iconText={skill.iconText} iconImage={skill.iconImage} iconColor={skill.iconColor} />
              ))}
            </div>
          </div>

          {/* Right: Document Buttons */}
          <div style={{ display: 'flex', gap: 'var(--spacing-md)', alignItems: 'center', flexWrap: 'wrap', paddingTop: '24px' }}>
            <motion.button 
              className="button" 
              whileHover={{ scale: 1.06, boxShadow: '0 0 24px rgba(166, 148, 245, 0.5)' }} 
              whileTap={{ scale: 0.96 }}
              onClick={() => window.open('https://drive.google.com/file/d/1WmbFhLdjhwFLAZAp9WSM_k4mTQH3kvWL/view?usp=sharing', '_blank')}
              style={{ 
                padding: '14px 28px', 
                fontSize: '15px', 
                fontFamily: "'S-Core Dream', sans-serif", 
                fontWeight: 600, 
                borderRadius: 'var(--rounded-lg)', 
                display: 'flex', 
                alignItems: 'center', 
                gap: '10px', 
                transition: 'all 0.3s ease',
                background: 'linear-gradient(135deg, rgba(166, 148, 245, 0.15) 0%, rgba(166, 148, 245, 0.05) 100%)',
                border: '1px solid rgba(166, 148, 245, 0.4)',
                color: 'var(--colors-ink)',
                boxShadow: '0 0 12px rgba(166, 148, 245, 0.2)',
                cursor: 'pointer'
              }}
            >
              <img src="/public-relation_5360641.png" alt="PR Icon" style={{ width: '22px', height: '22px', objectFit: 'contain', filter: 'invert(1) opacity(0.9)' }} />
              PR 문서
            </motion.button>
            <motion.button 
              className="button" 
              whileHover={{ scale: 1.06, boxShadow: '0 0 24px rgba(166, 148, 245, 0.5)' }} 
              whileTap={{ scale: 0.96 }}
              onClick={() => window.open('https://drive.google.com/file/d/1wMuNYNXE7d2A8X9fMoDN2inEjJSct1k2/view?usp=sharing', '_blank')}
              style={{ 
                padding: '14px 28px', 
                fontSize: '15px', 
                fontFamily: "'S-Core Dream', sans-serif", 
                fontWeight: 600, 
                borderRadius: 'var(--rounded-lg)', 
                display: 'flex', 
                alignItems: 'center', 
                gap: '10px', 
                transition: 'all 0.3s ease',
                background: 'linear-gradient(135deg, rgba(166, 148, 245, 0.15) 0%, rgba(166, 148, 245, 0.05) 100%)',
                border: '1px solid rgba(166, 148, 245, 0.4)',
                color: 'var(--colors-ink)',
                boxShadow: '0 0 12px rgba(166, 148, 245, 0.2)',
                cursor: 'pointer'
              }}
            >
              <img src="/free-icon-curriculum-vitae-1324850.png" alt="Resume Icon" style={{ width: '22px', height: '22px', objectFit: 'contain', filter: 'invert(1) opacity(0.9)' }} />
              이력서
            </motion.button>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Profile;
