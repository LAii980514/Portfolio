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
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            whileInView={{ strokeDashoffset }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
            strokeLinecap="round"
          />
        </svg>
        <div style={{ 
          position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, 
          display: 'flex', alignItems: 'center', justifyContent: 'center'
        }}>
          {iconImage ? (
            <img src={iconImage} alt={`${name} logo`} style={{ width: '40px', height: '40px', objectFit: 'contain', mixBlendMode: 'screen' }} />
          ) : iconId ? (
            <img src={`/svgs/${iconId}.svg`} alt={`${name} logo`} style={{ width: '36px', height: '36px' }} />
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
          style={{ flex: '0 0 300px' }}
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
          style={{ flex: '1 1 500px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}
        >
          <h2 className="text-eyebrow" style={{ marginBottom: 'var(--spacing-xs)' }}>PROFILE</h2>
          <h3 className="text-display-md" style={{ marginBottom: 'var(--spacing-xxs)' }}>김용언</h3>
          <p className="text-body-lg" style={{ color: 'var(--colors-ink-muted)', marginBottom: 'var(--spacing-lg)' }}>레벨디자이너</p>
          
          <p className="text-body-sm" style={{ color: 'var(--colors-ink-muted)', marginBottom: 'var(--spacing-xl)', maxWidth: '600px' }}>
            안녕하세요, 몰입감 있는 공간과 스토리를 만드는 레벨디자이너 김용언입니다. 플레이어가 게임 세계에 깊이 빠져들 수 있도록, 환경 스토리텔링과 치밀한 동선 설계를 결합하는 작업에 언제나 열정을 쏟고 있습니다.<br /><br />
            시각적인 아름다움을 넘어, 공간이 주는 감정적인 울림과 직관적인 플레이 메커니즘을 잇는 다리 역할을 지향합니다.
          </p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }}
            style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--spacing-xl)' }}
          >
            {skills.map(skill => (
              <SkillCircle key={skill.name} name={skill.name} percentage={skill.percentage} iconId={skill.iconId} iconText={skill.iconText} iconImage={skill.iconImage} iconColor={skill.iconColor} />
            ))}
          </motion.div>


        </motion.div>

      </div>
    </section>
  );
};

export default Profile;
