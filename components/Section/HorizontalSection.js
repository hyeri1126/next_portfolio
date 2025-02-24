'use client'

import { useEffect, useRef } from 'react';
import styles from "./HorizontalSection.module.css";
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import ImageSlider from './ImageSlider';

export default function HorizontalSection(){
  const stickyRef = useRef(null);
  const slidesContainerRef = useRef(null);
  const sliderRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const createScrollTrigger = () => {
      const totalMove = slidesContainerRef.current.offsetWidth - sliderRef.current.offsetWidth;
  
      ScrollTrigger.create({
        id: 'horizontal-section', 
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
          snapTo: 1 / (slidesContainerRef.current.children.length - 1),
          duration: 0.5,
          ease: "power1.inOut",
        },
      });
    };

    createScrollTrigger();

    window.addEventListener('resize', () => {
      console.log("resize");
      const trigger = ScrollTrigger.getById('horizontal-section');
      if (trigger) trigger.kill();

      createScrollTrigger();
    })

    return () => {
      const trigger = ScrollTrigger.getById('horizontal-section');
      if (trigger) trigger.kill();
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
                <h1 className={styles.grad1}>Project 1</h1>
                <h1 className={styles.grad1}>Baas 기반 임베디드 금융 서비스</h1>
              </div>
              <div className={styles.desc}>
                <div className={styles.descLeft}>
                  <div className={styles.descTop}>
                    우리FIS 클라우드 서비스 개발 교육 과정의 최종 프로젝트로,
                    <span className={styles.highlight}>팀 프론트엔드 리더</span>로서 프로젝트를 이끌며 개발과 협업을 성공적으로 수행했습니다.  
                    자산관리에 어려움을 느끼고 회계사 고용 비용 절감을 원하는 소상공인을 위한 <span className={styles.highlight}>통합 비즈니스 관리 플랫폼</span>을 구축했습니다.
                    프로젝트는 소상공인에 최적화된 직관적인 UI/UX 설계, MSA 기반의 안정적인 시스템 구조, 
                    그리고 BaaS 기반 금융 API의 효과적인 활용과 서비스 기획력을 인정받아 
                    <span className={styles.highlight}>우리FIS 교육 1등(최우수상)</span>을 수상했습니다.
                  </div>
                  <div className={styles.descDetail}>
                    <div><strong>작업 기간:</strong> 2024년 10월 ~ 12월 (2개월)</div>
                    <div><strong>팀 구성: </strong> 6명 (백엔드/아키텍처/프론트엔드 리더 각 1명, 풀스택 개발자 3명) </div>
                    <div><strong>기여도: </strong> 프론트엔드 개발 90%, 프론트엔드 팀 리드 </div>
                    <div><strong>프로젝트 핵심 기능:</strong>
                        <ul>
                            <li>MSA 아키텍처 기반의 시스템 설계</li>
                            <li>BaaS 기반 금융 API를 활용한 자산관리 서비스</li>
                            <li>보안 강화를 위한 4단계 사업자 인증 시스템</li>
                        </ul>
                    </div>
                    <div><strong>주요 담당 기능:</strong>
                      <ul>
                          <li>Next.js API Routes를 활용한 JWT 토큰 관리로 보안성 강화
                              - 백엔드 직접 통신을 차단하고 서버 사이드에서 토큰 관리</li>
                          <li>4단계 인증 프로세스의 효율적 상태 관리
                              - Context를 활용한 전역 상태 관리로 복잡한 인증 플로우 최적화</li>
                          <li>재사용 가능한 공통 컴포넌트 설계
                              - 팀 내 개발 생산성 향상을 위한 컴포넌트 라이브러리 구축</li>
                          <li>백엔드 통신 로직 모듈화
                              - API 통신 구조 설계 및 상태 관리 패턴 정립으로 협업 효율성 증대</li>
                      </ul>
                    </div>
                    <div><strong>개발 환경:</strong> 
                      Frontend: Next.js, React, Google Maps, NPM |
                      Backend: Spring Boot, MySQL, Redis, JWT, MSA |
                      Testing: Cypress, JMeter |
                              DevOps: AWS, Docker, Jenkins
                    </div>
                    <div><strong>핵심 성과 및 성장 포인트:</strong> 
                      <ul>
                          <li>MSA 기반 대규모 프로젝트에서 프론트엔드 파트 리딩</li>
                          <li>BaaS 기반 금융 서비스 개발을 통한 도메인 지식 습득</li>
                          <li>다양한 직군(백엔드, 아키텍트)과의 협업 능력 강화</li>
                      </ul>
                    </div>
                  
                  </div>
                </div>
                <div className={styles.descRight}>
                  <div className={styles.imgBox2}>
                    <div className={styles.videoTitle}>프로젝트 시연 영상을 통해 서비스를 직접 체험해보세요:) </div>
                    <div className={styles.videoBox}>
                      <div className={styles.videoOverlay}>
                        <div className={styles.linkContainer}>
                          <div><a href="https://hyeri1126.github.io/hyeri-s-interactive-3d-web/" target="_blank">프로젝트 바로가기 ↗️</a></div>
                          <div><a href="https://hyerilog.tistory.com/156" target="_blank">개발 블로그 ↗️</a></div>
                          <div><a href="https://github.com/hyeri1126/3D_Interactive_Web" target="_blank">GitHub ↗️</a></div>
                        </div>
                      </div>
                      <iframe 
                        width="560" 
                        height="315" 
                        src="https://www.youtube.com/embed/6SOK2FfAb30?autoplay=1&mute=1&loop=1&playlist=6SOK2FfAb30" 
                        title="YouTube video player" 
                        frameBorder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowFullScreen>
                      </iframe>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 프로젝트 2 */}
            <div 
              className={styles.slide}
            >
              <div className={`${styles.title} `}>
                <h1 className={styles.grad}>Project 2</h1>
                <h1 className={styles.grad}>3D 인터랙티브 웹 구현</h1>
              </div>
              <div className={styles.desc}>
                <div className={styles.descLeft}>
                  <div className={styles.descTop}>
                    평소 2D 웹의 한계를 넘은 3D 요소를 활용한 인터랙티브 웹에 대한 관심을 바탕으로, <span className={styles.highlight}>콜로소의 초이인 강의</span>를 수강하며 해당 프로젝트를 진행하였습니다. 
                    강의를 통해 <span className={styles.highlight}>디자이너의 관점</span>에서 3D 모션 그래픽을 이해하고,
                    <span className={styles.highlight}>개발자의 시각</span>에서 이를 웹에 구현하는 과정을 통해
                    3D 인터랙티브 웹 제작에 한걸음 다가갈 수 있었습니다.
                    특히 처음 다뤄보는 C4D로 3D 모델을 직접 제작하고 Three.js로 그래픽 애니메이션을 구현하는 체계적인 과정을 바탕으로
                    웹 개발의 새로운 기술 역량을 습득할 수 있었습니다. 
                  </div>
                  <div className={styles.descDetail}>
                    <div><strong>작업 기간:</strong> 2023년 12월 ~ 2024년 2월 (3개월)</div>
                    <div><strong>팀 구성:</strong> 개인 프로젝트 (기여도 100%)</div>
                    <div><strong>프로젝트 핵심 기능:</strong> 
                      <ul>
                        <li>3D 오브젝트 색상 커스터마이징 시스템</li>
                        <li>다양한 시점의 3D 공간 탐색 기능</li>
                        <li>인터랙티브한 파티클 배경 효과</li>
                      </ul>
                    </div>
                    <div><strong>핵심 구현 기능:</strong>
                      <ul>
                        <li>Three.js 기반 3D 렌더링 시스템 구축
                            - PerspectiveCamera와 OrbitControls로 다양한 시점 제어 구현</li>
                        <li>Raycaster를 활용한 오브젝트 인터랙션
                            - 3D 오브젝트 선택 및 색상 커스터마이징 기능 개발</li>
                        <li>GSAP 기반 애니메이션 시스템
                            - 부드러운 카메라 전환과 UI 모션 구현</li>
                        <li>Three.js Particle System 활용
                            - 동적인 배경 파티클 효과로 몰입감 향상</li>
                      </ul>
                    </div>
                    <div><strong>개발 환경:</strong>
                      Modeling: C4D |
                      Frontend: Three.js, GSAP, JavaScript |
                      Build: Webpack
                    </div>
                    <div><strong>핵심 성과 및 성장 포인트:</strong>
                      <ul>
                        <li>3D 모델링부터 웹 구현까지 전체 제작 과정 경험</li>
                        <li>Three.js를 활용한 웹 3D 그래픽스 구현 역량 확보</li>
                        <li>인터랙티브 웹 개발을 위한 기술적 기반 마련</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className={styles.descRight}>
                  <div className={styles.imgBox2}>
                    <div className={styles.videoTitle}>프로젝트 시연 영상을 통해 서비스를 직접 체험해보세요:) </div>
                    <div className={styles.videoBox}>
                      <div className={styles.videoOverlay}>
                        <div className={styles.linkContainer}>
                          <div><a href="https://hyeri1126.github.io/hyeri-s-interactive-3d-web/" target="_blank">프로젝트 바로가기 ↗️</a></div>
                          <div><a href="https://hyerilog.tistory.com/156" target="_blank">개발 블로그 ↗️</a></div>
                          <div><a href="https://github.com/hyeri1126/3D_Interactive_Web" target="_blank">GitHub ↗️</a></div>
                        </div>
                      </div>
                      <iframe 
                        width="560" 
                        height="315" 
                        src="https://www.youtube.com/embed/BDIf3z7FV9k?autoplay=1&mute=1&loop=1&playlist=BDIf3z7FV9k" 
                        title="YouTube video player" 
                        frameBorder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowFullScreen>
                      </iframe>
                    </div>
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
                <h1>펫시터 플랫폼 - 케어기버</h1>
              </div>
              <div className={styles.desc}>
                <div className={styles.descLeft}>

                  <div className={styles.descTop}>
                    <span className={styles.highlight}>반려인과 펫시터를 연결하는 모바일 플랫폼</span>으로,
                    <span className={styles.highlight}>
                      React Native 기반의 MVP 아키텍처</span>를 적용한 서비스입니다.
                      반려견을 홀로 두고 외출하기 어려운 반려인들의 고민을 해결하고자 시작된 프로젝트로,
                      누구나 쉽게 펫시터가 될 수 있는 낮은 진입장벽과 방문/위탁 펫시팅 등 다양한 서비스를 제공합니다. 
                      특히 반려인/펫시터 모드 전환 기능을 통해 상황에 따라 서비스 제공자와 이용자 모두가 될 수 있는 
                      유연한 플랫폼을 구현했습니다.
                  </div>
                  <div className={styles.descDetail}>
                    <div><strong>작업 기간:</strong> 2023년 5월 ~ 2023년 11월 (7개월)</div>
                    <div><strong>팀 구성:</strong> 7명 (백엔드/프론트엔드 리더 각 1명, 백엔드 2명, 프론트엔드 2명, 디자이너 1명)</div>
                    <div><strong>기여도:</strong> 프론트엔드 개발 30% </div>
                    <div><strong>프로젝트 핵심 기능:</strong> 
                      <ul>
                        <li>MVP 아키텍처 기반 설계
                            - Presenter: Custom Hooks와 MobX 액션을 통한 UI 제어
                            - View: 재사용 가능한 커스텀 컴포넌트 구현
                            - Model: MobX State Tree를 활용한 상태 관리</li>
                        <li>유연한 사용자 역할 관리
                            - 반려인/펫시터 모드 자유로운 전환 기능
                            - AsyncStorage를 활용한 사용자 정보 영구 저장</li>
                        <li>다양한 펫시팅 서비스
                            - 방문/위탁 펫시팅 예약 시스템
                            - 간편한 프로필 및 일정 관리</li>
                      </ul>
                    </div>
                    <div><strong>주요 담당 기능:</strong>
                      <ul>
                        <li>예약 요금 설정 및 결제 시스템 구현
                            - 펫시터가 설정한 기본 요금과 부가 서비스 요금 관리
                            - 날짜별 서비스 예약 시스템 개발</li>
                        <li>서비스 예약 프로세스 개발
                            - 펫시터/반려인 간 예약 확정 플로우 구현
                            - 예약 상태 관리 및 알림 시스템 연동</li>
                        <li>결제 시스템 UI/UX 구현
                            - 서비스 요금 계산 로직 설계
                            - 간편한 결제 프로세스 구축</li>
                      </ul>
                    </div>
                    <div><strong>개발 환경:</strong> 
                      Frontend: React Native, TypeScript, MobX State Tree, React Query |
                      Backend: Node.js, Express, PostgreSQL, Firebase Auth |
                      DevOps: AWS, Docker, GitHub Actions
                    </div>
                    <div><strong>핵심 성과 및 성장 포인트:</strong>
                      <ul>
                        <li>대규모 프로젝트의 체계적인 아키텍처 경험
                            - 고도로 모듈화된 컴포넌트 설계 방식 학습
                        </li>
                        <li>프로페셔널한 개발 프로세스 체득
                            - 코드 컨벤션과 모듈화 기준 학습
                            - 체계적인 개발 환경 세팅 경험
                        </li>
                        <li>효율적인 협업 문화 경험
                            - 정기적인 팀 회의를 통한 일정 관리 및 이슈 해결
                            - 실무 수준의 코드 리뷰 프로세스 경험
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className={styles.descRight}>
                  <div className={styles.imgBox}>
                    <ImageSlider />
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