'use client';

import { useEffect } from 'react';
import styles from './AboutSection2.module.css';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import SplitType from 'split-type';

export default function AboutSection() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const section = document.querySelector(`.${styles.about}`);
    
    // 텍스트를 글자 단위로 분리
    const text = new SplitType(`.${styles.content}`, { 
      types: 'chars',
      charClass: `${styles.char}`
    });

    const chars = text.chars;

    // 섹션 고정
    ScrollTrigger.create({
      trigger: section,
      start: "top top", // 섹션이 화면 중앙에 왔을 때 시작
      end: "+=220%", // 스크롤 길이 조정
      pin: true,
      pinSpacing: true,
    });

    // 글자별 애니메이션
    gsap.fromTo(
      chars,
      {
        color: "rgba(255,255, 255, 0.2)",
   
      },
      {
        color: "rgb(255,255,255)",
        duration: 1,
        stagger: 1, // 글자별 시차
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "+=220%",
          scrub: true,

        },
      }
    );

    gsap.to(`.${styles.parallaxBackground}`, {
      y: "-20%", /* 배경이 위로 느리게 이동 */
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: "bottom",
        scrub: true,
      },
    });

    return () => {
      // 클린업
      text.revert();
    };
  }, []);

  return (
    <section className={styles.about}>
      <div className={styles.parallaxBackground}></div>
      <div className={styles.container}>
        <div className={styles.content}>
          <div>
          
            아이디어를 현실로 구현할 수 있다는 매력에 이끌려 프론트엔드 개발자가 되었습니다. 
            사용자들에게 다양한 애니메이션과 인터랙션 기능을 통해 독창적이고 즐거운, 
            한 번 경험하면 잊을 수 없는 웹 경험을 제공하는 것이 개발자로서 제 꿈입니다.
          </div>

          <div className={styles.highlight}>
            <div className={styles.desc}>항상 "Yes, I can!"을 외치며 도전하겠습니다.</div>
            <div className={styles.desc}>끊임없이 배우고 성장해 시대에 뒤쳐지지 않겠습니다.</div>
            <div className={styles.desc}>어디서든 신뢰받고 도움이 되는 인재로 자리매김하겠습니다.</div>
          </div>
      
        </div>
      </div>
    </section>
  );
}