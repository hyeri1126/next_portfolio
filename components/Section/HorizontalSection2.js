'use client'

import { useEffect, useRef } from 'react';
import styles from "./HorizontalSection2.module.css";
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

export default function HorizontalSection2(){
  const stickyRef = useRef(null);
  const slidesContainerRef = useRef(null);
  const sliderRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // if (!stickyRef.current || !slidesContainerRef.current || !sliderRef.current) return;

    const totalMove = slidesContainerRef.current.offsetWidth - sliderRef.current.offsetWidth;

    // ScrollTrigger 설정
    ScrollTrigger.create({
      trigger: stickyRef.current,
      start: "top top",
      end: `+=${window.innerHeight * 5}px`,
      scrub: 1,
      pin: true,
      pinSpacing: true,
      onUpdate: (self) => {
        gsap.set(slidesContainerRef.current, {
          x: -self.progress * totalMove,
        });
      },
      snap: {
        snapTo: 1 / (slidesContainerRef.current.children.length - 1), // 각 슬라이드에 맞춤
        duration: 0.5, // 스냅 애니메이션 지속 시간 (초)
        ease: "power1.inOut", // 스냅 애니메이션의 이징
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return(
    <section  className={styles.sectionBox}>
      <div  ref={stickyRef} className={styles.sticky}>
        <div  ref={sliderRef} className={styles.slider}>
          <div  ref={slidesContainerRef} className={styles.slides}>

            {/* 프로젝트 1 */}
            <div 
             
              className={styles.slide}
            >
              <div className={styles.title}>
                <h1>Project 1</h1>
                <h1>3D Interactive Web</h1>
                {/* <h1>C4D와 Three.js를 활용한 3D 인터랙티브 웹 포트폴리오</h1> */}
              </div>
              <div className={styles.desc}>
                <div className={styles.descLeft}>

                  <div className={styles.descTop}>
                    2D에 한정된 디자인에서 벗어나 무한한 스펙트럼을 가진 웹을 구현하고자 
                    3D 모션그래픽을 웹상에 적용했습니다.
                    3D 요소들로 저만의 작업공간과 세계관을 표현했습니다. 
                    사용자 인터랙션에 반응하는 자연스러운 
                    애니메이션이 부여된 3D 모션들과 나만의 3D 우주세계를 커스터마이징하는 재밌는 경험을 즐겨보세요!
                  </div>
                  <div className={styles.descDetail}>
                    <div><strong>작업 기간:</strong> 2023년 12월 ~ 2024년 1월 (1개월)</div>
                    <div><strong>인력 구성(기여도):</strong> FE 1명 (FE 기여도 100%)</div>
                    <div><strong>프로젝트 내용:</strong> 
                      Three.js를 활용하여 3D 모션그래픽을 웹에 접목시킨 나만의 세계와 가치관이 부여된 3D 월드
                    </div>
                    <div><strong>주요 업무 및 상세 역할:</strong>
                      <ul>
                        <li>C4D를 사용한 3D 모델링 및 렌더링 작업</li>
                        <li>Three.js를 활용한 3D 그래픽 인터랙션 구현</li>
                        <li>웹 기획 및 디자인 구성</li>
                        <li>전반적인 프론트엔드 업무 수행</li>
                      </ul>
                    </div>
                    <div><strong>사용언어 및 개발 환경:</strong> 
                      Three.js, GSAP, HTML/CSS, JavaScript, Webpack
                    </div>
                    <div><strong>프로젝트 바로가기:</strong> 
                      <a href="https://hyeri1126.github.io/hyeri-s-interactive-3d-web/" target="_blank">
                        링크 바로가기
                      </a>
                    </div>
                    <div><strong>개발 블로그:</strong> 
                      <a href="https://hyerilog.tistory.com/156" target="_blank">
                        블로그 바로가기
                      </a>
                    </div>
                    <div><strong>GitHub 링크:</strong> 
                      <a href="https://github.com/hyeri1126/3D_Interactive_Web" target="_blank">
                        코드 확인하기
                      </a>
                    </div>
                  </div>
             
                
                </div>
                <div className={styles.descRight}>
                  <div className={styles.imgBox}>
                    <img src="/images/projects/project1_main2.png" className={styles.img}/>
                  </div>
                </div>
              </div>
            </div>

            
            {/* 프로젝트 2 */}
            <div
           
              className={styles.slide}
            >
              <div className={styles.title}>
                <h1>Project 2</h1>
                <h1>집계리아아</h1>
                {/* <h1>C4D와 Three.js를 활용한 3D 인터랙티브 웹 포트폴리오</h1> */}
              </div>
              <div className={styles.desc}>
                <div className={styles.descLeft}>

                  <div className={styles.descTop}>
                    2D에 한정된 디자인에서 벗어나 무한한 스펙트럼을 가진 웹을 구현하고자 
                    3D 모션그래픽을 웹상에 적용했습니다.
                    3D 요소들로 저만의 작업공간과 세계관을 표현했습니다. 
                    사용자 인터랙션에 반응하는 자연스러운 
                    애니메이션이 부여된 3D 모션들과 나만의 3D 우주세계를 커스터마이징하는 재밌는 경험을 즐겨보세요!
                  </div>
                  <div className={styles.descDetail}>
                    <div><strong>작업 기간:</strong> 2023년 12월 ~ 2024년 1월 (1개월)</div>
                    <div><strong>인력 구성(기여도):</strong> FE 1명 (FE 기여도 100%)</div>
                    <div><strong>프로젝트 내용:</strong> 
                      Three.js를 활용하여 3D 모션그래픽을 웹에 접목시킨 나만의 세계와 가치관이 부여된 3D 월드
                    </div>
                    <div><strong>주요 업무 및 상세 역할:</strong>
                      <ul>
                        <li>C4D를 사용한 3D 모델링 및 렌더링 작업</li>
                        <li>Three.js를 활용한 3D 그래픽 인터랙션 구현</li>
                        <li>웹 기획 및 디자인 구성</li>
                        <li>전반적인 프론트엔드 업무 수행</li>
                      </ul>
                    </div>
                    <div><strong>사용언어 및 개발 환경:</strong> 
                      Three.js, GSAP, HTML/CSS, JavaScript, Webpack
                    </div>
                    <div><strong>프로젝트 바로가기:</strong> 
                      <a href="https://hyeri1126.github.io/hyeri-s-interactive-3d-web/" target="_blank">
                        링크 바로가기
                      </a>
                    </div>
                    <div><strong>개발 블로그:</strong> 
                      <a href="https://hyerilog.tistory.com/156" target="_blank">
                        블로그 바로가기
                      </a>
                    </div>
                    <div><strong>GitHub 링크:</strong> 
                      <a href="https://github.com/hyeri1126/3D_Interactive_Web" target="_blank">
                        코드 확인하기
                      </a>
                    </div>
                  </div>
             
                
                </div>
                <div className={styles.descRight}>
                  <div className={styles.imgBox}>
                    <img src="/images/projects/project2_main.png" className={styles.img}/>
                  </div>
                </div>
              </div>
            </div>


                 
            {/* 프로젝트 3 */}
            <div 
           
              className={styles.slide}
            >
              <div className={styles.title}>
                <h1>Project 3</h1>
                <h1>집계리아아</h1>
                {/* <h1>C4D와 Three.js를 활용한 3D 인터랙티브 웹 포트폴리오</h1> */}
              </div>
              <div className={styles.desc}>
                <div className={styles.descLeft}>

                  <div className={styles.descTop}>
                    2D에 한정된 디자인에서 벗어나 무한한 스펙트럼을 가진 웹을 구현하고자 
                    3D 모션그래픽을 웹상에 적용했습니다.
                    3D 요소들로 저만의 작업공간과 세계관을 표현했습니다. 
                    사용자 인터랙션에 반응하는 자연스러운 
                    애니메이션이 부여된 3D 모션들과 나만의 3D 우주세계를 커스터마이징하는 재밌는 경험을 즐겨보세요!
                  </div>
                  <div className={styles.descDetail}>
                    <div><strong>작업 기간:</strong> 2023년 12월 ~ 2024년 1월 (1개월)</div>
                    <div><strong>인력 구성(기여도):</strong> FE 1명 (FE 기여도 100%)</div>
                    <div><strong>프로젝트 내용:</strong> 
                      Three.js를 활용하여 3D 모션그래픽을 웹에 접목시킨 나만의 세계와 가치관이 부여된 3D 월드
                    </div>
                    <div><strong>주요 업무 및 상세 역할:</strong>
                      <ul>
                        <li>C4D를 사용한 3D 모델링 및 렌더링 작업</li>
                        <li>Three.js를 활용한 3D 그래픽 인터랙션 구현</li>
                        <li>웹 기획 및 디자인 구성</li>
                        <li>전반적인 프론트엔드 업무 수행</li>
                      </ul>
                    </div>
                    <div><strong>사용언어 및 개발 환경:</strong> 
                      Three.js, GSAP, HTML/CSS, JavaScript, Webpack
                    </div>
                    <div><strong>프로젝트 바로가기:</strong> 
                      <a href="https://hyeri1126.github.io/hyeri-s-interactive-3d-web/" target="_blank">
                        링크 바로가기
                      </a>
                    </div>
                    <div><strong>개발 블로그:</strong> 
                      <a href="https://hyerilog.tistory.com/156" target="_blank">
                        블로그 바로가기
                      </a>
                    </div>
                    <div><strong>GitHub 링크:</strong> 
                      <a href="https://github.com/hyeri1126/3D_Interactive_Web" target="_blank">
                        코드 확인하기
                      </a>
                    </div>
                  </div>
             
                
                </div>
                <div className={styles.descRight}>
                  <div className={styles.imgBox}>
                    <img src="/images/projects/project3_main.jpg" className={styles.img}/>
                  </div>
                </div>
              </div>
            </div>


                 
            {/* 프로젝트 4 */}
            <div 
           
              className={styles.slide}
            >
              <div className={styles.title}>
                <h1>Project 4</h1>
                <h1>집계리아아</h1>
                {/* <h1>C4D와 Three.js를 활용한 3D 인터랙티브 웹 포트폴리오</h1> */}
              </div>
              <div className={styles.desc}>
                <div className={styles.descLeft}>

                  <div className={styles.descTop}>
                    2D에 한정된 디자인에서 벗어나 무한한 스펙트럼을 가진 웹을 구현하고자 
                    3D 모션그래픽을 웹상에 적용했습니다.
                    3D 요소들로 저만의 작업공간과 세계관을 표현했습니다. 
                    사용자 인터랙션에 반응하는 자연스러운 
                    애니메이션이 부여된 3D 모션들과 나만의 3D 우주세계를 커스터마이징하는 재밌는 경험을 즐겨보세요!
                  </div>
                  <div className={styles.descDetail}>
                    <div><strong>작업 기간:</strong> 2023년 12월 ~ 2024년 1월 (1개월)</div>
                    <div><strong>인력 구성(기여도):</strong> FE 1명 (FE 기여도 100%)</div>
                    <div><strong>프로젝트 내용:</strong> 
                      Three.js를 활용하여 3D 모션그래픽을 웹에 접목시킨 나만의 세계와 가치관이 부여된 3D 월드
                    </div>
                    <div><strong>주요 업무 및 상세 역할:</strong>
                      <ul>
                        <li>C4D를 사용한 3D 모델링 및 렌더링 작업</li>
                        <li>Three.js를 활용한 3D 그래픽 인터랙션 구현</li>
                        <li>웹 기획 및 디자인 구성</li>
                        <li>전반적인 프론트엔드 업무 수행</li>
                      </ul>
                    </div>
                    <div><strong>사용언어 및 개발 환경:</strong> 
                      Three.js, GSAP, HTML/CSS, JavaScript, Webpack
                    </div>
                    <div><strong>프로젝트 바로가기:</strong> 
                      <a href="https://hyeri1126.github.io/hyeri-s-interactive-3d-web/" target="_blank">
                        링크 바로가기
                      </a>
                    </div>
                    <div><strong>개발 블로그:</strong> 
                      <a href="https://hyerilog.tistory.com/156" target="_blank">
                        블로그 바로가기
                      </a>
                    </div>
                    <div><strong>GitHub 링크:</strong> 
                      <a href="https://github.com/hyeri1126/3D_Interactive_Web" target="_blank">
                        코드 확인하기
                      </a>
                    </div>
                  </div>
             
                
                </div>
                <div className={styles.descRight} >
                  <div className={styles.imgBox}>
                    <img src="/images/projects/project3_main.jpg" className={styles.img} />
                  </div>
                </div>
              </div>
            </div>

   
          </div>
        </div>
      </div>
     
    </section>
 
  )
}