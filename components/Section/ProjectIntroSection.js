'use client';

import { useEffect, useRef } from 'react';
import styles from './ProjectIntroSection.module.css';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

const ProjectIntroSection = () => {
  const galleryWrapperRef = useRef(null);
  const sideColsRef = useRef([]);
  const mainImgRef = useRef(null);
  const galleryContainerRef = useRef(null);
  const gallerySectionRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    ScrollTrigger.create({
      trigger: gallerySectionRef.current,
      start: "top center",
      end: "bottom bottom",
      scrub: 1,
      onUpdate: (self) => {
        if (!galleryWrapperRef.current || !mainImgRef.current || !galleryContainerRef.current) return;

        const screenWidth = window.innerWidth;
        const maxScale = screenWidth < 900 ? 4 : 2.65;

        // // 갤러리의 opacity 조절
        // const opacity = Math.min(self.progress * 2, 1);
        // galleryContainerRef.current.style.opacity = opacity;

        const scale = 1 + self.progress * maxScale;
        const yTranslate = self.progress * 300;
        const mainImgScale = 2 - self.progress * 0.85;

        galleryWrapperRef.current.style.transform = `translate(-50%, -50%) scale(${scale})`;

        sideColsRef.current.forEach((col) => {
          if (col) {
            col.style.transform = `translateY(${yTranslate}px)`;
          }
        });

        mainImgRef.current.style.transform = `scale(${mainImgScale})`;
      },
    });

 
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const addSideColRef = (el) => {
    if (el && !sideColsRef.current.includes(el)) {
      sideColsRef.current.push(el);
    }
  };

  return (
    <div className={styles.wrapper}>
      <section className={styles.intro}>
        <div className={styles.tagline}>
          <p>제가 작업한 프로젝트를 소개합니다.</p>
        </div>
        <div className={styles.divider}></div>
        <div className={styles.intro_header}>
          <h1>Featured</h1>
          <h1>Projects</h1>
        </div>
      </section>

      <section ref={gallerySectionRef} className={styles.gallery_section}>
        <div ref={galleryContainerRef} className={styles.gallery_container}>
          <div className={styles.gallery_wrapper} ref={galleryWrapperRef}>
            <div className={styles.col} ref={addSideColRef}>
              <div className={styles.img_wrapper}><img src="/images/projectIntro/img1.jpg" alt="" className={styles.img} /></div>
              <div className={styles.img_wrapper}><img src="/images/projectIntro/img2.jpg" alt="" className={styles.img} /></div>
              <div className={styles.img_wrapper}><img src="/images/projectIntro/img3.jpg" alt="" className={styles.img} /></div>
            </div>
            
            <div className={styles.col} ref={addSideColRef}>
              <div className={styles.img_wrapper}><img src="/images/projectIntro/img4.jpg" alt="" className={styles.img} /></div>
              <div className={styles.img_wrapper}><img src="/images/projectIntro/img5.jpg" alt="" className={styles.img} /></div>
              <div className={styles.img_wrapper}><img src="/images/projectIntro/img6.jpg" alt="" className={styles.img} /></div>
            </div>
            
            <div className={styles.col}>
              <div className={styles.img_wrapper}><img src="/images/projectIntro/img7.jpg" alt="" className={styles.img} /></div>
              <div className={styles.img_wrapper}>
                <img 
                  ref={mainImgRef}
                  src="/images/projectIntro/img8.jpg" 
                  alt="" 
                  className={`${styles.img} ${styles.main_img}`} 
                />
              </div>
              <div className={styles.img_wrapper}><img src="/images/projectIntro/img9.jpg" alt="" className={styles.img} /></div>
            </div>
            
            <div className={styles.col} ref={addSideColRef}>
              <div className={styles.img_wrapper}><img src="/images/projectIntro/img10.jpg" alt="" className={styles.img} /></div>
              <div className={styles.img_wrapper}><img src="/images/projectIntro/img11.jpg" alt="" className={styles.img} /></div>
              <div className={styles.img_wrapper}><img src="/images/projectIntro/img12.jpg" alt="" className={styles.img} /></div>
            </div>
            
            <div className={styles.col} ref={addSideColRef}>
              <div className={styles.img_wrapper}><img src="/images/projectIntro/img1.jpg" alt="" className={styles.img} /></div>
              <div className={styles.img_wrapper}><img src="/images/projectIntro/img2.jpg" alt="" className={styles.img} /></div>
              <div className={styles.img_wrapper}><img src="/images/projectIntro/img3.jpg" alt="" className={styles.img} /></div>
            </div>
          </div>
        </div>
        <div className={styles.whitespace}></div>
      </section>
    </div>
  );
};

export default ProjectIntroSection;