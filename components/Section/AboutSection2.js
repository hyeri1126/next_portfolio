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
        color: "rgba(255,255, 255, 0.3)",
   
      },
      {
        color: "rgb(0,0,0)",
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

    return () => {
      // 클린업
      text.revert();
    };
  }, []);

  return (
    <section className={styles.about}>
      <div className={styles.container}>
        <div className={styles.content}>

          저는 사용자가 새롭고 다채로운 웹 세상에 깊이 몰입할 수 있도록
          웹 세계를 설계하는 프론트엔드 개발자입니다.  <br />
          한 번도 느껴보지 못한 재미있고 편리한 웹 경험을 선물하는 것이 저의 궁극적인 목표입니다. 
          항상 성장하고 노력하며, 더 나은 웹 세상을 만들어가겠습니다.
        </div>
      </div>
    </section>
  );
}