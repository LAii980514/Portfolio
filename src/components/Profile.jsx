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
      <span className="text-caption" style={{ fontWeight: 600 }}>{name}</span>
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
          <h3 className="text-display-md" style={{ marginBottom: 'var(--spacing-md)', marginLeft: '-4px' }}>김용언</h3>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', maxWidth: '620px', wordBreak: 'keep-all' }}>
            <p className="text-body-md" style={{ color: 'var(--colors-ink)', fontWeight: 600, lineHeight: 1.7 }}>
              안녕하세요. 플레이 경험과 아름다움이 공존하는 공간을 만드는 레벨디자이너 김용언입니다.
            </p>
            
            <p className="text-body-sm" style={{ color: 'var(--colors-ink-muted)', lineHeight: 1.7 }}>
              좋은 레벨은 둘 중 하나만으로는 완성되지 않는다고 생각합니다. 테마에 맞는 플레이와, 그 플레이에 어울리는 배경. 이 둘이 한쪽으로 기울지 않을 때 플레이어는 그 세상에 자연스럽게 몰입합니다.
            </p>

            <p className="text-body-sm" style={{ color: 'var(--colors-ink-muted)', lineHeight: 1.7 }}>
              동선만 있는 공간은 기억에 남지 않고, 보기에만 좋은 공간은 시선은 붙잡아도 재미가 떨어집니다. 어느 한쪽을 포기하면 결국 어색한 공간이 됩니다.
            </p>

            <p className="text-body-sm" style={{ color: 'var(--colors-ink-muted)', lineHeight: 1.7 }}>
              그래서 저는 동선과 시야로 길을 직관적으로 읽게 만들고, 7년간 틈틈이 그려온 눈으로 어울리는 분위기를 더합니다. 그 균형을 통해, 플레이어가 단순한 플레이를 넘어 그 세계에 머무르도록 안내하는 인도자. 그런 사람이 되고 싶습니다.
            </p>
          </div>

        </motion.div>
      </div>

      {/* SKILLS Section (Moved to full width for better layout balance) */}
      <motion.div 
        initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUpVariant}
        style={{ marginTop: 'var(--spacing-xl)', paddingTop: 'var(--spacing-md)', borderTop: '1px solid var(--colors-hairline)' }}
      >
        <h2 className="text-eyebrow" style={{ marginBottom: 'var(--spacing-md)' }}>SKILLS & TOOLS</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '24px' }}>
          {skills.map(skill => (
            <SkillCircle key={skill.name} name={skill.name} percentage={skill.percentage} iconId={skill.iconId} iconText={skill.iconText} iconImage={skill.iconImage} iconColor={skill.iconColor} />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Profile;
