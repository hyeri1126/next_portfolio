'use client';

import { useEffect, useRef } from 'react';
import styles from './HorizontalSection.module.css';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

const PROJECTS_DATA = [
  {
    image: '/images/img1.jpeg',
    title: ['Project One', 'Description One']
  },
  {
    image: '/images/img2.jpeg',
    title: ['Project Two', 'Description Two']
  },
  {
    image: '/images/img3.jpeg',
    title: ['Project Three', 'Description Three']
  },
  {
    image: '/images/img4.jpeg',
    title: ['Project Four', 'Description Four']
  },
  {
    image: '/images/img5.jpeg',
    title: ['Project Five', 'Description Five']
  }
];

export default function HorizontalSection() {
  const containerRef = useRef(null);
  const sliderRef = useRef(null);
  const slidesRef = useRef(null);
  const slideRefs = useRef([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
 

    if (!containerRef.current || !sliderRef.current || !slidesRef.current) return;

    // 전체 스크롤 높이 설정 (프로젝트 슬라이드만)
    const totalHeight = window.innerHeight * 6; // 프로젝트 영역만큼의 높이
    const totalMove = slidesRef.current.offsetWidth - sliderRef.current.offsetWidth;

    // 초기 상태 설정
    slideRefs.current.forEach((slide) => {
      const title = slide.querySelector('h1');
      const image = slide.querySelector('img');
      if (title) gsap.set(title, { y: 100, opacity: 0 });
      if (image) gsap.set(image, { opacity: 0 });
    });

    // 슬라이더 표시
    gsap.set(sliderRef.current, { opacity: 1 });

    // 메인 ScrollTrigger 생성
    ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top top",
      end: `+=${totalHeight}px`,
      scrub: 1.5,
      pin: true,
      pinSpacing: true,
      onUpdate: (self) => {
        const progress = self.progress;
        const mainMove = progress * totalMove;
        
        // 수평 스크롤
        gsap.to(slidesRef.current, {
          x: -mainMove,
          duration: 0.5
        });

        const currentSlide = Math.floor((mainMove / totalMove) * PROJECTS_DATA.length);
        
        slideRefs.current.forEach((slide, index) => {
          const title = slide.querySelector('h1');
          const image = slide.querySelector('img');
          
          const distance = Math.abs(index - currentSlide);
          
          let opacity;
          if (distance === 0) {
            opacity = 1;
          } else if (distance === 1) {
            const slideProgress = (mainMove / totalMove) * PROJECTS_DATA.length;
            const decimal = slideProgress - Math.floor(slideProgress);
            
            if (index > currentSlide) {
              opacity = decimal < 0.2 ? 0 : (decimal - 0.2) / 0.3;
            } else {
              opacity = decimal <= 0.7 ? 1 : Math.pow(1 - decimal, 3);
            }
          } else {
            opacity = 0;
          }
        
          gsap.to(title, {
            y: distance === 0 ? 0 : -300,
            opacity: opacity,
            duration: 0.5
          });
          gsap.to(image, {
            y: distance === 0 ? 0 : 1000, 
            opacity: opacity,
            duration: 0.5
          });
        });
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div ref={containerRef} className={styles.container}>
      <section ref={sliderRef} className={styles.slider}>
        <div ref={slidesRef} className={styles.slides}>
          {PROJECTS_DATA.map((project, index) => (
            <div
              key={index}
              ref={el => {
                if (el) slideRefs.current[index] = el;
              }}
              className={styles.slide}
            >
              <div className={styles.content}>
                <div className={styles.title}>
                  <h1>
                    {project.title[0]}<br />{project.title[1]}
                  </h1>
                </div>
                <div className={styles.main}>
                  <div className={styles.desc}>Project Description</div>
                  <div className={styles.img}>
                    <img src={project.image} alt="" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}