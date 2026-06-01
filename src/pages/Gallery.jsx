import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import { motion, AnimatePresence } from 'framer-motion';

const Gallery = () => {
  const [activeTab, setActiveTab] = useState(() => {
    return sessionStorage.getItem('galleryActiveTab') || 'illustration';
  }); // 'gallery' | 'illustration' | 'fanart'
  
  useEffect(() => {
    sessionStorage.setItem('galleryActiveTab', activeTab);
  }, [activeTab]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedFanartIndex, setSelectedFanartIndex] = useState(0);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

    const photos = [
    { id: 1, title: '풍경 1', src: '/picture/KakaoTalk_20260407_050129203_01.jpg', bentoClass: 'bento-large' },
    { id: 2, title: '풍경 2', src: '/picture/KakaoTalk_20260407_050129203_03.jpg', bentoClass: 'bento-wide' },
    { id: 3, title: '풍경 3', src: '/picture/KakaoTalk_20260407_050129203_04.jpg', bentoClass: 'bento-small' },
    { id: 4, title: '풍경 4', src: '/picture/KakaoTalk_20260407_050129203_05.jpg', bentoClass: 'bento-tall' },
    { id: 5, title: '풍경 5', src: '/picture/KakaoTalk_20260407_050129203_06.jpg', bentoClass: 'bento-wide' },
    { id: 6, title: '풍경 6', src: '/picture/KakaoTalk_20260407_050129203_07.jpg', bentoClass: 'bento-tall' },
    { id: 7, title: '풍경 7', src: '/picture/KakaoTalk_20260407_050129203_08.jpg', bentoClass: 'bento-small' },
    { id: 8, title: '풍경 8', src: '/picture/KakaoTalk_20260407_050129203_09.jpg', bentoClass: 'bento-wide' },
    { id: 9, title: '풍경 9', src: '/picture/KakaoTalk_20260407_050129203_10.jpg', bentoClass: 'bento-small' },
    { id: 10, title: '풍경 10', src: '/picture/KakaoTalk_20260407_050129203_13.jpg', bentoClass: 'bento-large' },
    { id: 11, title: '풍경 11', src: '/picture/KakaoTalk_20260407_050129203_14.jpg', bentoClass: 'bento-wide' },
    { id: 12, title: '풍경 12', src: '/picture/KakaoTalk_20260407_050129203_16.jpg', bentoClass: 'bento-small' },
    { id: 13, title: '풍경 13', src: '/picture/KakaoTalk_20260407_050129203_17.jpg', bentoClass: 'bento-wide' },
    { id: 14, title: '풍경 14', src: '/picture/KakaoTalk_20260407_050129203_18.jpg', bentoClass: 'bento-tall' },
    { id: 15, title: '풍경 15', src: '/picture/KakaoTalk_20260528_051324908.jpg', bentoClass: 'bento-small' },
    { id: 16, title: '풍경 16', src: '/picture/KakaoTalk_20260528_051324908_01.jpg', bentoClass: 'bento-wide' },
    { id: 17, title: '풍경 17', src: '/picture/KakaoTalk_20260528_051324908_02.jpg', bentoClass: 'bento-small' },
    { id: 18, title: '풍경 18', src: '/picture/KakaoTalk_20260528_051324908_03.jpg', bentoClass: 'bento-large' },
    { id: 19, title: '풍경 19', src: '/picture/KakaoTalk_20260528_051324908_04.jpg', bentoClass: 'bento-tall' },
    { id: 20, title: '풍경 20', src: '/picture/KakaoTalk_20260528_051324908_05.jpg', bentoClass: 'bento-small' },
    { id: 21, title: '풍경 21', src: '/picture/KakaoTalk_20260528_051324908_07.jpg', bentoClass: 'bento-small' },
    { id: 22, title: '풍경 22', src: '/picture/KakaoTalk_20260528_051324908_08.jpg', bentoClass: 'bento-small' },
    { id: 23, title: '풍경 23', src: '/picture/KakaoTalk_20260528_051324908_09.jpg', bentoClass: 'bento-tall' },
    { id: 24, title: '풍경 24', src: '/picture/KakaoTalk_20260528_051324908_10.jpg', bentoClass: 'bento-small' },
    { id: 25, title: '풍경 25', src: '/picture/KakaoTalk_20260528_051324908_11.jpg', bentoClass: 'bento-wide' },
    { id: 26, title: '풍경 26', src: '/picture/KakaoTalk_20260528_051324908_12.jpg', bentoClass: 'bento-small' }
  ];

  const illustrations = [
    { id: 1, title: '블루 아카이브 키쿄', year: '2025년' },
    { id: 2, title: '스텔라이브 아오쿠모 린', year: '2025년' },
    { id: 3, title: '블루 아카이브 아스나', year: '2025년' },
    { id: 4, title: '블루 아카이브 후유', year: '2025년' },
    { id: 5, title: '스텔라이브 유즈하 리코', year: '2025년' },
    { id: 6, title: '블루 아카이브 사츠키', year: '2025년' },
    { id: 7, title: '홀로라이브 이치죠 리리카', year: '2024년' },
    { id: 8, title: '블루 아카이브 유카리', year: '2024년' }
  ];

  const animationPhotos = [
    "KakaoTalk_20260527_225601214_14.jpg", "KakaoTalk_20260527_225601214_13.jpg", "KakaoTalk_20260527_225601214_12.jpg",
    "KakaoTalk_20260527_225606799_10.jpg", "KakaoTalk_20260527_225601214_19.jpg", "KakaoTalk_20260527_225601214_25.jpg",
    "KakaoTalk_20260527_225606799_13.jpg", "KakaoTalk_20260528_044159821_04.jpg", "KakaoTalk_20260527_225601214_07.jpg",
    "KakaoTalk_20260527_225601214_08.jpg", "KakaoTalk_20260527_225601214_09.jpg", "KakaoTalk_20260527_225601214_10.jpg",
    "KakaoTalk_20260527_225601214_11.jpg", "KakaoTalk_20260527_225601214_03.jpg", "KakaoTalk_20260527_225601214_01.jpg",
    "KakaoTalk_20260527_225601214.jpg", "KakaoTalk_20260527_225601214_16.jpg", "KakaoTalk_20260527_225601214_17.jpg",
    "KakaoTalk_20260527_225601214_18.jpg", "sad_rio.jpg", "KakaoTalk_20260527_225601214_20.jpg",
    "KakaoTalk_20260527_225601214_21.jpg", "KakaoTalk_20260527_225601214_22.jpg", "KakaoTalk_20260527_225601214_23.jpg",
    "KakaoTalk_20260527_225601214_24.jpg", "KakaoTalk_20260527_225601214_05.jpg", "hanatan_banner.jpg",
    "KakaoTalk_20260527_225601214_27.jpg", "KakaoTalk_20260527_225601214_28.jpg", "KakaoTalk_20260527_225606799.jpg",
    "gstar_2014.jpg", "KakaoTalk_20260527_225606799_03.jpg", "KakaoTalk_20260527_225606799_04.jpg",
    "KakaoTalk_20260527_225606799_05.jpg", "wuthering_waves_2nd_anniv.jpg", "KakaoTalk_20260527_225606799_07.jpg",
    "KakaoTalk_20260527_225606799_08.jpg", "new_image_1.jpg", "KakaoTalk_20260527_225606799_11.jpg",
    "new_image_2.jpg", "KakaoTalk_20260527_225601214_06.jpg", "KakaoTalk_20260528_044159821.jpg",
    "KakaoTalk_20260528_044159821_01.jpg", "KakaoTalk_20260528_044159821_02.jpg", "KakaoTalk_20260528_044159821_03.jpg",
    "KakaoTalk_20260528_044159821_05.jpg", "KakaoTalk_20260528_044159821_06.jpg", "KakaoTalk_20260528_044159821_07.jpg"
  ];

  const fanarts = animationPhotos.map((filename, i) => {
    let title = `내 오프라인 컬렉션 ${i + 1}`;
    let description = `제 방에 소중하게 장식해 둔 오프라인 굿즈 컬렉션입니다.`;
    
    if (i === 4) {
      title = "김용하 본부장님과 찍은 사진";
      description = "지스타 G-CON에서 강연을 들은 후 찍은 사진입니다.";
    } else if (i === 5) {
      title = "김형태 대표님과 찍은 사진";
      description = "니케 출시 전 오프라인 행사 때 사인회에서 인사드리고 찍은 사진입니다.";
    } else if (i === 6) {
      title = "금강선 본부장님의 강연";
      description = "G-CON 2023 때 로스트아크 12년 개발 비화 강연을 들으며 찍은 사진입니다.";
    } else if (i === 7) {
      title = "유형석 PD님의 강연";
      description = "NDC에서 니케를 주제로 강연하실 때 찍은 사진입니다.";
    } else if (i === 8) {
      title = "블루 아카이브 온리전 1";
      description = "블루 아카이브 4주년 온리전 때 찍었던 사진입니다.";
    } else if (i === 9) {
      title = "블루 아카이브 온리전 2";
      description = "블루 아카이브 4주년 온리전 때 찍은 코하루 등신대입니다.";
    } else if (i === 10) {
      title = "호요랜드 사진 1";
      description = "호요랜드에 방문하여 찍은 폼폼 인형탈입니다.";
    } else if (i === 11) {
      title = "블루 아카이브 콜라보 카페";
      description = "용산 도파민 존의 콜라보 카페에 방문했을 때 찍은 사진입니다.";
    } else if (i === 12) {
      title = "스텔라이브 콜라보 카페 1";
      description = "애니플러스 스텔라이브 클리셰 콜라보 카페에 방문하여 찍은 사진입니다.";
    } else if (i === 13) {
      title = "지하철 광고 1";
      description = "홀로라이브 지하철 광고 배너를 찍은 사진입니다.";
    } else if (i === 14) {
      title = "2026년 플레이 엑스포";
      description = "2026년 플레이 엑스포를 다녀와서 찍은 사진입니다. 일러스타 페스도 함께 방문했습니다.";
    } else if (i === 15) {
      title = "일러스타 페스";
      description = "2026년 5월에 방문한 일러스타 페스에서 구매한 굿즈 사진입니다.";
    } else if (i === 16) {
      title = "지하철 광고 2";
      description = "서울역에서 스텔라이브 광고 배너를 찍은 사진입니다.";
    } else if (i === 17) {
      title = "애니메 티셔츠";
      description = "일본 현지에서 직접 구입한 옷을 입고 찍은 사진입니다.";
    } else if (i === 18) {
      title = "슬픈 사진";
      description = "제 아내 리오를 데리고 오는 과정에서 사고가 난 사진을 기록했습니다.";
    } else if (i === 19) {
      title = "스텔라이브 팝업샵";
      description = "홍대 스텔라이브 팝업샵에 방문하여 입구에서 찍은 사진입니다.";
    } else if (i === 20) {
      title = "명조 콜라보";
      description = "일본에 방문했을 때 명조 콜라보 팝업에 다녀와서 찍은 사진입니다.";
    } else if (i === 21) {
      title = "일본 아키하바라 1";
      description = "아키하바라에 방문하여 굿즈 샵을 돌아다니며 찍은 사진입니다.";
    } else if (i === 22) {
      title = "일본 아키하바라 2";
      description = "아키하바라에 방문해서 봤던 광고를 찍은 사진입니다.";
    } else if (i === 23) {
      title = "일본 아키하바라 3";
      description = "아키하바라에 방문하여 블루 아카이브와 라멘집 콜라보를 기다리면서 찍은 사진입니다.";
    } else if (i === 24) {
      title = "일본 아키하바라 4";
      description = "아키하바라역에 바로 내리면 보이는 광고를 찍은 사진입니다. 리코리스 리코일 재밌습니다.";
    } else if (i === 25) {
      title = "지하철 광고 3";
      description = "홀로라이브 지하철 광고 배너를 찍은 사진입니다.";
    } else if (i === 26) {
      title = "우타이테 하나땅 내한";
      description = "제가 좋아하는 가수 하나땅의 첫 내한 때 방문하여 찍은 사진입니다.";
    } else if (i === 27) {
      title = "일본 아키하바라 5";
      description = "아키하바라역 블루 아카이브 광고를 찍은 사진입니다.";
    } else if (i === 28) {
      title = "인생 업적";
      description = "제가 그린 팬아트가 즐겨 보는 버츄얼 유튜버 방송 공지에 올라가서 찍은 사진입니다.";
    } else if (i === 29) {
      title = "AGF";
      description = "AGF 때 봇치 더 락 부스에서 찍은 사진입니다.";
    } else if (i === 30) {
      title = "2014년 인생 첫 지스타 방문";
      description = "처음으로 지스타를 방문해 신세계를 경험하며, 게임 개발을 향한 애정이 깊어졌습니다.";
    } else if (i === 31) {
      title = "블루 아카이브 온리전 3";
      description = "블루 아카이브 2.5주년 온리전 때 찍은 사진입니다.";
    } else if (i === 32) {
      title = "일본 성지순례";
      description = "일본에 직접 방문하여 봇치 더 락 성지순례를 하며 찍은 사진입니다.";
    } else if (i === 33) {
      title = "붕괴 스타레일 콜라보";
      description = "강남역 붕괴 스타레일과 갤럭시 스마트폰 콜라보 때 찍은 사진입니다.";
    } else if (i === 34) {
      title = "명조 2주년 페스티벌 행사 1";
      description = "친구의 2차 창작부스 도우미로 참여했습니다.";
    } else if (i === 35) {
      title = "블루 아카이브 온리전 4";
      description = "블루 아카이브 2.5주년 온리전 때 찍은 사진입니다.";
    } else if (i === 36) {
      title = "일본 아키하바라 6";
      description = "아키하바라에 방문하여 굿즈 샵을 돌아다니며 찍은 사진입니다.";
    } else if (i === 37) {
      title = "명조 2주년 페스티벌 행사 2";
      description = "치사탈과 같이 찍은 사진입니다.";
    } else if (i === 38) {
      title = "일본 아키하바라 7";
      description = "아키하바라에 방문하여 굿즈 샵을 돌아다니며 찍은 사진입니다.";
    } else if (i === 39) {
      title = "명조 2주년 페스티벌 행사 3";
      description = "명조 2주년 페스티벌을 방문하여 찍은 사진입니다.";
    } else if (i === 40) {
      title = "스텔라이브 단독 콘서트";
      description = "스텔라이브 첫 오프라인 콘서트를 방문했을 때 찍은 사진입니다.";
    } else if (i === 41) {
      title = "일러스타 페스 도우미 참여";
      description = "친구의 일러스타 페스 부스 도우미로 참여했을 때 찍은 사진입니다.";
    } else if (i === 42) {
      title = "호요랜드 사진 1";
      description = "호요랜드에 방문하여 찍은 라이덴 신사입니다.";
    } else if (i === 43) {
      title = "용산 아이파크 도파민 존";
      description = "용산 아이파크에 방문했을 때 찍은 사진입니다. 슈엔, 귀엽습니다.";
    } else if (i === 44) {
      title = "스텔라이브 콜라보 카페 2";
      description = "애니플러스 스텔라이브 클리셰 콜라보 카페에 방문하여 찍은 사진입니다.";
    } else if (i === 45) {
      description = "호요랜드에 방문하여 찍은 인형탈 사진입니다.";
    } else if (i === 46) {
      title = "블루 아카이브 온리전 5";
      description = "블루 아카이브 2.5주년 온리전 때 찍은 사진입니다.";
    } else if (i === 47) {
      title = "붕괴 스타레일 성우 사인";
      description = "붕괴 스타레일 부트힐 성우님의 사인입니다. 추첨을 통해 받았습니다.";
    }

    return {
      id: i + 1,
      title,
      description,
      src: `/animation/${filename}`
    };
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    },
    exit: { opacity: 0, transition: { duration: 0.2 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    hover: {
      y: -5,
      boxShadow: '0 10px 30px rgba(166, 148, 245, 0.15)',
      borderColor: 'var(--colors-primary)',
      transition: { duration: 0.2 }
    }
  };

  return (
    <>
      <Header />
      <main style={{ paddingTop: '100px', minHeight: '100vh', paddingBottom: 'var(--spacing-section)' }}>
        <section className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            style={{ marginBottom: 'var(--spacing-xl)' }}
          >
            <h1 className="text-display-md" style={{ marginBottom: 'var(--spacing-xs)' }}>갤러리</h1>
            <p className="text-body-sm" style={{ color: 'var(--colors-ink-muted)', marginBottom: 'var(--spacing-md)', wordBreak: 'keep-all' }}>
              개인 일러스트, 서브컬처 활동, 그리고 아름다운 풍경 사진들을 기록해 둔 공간입니다.
            </p>

            {/* Tab System */}
            <div style={{ display: 'flex', gap: 'var(--spacing-sm)', alignItems: 'center' }}>
              <button
                onClick={() => setActiveTab('illustration')}
                style={{
                  background: activeTab === 'illustration' ? 'var(--colors-ink)' : 'transparent',
                  color: activeTab === 'illustration' ? 'var(--colors-canvas)' : 'var(--colors-ink-subtle)',
                  border: 'none',
                  borderRadius: 'var(--rounded-pill)',
                  padding: '6px 16px',
                  cursor: 'pointer',
                  fontWeight: 700,
                  transition: 'all 0.2s',
                  fontSize: '16px'
                }}
              >
                일러스트 개인작
              </button>
              <button
                onClick={() => setActiveTab('fanart')}
                style={{
                  background: activeTab === 'fanart' ? 'var(--colors-ink)' : 'transparent',
                  color: activeTab === 'fanart' ? 'var(--colors-canvas)' : 'var(--colors-ink-subtle)',
                  border: 'none',
                  borderRadius: 'var(--rounded-pill)',
                  padding: '6px 16px',
                  cursor: 'pointer',
                  fontWeight: 700,
                  transition: 'all 0.2s',
                  fontSize: '16px'
                }}
              >
                서브컬처
              </button>
              <button
                onClick={() => setActiveTab('gallery')}
                style={{
                  background: activeTab === 'gallery' ? 'var(--colors-ink)' : 'transparent',
                  color: activeTab === 'gallery' ? 'var(--colors-canvas)' : 'var(--colors-ink-subtle)',
                  border: 'none',
                  borderRadius: 'var(--rounded-pill)',
                  padding: '6px 16px',
                  cursor: 'pointer',
                  fontWeight: 700,
                  transition: 'all 0.2s',
                  fontSize: '16px'
                }}
              >
                풍경 사진
              </button>
            </div>
          </motion.div>

          <AnimatePresence mode="wait">
            {activeTab === 'gallery' && (
              <motion.div
                key="gallery"
                exit={{ opacity: 0, transition: { duration: 0.2 } }}
                className="bento-grid"
              >
                {photos.map((photo, i) => {
                  const bentoClass = photo.bentoClass || 'bento-small';

                  return (
                    <motion.div
                      key={`photo-${photo.id}`}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, margin: "-50px" }}
                      variants={{
                        hidden: { opacity: 0, y: 40 },
                        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
                        hover: {
                          y: -5,
                          boxShadow: '0 10px 30px rgba(166, 148, 245, 0.15)',
                          borderColor: 'var(--colors-primary)',
                          transition: { duration: 0.2 }
                        }
                      }}
                      onClick={() => setSelectedImage(photo.src)}
                      className={`surface-1 ${bentoClass}`}
                      style={{
                        cursor: 'pointer',
                        display: 'flex',
                        flexDirection: 'column',
                        position: 'relative',
                        borderRadius: 'var(--rounded-lg)',
                        overflow: 'hidden',
                        border: '1px solid var(--colors-hairline)',
                      }}
                      whileHover="hover"
                    >
                      {photo.isPlaceholder ? (
                        <div style={{ width: '100%', height: '100%', backgroundColor: 'var(--colors-surface-2)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                          <span style={{ color: 'var(--colors-ink-subtle)', fontWeight: 600, letterSpacing: '1px' }}>{photo.title}</span>
                        </div>
                      ) : (
                        <motion.img
                          src={photo.src}
                          alt={photo.title}
                          loading="lazy"
                          decoding="async"
                          onLoad={(e) => e.target.style.opacity = 1}
                          style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0, transition: 'opacity 0.5s ease' }}
                          variants={{
                            hover: { scale: 1.05 }
                          }}
                        />
                      )}
                      {/* Hover Overlay with Text */}
                      {!photo.isPlaceholder && (
                        <motion.div
                          style={{
                            position: 'absolute',
                            inset: 0,
                            background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0) 40%)',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'flex-end',
                            padding: '24px',
                            opacity: 0,
                          }}
                          variants={{
                            hover: { opacity: 1 }
                          }}
                          transition={{ duration: 0.2 }}
                        >
                          <h3 style={{ color: '#fff', fontSize: '20px', fontWeight: 900, marginBottom: '4px' }}>
                            {photo.title}
                          </h3>
                          
                        </motion.div>
                      )}
                    </motion.div>
                  );
                })}
              </motion.div>
            )}

            {activeTab === 'illustration' && (
              <motion.div
                key="illustration"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
                  gap: 'var(--spacing-lg)'
                }}
              >
                {illustrations.map(ill => (
                  <motion.div
                    key={`ill-${ill.id}`}
                    variants={itemVariants}
                    style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-sm)' }}
                  >
                    <motion.div className="surface-1"
                      onClick={() => setSelectedImage(`/${ill.id}.jpg`)}
                      style={{
                        width: '100%',
                        aspectRatio: '3/4',
                        borderRadius: 'var(--rounded-md)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        overflow: 'hidden',
                        backgroundColor: 'var(--colors-surface-2)',
                        cursor: 'pointer',
                        border: '1px solid var(--colors-hairline)'
                      }}
                      whileHover={{
                        y: -5,
                        boxShadow: '0 10px 30px rgba(166, 148, 245, 0.15)',
                        borderColor: 'var(--colors-primary)'
                      }}
                      transition={{ duration: 0.2 }}
                    >
                      <motion.img
                        src={`/${ill.id}.jpg`}
                        alt={ill.title}
                        loading="lazy"
                        onLoad={(e) => e.target.style.opacity = 1}
                        style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0, transition: 'opacity 0.5s ease' }}
                      />
                    </motion.div>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px' }}>
                      <h4 className="text-body-sm" style={{ fontWeight: 600, margin: 0 }}>{ill.title}</h4>
                      <span className="text-caption" style={{ color: 'var(--colors-primary)', fontSize: '12px', background: 'var(--colors-surface-2)', padding: '2px 8px', borderRadius: 'var(--rounded-pill)', fontWeight: 600 }}>{ill.year}</span>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}

            {activeTab === 'fanart' && (
              <motion.div
                key="fanart"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="fanart-container"
              >
                {/* Left Column: Inventory */}
                <div className="fanart-inventory surface-1" style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fill, minmax(80px, 1fr))',
                  gap: 'var(--spacing-sm)',
                  alignContent: 'center', /* 위아래 여백을 완벽하게 맞추기 위해 center로 변경 */
                  padding: '11px 16px 21px 16px', /* 시각적 균형을 위해 위로 딱 5px 올림 (Top 11, Bottom 21) */
                  borderRadius: 'var(--rounded-xl)',
                  border: '1px solid var(--colors-primary)',
                  boxShadow: '0 20px 40px rgba(166, 148, 245, 0.15)'
                }}>
                  {fanarts.map((art, index) => {
                    const isSelected = selectedFanartIndex === index;
                    return (
                      <motion.div
                        key={`fanart-${art.id}-${index}`}
                        onClick={() => setSelectedFanartIndex(index)}
                        style={{
                          aspectRatio: '1/1',
                          borderRadius: 'var(--rounded-md)',
                          overflow: 'hidden',
                          position: 'relative',
                          cursor: 'pointer',
                          border: isSelected ? '3px solid var(--colors-primary)' : '1px solid var(--colors-hairline)',
                          opacity: isSelected ? 1 : 0.6,
                          transition: 'all 0.2s ease',
                          backgroundColor: 'var(--colors-surface-2)',
                          boxShadow: isSelected ? '0 0 15px rgba(166, 148, 245, 0.4)' : 'none'
                        }}
                        whileHover={{
                          opacity: 1,
                          scale: 1.05,
                          borderColor: isSelected ? 'var(--colors-primary)' : 'var(--colors-ink-subtle)'
                        }}
                      >
                        <img
                          src={art.src}
                          alt={art.title}
                          loading="lazy"
                          decoding="async"
                          onLoad={(e) => e.target.style.opacity = 1}
                          style={{
                            width: '100%',
                            height: '100%',
                            display: 'block',
                            objectFit: 'cover',
                            imageRendering: '-webkit-optimize-contrast',
                            transform: 'translateZ(0)',
                            opacity: 0,
                            transition: 'opacity 0.5s ease'
                          }}
                        />
                      </motion.div>
                    );
                  })}
                </div>

                {/* Right Column: Detail View */}
                <div className="fanart-detail">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={`detail-${selectedFanartIndex}`}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="surface-1"
                      style={{
                        height: '580px', /* 오른쪽 인벤토리와 완벽한 높이 맞춤 */
                        borderRadius: 'var(--rounded-xl)',
                        overflow: 'hidden',
                        border: '1px solid var(--colors-primary)',
                        boxShadow: '0 20px 40px rgba(166, 148, 245, 0.15)',
                        display: 'flex',
                        flexDirection: 'column'
                      }}
                    >
                      <div style={{
                        margin: '16px 16px 0 16px', /* 상단 및 양옆에서 떨어지게 여백 추가 */
                        flex: 1, /* 남은 공간을 꽉 채우도록 설정 */
                        backgroundColor: '#050505',
                        cursor: 'zoom-in',
                        position: 'relative',
                        borderRadius: 'var(--rounded-lg)',
                        overflow: 'hidden'
                      }}
                        onClick={() => setSelectedImage(fanarts[selectedFanartIndex].src)}
                      >
                        <img
                          src={fanarts[selectedFanartIndex].src}
                          alt={fanarts[selectedFanartIndex].title}
                          loading="lazy"
                          decoding="async"
                          key={`main-${selectedFanartIndex}`}
                          onLoad={(e) => e.target.style.opacity = 1}
                          style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'contain',
                            imageRendering: '-webkit-optimize-contrast',
                            transform: 'translateZ(0)',
                            opacity: 0,
                            transition: 'opacity 0.3s ease'
                          }}
                        />
                        <div style={{
                          position: 'absolute',
                          top: '16px', right: '16px',
                          background: 'rgba(0,0,0,0.6)',
                          backdropFilter: 'blur(4px)',
                          padding: '6px 12px',
                          borderRadius: 'var(--rounded-pill)',
                          fontSize: '12px',
                          fontWeight: 600,
                          color: '#fff',
                          border: '1px solid rgba(255,255,255,0.1)'
                        }}>
                          클릭하여 확대
                        </div>
                      </div>
                      <div style={{ padding: 'var(--spacing-lg) var(--spacing-xl)' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                          <h3 style={{ fontSize: '18px', fontWeight: 800 }}>{fanarts[selectedFanartIndex].title}</h3>
                          <span style={{ fontSize: '11px', color: 'var(--colors-primary)', background: 'var(--colors-surface-2)', padding: '4px 10px', borderRadius: 'var(--rounded-pill)', fontWeight: 600 }}>
                            No. {selectedFanartIndex + 1}
                          </span>
                        </div>
                        <p style={{ color: 'var(--colors-ink-muted)', fontSize: '13px', lineHeight: 1.5, margin: 0, wordBreak: 'keep-all' }}>
                          {fanarts[selectedFanartIndex].description}
                        </p>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>

              </motion.div>
            )}
          </AnimatePresence>

        </section>
      </main>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100vw',
              height: '100vh',
              backgroundColor: 'rgba(0, 0, 0, 0.85)',
              zIndex: 9999,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '40px',
              cursor: 'zoom-out'
            }}
          >
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              src={selectedImage}
              style={{
                maxWidth: '100%',
                maxHeight: '100%',
                objectFit: 'contain',
                borderRadius: '8px',
                boxShadow: '0 20px 40px rgba(0,0,0,0.5)',
                cursor: 'default'
              }}
              onClick={(e) => e.stopPropagation()} // prevent closing when clicking the image itself
            />
            <button
              onClick={() => setSelectedImage(null)}
              style={{
                position: 'absolute',
                top: '24px',
                right: '24px',
                background: 'rgba(255, 255, 255, 0.1)',
                border: 'none',
                color: 'white',
                fontSize: '28px',
                width: '48px',
                height: '48px',
                borderRadius: '50%',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backdropFilter: 'blur(4px)'
              }}
            >
              ×
            </button>
          </motion.div>
        )}
      </AnimatePresence>

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

export default Gallery;
