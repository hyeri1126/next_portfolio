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
                <h1>Project 1</h1>
                <h1>Baas 기반 임베디드 금융 서비스, 집계사장 </h1>
              </div>
              <div className={styles.desc}>
                <div className={styles.descLeft}>
                  <div className={styles.descTop}>
                    <span className={styles.highlight}>집계사장</span>은 자산/직원 관리와 회계 업무에 어려움을 겪는 소상공인/자영업자를 위한 <span className={styles.highlight}>비즈니스 통합 관리 플랫폼</span>입니다. 
                      이 프로젝트는 소상공인에 최적화된 직관적인 UI/UX 설계, MSA 기반의 안정적인 시스템 구조, 
                      그리고 BaaS 기반 금융 API의 효과적인 활용과 서비스 기획력을 인정받아 
                    <span className={styles.highlight}>우리FISA 3기 최우수 프로젝트</span>로 선정되었습니다다.
                  </div>
                  <div className={styles.descDetail}>
                    <div><strong>작업 기간:</strong> 2024년 10월 ~ 12월 (2개월)</div>
                    <div><strong>팀 구성: </strong> 6명 (백엔드/아키텍처/프론트엔드 리더 각 1명, 풀스택 개발자 3명) </div>
                    <div><strong>기여도: </strong>  프론트엔드 팀 리드, 프론트엔드 개발 90% </div>
                    <div><strong>프로젝트 핵심 기능:</strong>
                        <ul>
                            <li>MSA 아키텍처 기반의 시스템 설계</li>
                            <li>BaaS 기반 금융 API를 활용한 자산관리 서비스</li>
                            <li>보안 강화를 위한 4단계 사업자 인증 시스템</li>
                        </ul>
                    </div>
                    <div><strong>주요 담당 기능:</strong>
                      <ul>
                          <li>Next.js API Routes를 활용한 JWT 토큰 관리로 보안성 강화</li>
                          <li>복잡한 4단계 인증 플로우 최적화</li>
                          <li>재사용 가능한 공통 컴포넌트 설계</li>
                          <li>캘린더 기반 직원 출퇴근 관리 UI 구현 - 직관적인 조회/수정/삭제 </li>
                      </ul>
                    </div>
                    <div><strong>기술 스택(Frontend):</strong>
                      Next.js, React, Context API, Axios, CSS Modules, Cypress
                    </div>
                    <div><strong>성장 포인트:</strong> 
                      <ul>
                        <li>처음으로 프론트엔드 리드를 맡아 팀 코드 컨벤션과 개발 환경 구축 경험</li>
                        <li>프로젝트 중반 팀원들을 설득해 리팩토링을 진행하면서 개발 효율 향상 및 코드 품질 개선</li>
                        <li>생소했던 BaaS와 MSA 구조를 팀원들과 깊게 고민하고 기술을 공유하며 함께 성장</li>
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
                <h1>Project 2</h1>
                <h1>3D 인터랙티브 웹 구현</h1>
              </div>
              <div className={styles.desc}>
                <div className={styles.descLeft}>
                  <div className={styles.descTop}>
                    Three.js와 GSAP를 활용한 3D 인터랙티브 웹 프로젝트로,
                    평소 3D 요소를 활용한 인터랙티브 웹에 대한 관심을 바탕으로, <span className={styles.highlight}>콜로소의 초이인 강의</span>를 수강하며 해당 프로젝트를 진행하였습니다. 
                    강의를 통해 <span className={styles.highlight}>디자이너의 관점</span>에서 3D 모션 그래픽을 이해하고,
                    <span className={styles.highlight}>개발자의 시각</span>에서 이를 웹에 구현하는 과정을 통해
                    3D 인터랙티브 웹 제작에 한걸음 다가갈 수 있었습니다.
                  </div>
                  <div className={styles.descDetail}>
                    <div><strong>작업 기간:</strong> 2023년 12월 ~ 2024년 2월 (3개월)</div>
                    <div><strong>팀 구성:</strong> 개인 프로젝트 </div>
                    <div><strong>프로젝트 핵심 기능:</strong> 
                      <ul>
                        <li>3D 오브젝트 색상 커스터마이징 시스템 - Raycaster, Color Picker 활용</li>
                        <li>PerspectiveCamera와 OrbitControls를 활용한 3D 공간의 다양한 시점 제어</li>
                        <li>3D 파티클 배경 효과</li>
                        <li>반응형 디자인 적용</li>
                      </ul>
                    </div>
                    <div><strong>개발 환경:</strong>
                      Modeling: C4D |
                      Frontend: Three.js, GSAP, JavaScript |
                      Build: Webpack
                    </div>
                    <div><strong>핵심 성과 및 성장 포인트:</strong>
                      <ul>
                        <li>3D 인터랙티브 웹 전체 개발 파이프라인 경험</li>
                        <li>Three.js 라이브러리 활용 역량 증진</li>
                      </ul>
                    </div>
                    <div ><strong>링크:</strong>
                      <div className={styles.linkContainer}>
                        <div><a href="https://hyeri1126.github.io/hyeri-s-interactive-3d-web/" target="_blank">프로젝트 바로가기 ↗️</a></div>
                        <div><a href="https://hyerilog.tistory.com/156" target="_blank">개발 블로그 ↗️</a></div>
                        <div><a href="https://github.com/hyeri1126/3D_Interactive_Web" target="_blank">GitHub ↗️</a></div>
                      </div>
                    </div>
                  
                  </div>
                </div>
                
                <div className={styles.descRight}>
                  <div className={styles.imgBox2}>
                    <div className={styles.videoTitle}>프로젝트 시연 영상을 통해 서비스를 직접 체험해보세요:) </div>
                    <div className={styles.videoBox}>
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
                <h1>펫시터 플랫폼, 케어기버</h1>
              </div>
              <div className={styles.desc}>
                <div className={styles.descLeft}>

                  <div className={styles.descTop}>
                      케어기버는 반려견을 홀로 두고 외출하기 어려운 반려인들의 고민을 해결하고자 시작된 프로젝트로, <span className={styles.highlight}>반려인들을 위한 펫시터 매칭 플랫폼</span>입니다. 
                      누구나 쉽게 펫시터가 될 수 있으며 반려인은 펫시터에게 펫시팅(방문/위탁)을 맡기고 마음 편하게 외출할 수 있습니다.
                      특히 사용자는는 상황에 따라 반려인/펫시터 모드를 자유롭게 전환할 수 있어, 서비스 제공자와 이용자 모두가 될 수 있는 유연한 플랫폼입니다.
                  </div>
                  <div className={styles.descDetail}>
                    <div><strong>작업 기간:</strong> 2023년 5월 ~ 2023년 11월 (7개월)</div>
                    <div><strong>팀 구성:</strong> 7명 (백엔드/프론트엔드 리더 각 1명, 백엔드 2명, 프론트엔드 2명, 디자이너 1명)</div>
                    <div><strong>기여도:</strong> 프론트엔드 개발 30% </div>
                    <div><strong>프로젝트 핵심 기능:</strong> 
                      <ul>
                        <li>MVP 아키텍처 기반 설계</li>
                        <li>사용자 모드 전환 시스템 : 한 계정으로 반려인/펫시터 역할을 자유롭게 전환</li>
                        <li>다양한 펫시팅 서비스 : 방문 펫시팅과 위탁 펫시팅 지원</li>
                        <li>예약 관리 시스템 : 실시간 예약 상태 업데이트, 예약 확정/취소/변경 지원원</li>
                      </ul>
                    </div>
                    <div><strong>주요 담당 기능:</strong>
                      <ul>
                        <li>결제 스크린 - 서비스 요금 설정 화면(기본 요금, 추가 요금 등)</li>
                        <li>예약 취소 바텀시트 모달</li>
                        <li>날짜별 서비스 수정 스크린</li>
                        <li>요금 등록 컴포넌트 리팩토링</li>
                      </ul>
                    </div>
                    <div><strong>프론트엔드 기술 스택택:</strong> 
                      React Native, TypeScript, MobX State Tree, React Query 
                    </div>
                    <div><strong>성장 포인트:</strong>
                      <ul>
                        <li>React Native 개발 환경 구축 경험 습득
                            - 에뮬레이터 설정 및 복잡한 개발 환경 이해
                            - 모바일 앱 개발 워크플로우 적응
                        </li>
                        <li>대규모 프로젝트 구조 이해 및 적용
                            - 복잡한 폴더 구조 내에서 일관된 개발 패턴 학습
                            - 자동화 도구와 커스텀 스크립트 활용 경험
                        </li>
                        <li>실무 수준의 협업 프로세스 경험
                            - Jira와 GitHub Issue를 통한 체계적인 업무 관리
                            - 기술 리더의 코드 리뷰를 통한 성장
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className={styles.descRight}>
                  <div className={styles.imgBox}>
                    <div className={styles.sliderText}>
                      케어기버 서비스 주요화면 살펴보기:)
                    </div>
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
                <h1>프론트엔드 개발자 포트폴리오 | 류혜리</h1>
              </div>
              <div className={styles.desc}>
                <div className={styles.descLeft}>
                    <div className={styles.descTop}>
                      취업을 위해 <span className={styles.highlight}>Next.js 기반으로 개발한 개인 웹 포트폴리오</span>입니다.
                      기획부터 디자인, 개발까지 모든 과정을 혼자 담당하며 프론트엔드 개발자로 취업하기 위한 그동안의
                      여정을 담았습니다. 
                      평소 아이디어와 영감을 얻는 <span className={styles.highlight}>codegrid 유튜브 채널</span>의 다양한 영상을 참조해
                      제 방식으로 재해석하였습니다. 
                      남들과 차별화된 포트폴리오를 만드는 것이 목표였고, 제 작업이 또 다른 누군가에게 영감을 줄 수 있기를 
                      바라는 마음으로 작업했습니다.
                      <span className={styles.highlight}>GSAP의 ScrollTrigger</span>를 적극적으로 활용해 스크롤할 때마다 다양한 애니메이션을 
                      적용함으로써, 지루하지 않게 랜딩 페이지를 구성했습니다. 
                      또한, 모든 분들이 볼 수 있게끔   <span className={styles.highlight}>모바일부터 데스크톱까지 모든 디바이스에서 최적화된 반응형 인터페이스</span>를
                      구현했습니다.
                      제 포트폴리오를 보시는 모든 분들이 재미있고 좋게 봐주시면 좋겠고 개발자가 되기 위한 제 여정과 열정을 느껴주시면 좋겠습니다.
                    </div>
                    <div className={styles.descDetail} style={{marginTop:"20px"}}>
                    <div><strong>작업 기간:</strong> 2025년 1월 ~ 2025년 2월 (2개월)</div>
                    <div><strong>팀 구성:</strong> 개인 프로젝트 (기획/디자인/개발 기여도 100%)</div>
                    <div><strong>프로젝트 핵심 기능:</strong> 
                      <ul>
                        <li>GSAP 기반 수평 스크롤 프로젝트 갤러리 구현</li>
                        <li>Three.js를 활용한 인트로 물결 효과</li>
                        <li>스크롤 기반 다양한 인터랙티브 애니메이션</li>
                        <li>모든 디바이스에 최적화된 반응형 디자인</li>
                      </ul>
                    </div>
                    <div><strong>핵심 구현 기능:</strong>
                      <ul>
                        <li>GSAP ScrollTrigger를 활용한 복합 애니메이션 시스템
                            - 수평 스크롤 섹션 구현 및 스냅 효과 적용
                            - 스크롤 위치에 따른 요소 변형 및 애니메이션 타이밍 제어</li>
                        <li>Three.js WebGL 물결 효과 구현
                            - 마우스 움직임에 반응하는 물결 셰이더 구현 </li>
                        <li>SplitType과 GSAP를 활용한 텍스트 애니메이션
                        - 문자 단위 분할 및 개별 애니메이션 적용
                        - 스크롤 연동 타이포그래피 효과</li>
                      </ul>
                    </div>
                    <div><strong>개발 환경:</strong> 
                      Frontend: Next.js, Three.js, GSAP |
                      Styling: CSS Modules |
                      Libraries: Swiper, Split-Type, React-Masonry-CSS
                    </div>
                    <div><strong>핵심 성과 및 성장 포인트:</strong>
                      자기 소개와 작업물을 체계적으로 정리한 포트폴리오를 
                      웹으로 제작함으로써 FE 개발자로서 취업시장에서 경쟁력 확보
                      - 기술적 역량을 시각적으로 증명할 수 있는 플랫폼 구축
                    </div>
                  </div>
                </div>
                <div className={styles.descRight}>
                  <div className={styles.imgBox}>
                    <div className={styles.sliderText}>
                      다양한 디바이스에 반응하는 현재 포트폴리오의 모습:)
                    </div>
                    <div className={styles.imageContainer}>
                      <div className={styles.videoOverlay}>
                        <div className={styles.linkContainer}>
                          <div><a href="https://github.com/hyeri1126/portfolio" target="_blank">GitHub ↗️</a></div>
                          <div><a href="https://hyerilog.tistory.com/" target="_blank">개발 블로그 ↗️</a></div>
                          <div><a href="https://포트폴리오URL" target="_blank">웹사이트 바로가기 ↗️</a></div>
                        </div>
                      </div>
                      <div className={styles.gifBox}>
                        <img src='/images/gif/nextportfolio.gif' className={styles.gif} />
                      </div>
                    </div>
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