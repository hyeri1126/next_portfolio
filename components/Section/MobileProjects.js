import styles from "./MobileProjects.module.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import ImageSlider from './ImageSlider';
export default function MobileProjects(){
  const swiperCustomStyles = {
    '--swiper-pagination-color': '#64B5F6',
    '--swiper-pagination-bullet-inactive-color': 'rgba(255, 255, 255, 0.9)',
    // 네비게이션 화살표 스타일 - 주황색으로 변경
    '--swiper-navigation-color':  '#FF9800',
    '--swiper-navigation-size': '16px', // 원형 테두리 안에 맞는 사이즈로 조정
  };


  return(
    <section className={`${styles.mobileProjectsSection} ${styles.container}`}>
       <h2 className={styles.sectionTitle}>프로젝트</h2>

       <Swiper
        modules={[Pagination, Navigation]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        className={styles.projectSwiper}
        style={swiperCustomStyles}
      >
        {/* Project 1 */}
        <SwiperSlide className={styles.projectSlide}>
          <div className={styles.projectContent}>
            <div className={styles.projectHeader}>
              <span className={styles.projectNumber}>Project 1</span>
              <h3 className={styles.projectTitle}>Baas 기반 임베디드 금융 서비스, 집계사장</h3>
            </div>
            
            <div className={styles.projectDescription}>
              <span className={styles.highlight}>집계사장</span>은 자산/직원 관리와 회계 업무에 어려움을 겪는 소상공인/자영업자를 위한 <span className={styles.highlight}>비즈니스 통합 관리 플랫폼</span>입니다. 
              이 프로젝트는 소상공인에 최적화된 직관적인 UI/UX 설계, MSA 기반의 안정적인 시스템 구조, 
              그리고 BaaS 기반 금융 API의 효과적인 활용과 서비스 기획력을 인정받아 
              <span className={styles.highlight}>우리FISA 3기 최우수 프로젝트</span>로 선정되었습니다.
            </div>
            
            <div className={styles.projectMedia}>
              <iframe 
                width="100%" 
                height="100%" 
                src="https://www.youtube.com/embed/6SOK2FfAb30?autoplay=0&mute=1" 
                title="YouTube video player" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen>
              </iframe>
            </div>
            
            <div className={styles.projectLinks}>
              <a href="https://jg-sajang.vercel.app/onboarding" target="_blank" rel="noopener noreferrer">프로젝트 바로가기 ↗️</a>
              <a href="https://github.com/hyeri1126/MSA-FE" target="_blank" rel="noopener noreferrer">GitHub ↗️</a>
            </div>
            
            <div className={styles.projectDetails}>
              <div className={styles.detailItem}>
                <strong>작업 기간:</strong>
                <span>2024년 10월 ~ 12월 (2개월)</span>
              </div>
              
              <div className={styles.detailItem}>
                <strong>팀 구성:</strong>
                <span>6명 (백엔드/아키텍처/프론트엔드 리더 각 1명, 풀스택 개발자 3명)</span>
              </div>
              
              <div className={styles.detailItem}>
                <strong>기여도:</strong>
                <span>프론트엔드 팀 리드, 프론트엔드 개발 90%</span>
              </div>
              
              <div className={styles.detailItem}>
                <strong>프로젝트 핵심 기능:</strong>
                <ul>
                  <li>MSA 아키텍처 기반의 시스템 설계</li>
                  <li>BaaS 기반 금융 API를 활용한 자산관리 서비스</li>
                  <li>보안 강화를 위한 4단계 사업자 인증 시스템</li>
                </ul>
              </div>
              
              <div className={styles.detailItem}>
                <strong>주요 담당 기능:</strong>
                <ul>
                  <li>Next.js API Routes를 활용한 JWT 토큰 관리로 보안성 강화</li>
                  <li>복잡한 4단계 인증 플로우 최적화</li>
                  <li>재사용 가능한 공통 컴포넌트 설계</li>
                  <li>캘린더 기반 직원 출퇴근 관리 UI 구현 - 직관적인 조회/수정/삭제</li>
                </ul>
              </div>
              
              <div className={styles.detailItem}>
                <strong>기술 스택(Frontend):</strong>
                <span>Next.js, React, Context API, Axios, CSS Modules, Cypress</span>
              </div>
            </div>
          </div>
        </SwiperSlide>
        
        {/* Project 2 */}
        <SwiperSlide className={styles.projectSlide}>
          <div className={styles.projectContent}>
            <div className={styles.projectHeader}>
              <span className={styles.projectNumber}>Project 2</span>
              <h3 className={styles.projectTitle}>3D 인터랙티브 웹 구현</h3>
            </div>
            
            <div className={styles.projectDescription}>
              Three.js와 GSAP를 활용한 3D 인터랙티브 웹 프로젝트로,
              평소 3D 요소를 활용한 인터랙티브 웹에 대한 관심을 바탕으로, <span className={styles.highlight}>콜로소의 초이인 강의</span>를 수강하며 해당 프로젝트를 진행하였습니다. 
              강의를 통해 <span className={styles.highlight}>디자이너의 관점</span>에서 3D 모션 그래픽을 이해하고,
              <span className={styles.highlight}>개발자의 시각</span>에서 이를 웹에 구현하는 과정을 통해
              3D 인터랙티브 웹 제작에 한걸음 다가갈 수 있었습니다.
            </div>
            
            <div className={styles.projectMedia}>
              <iframe 
                width="100%" 
                height="100%" 
                src="https://www.youtube.com/embed/BDIf3z7FV9k?autoplay=0&mute=1" 
                title="YouTube video player" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen>
              </iframe>
            </div>
            
            <div className={styles.projectLinks}>
              <a href="https://hyeri1126.github.io/hyeri-s-interactive-3d-web/" target="_blank" rel="noopener noreferrer">프로젝트 바로가기 ↗️</a>
              <a href="https://github.com/hyeri1126/hyeri-s-interactive-3d-web" target="_blank" rel="noopener noreferrer">GitHub ↗️</a>
              <a href="https://hyerilog.tistory.com/156" target="_blank" rel="noopener noreferrer">개발 블로그 ↗️</a>
            </div>
            
            <div className={styles.projectDetails}>
              <div className={styles.detailItem}>
                <strong>작업 기간:</strong>
                <span>2023년 12월 ~ 2024년 2월 (3개월)</span>
              </div>
              
              <div className={styles.detailItem}>
                <strong>팀 구성:</strong>
                <span>개인 프로젝트</span>
              </div>
              
              <div className={styles.detailItem}>
                <strong>프로젝트 핵심 기능:</strong>
                <ul>
                  <li>3D 오브젝트 색상 커스터마이징 시스템 - Raycaster, Color Picker 활용</li>
                  <li>PerspectiveCamera와 OrbitControls를 활용한 3D 공간의 다양한 시점 제어</li>
                  <li>3D 파티클 배경 효과</li>
                  <li>반응형 디자인 적용</li>
                </ul>
              </div>
              
              <div className={styles.detailItem}>
                <strong>개발 환경:</strong>
                <span>Modeling: C4D | Frontend: Three.js, GSAP, JavaScript | Build: Webpack</span>
              </div>
            </div>
          </div>
        </SwiperSlide>
        
        {/* Project 3 */}
        <SwiperSlide className={styles.projectSlide}>
          <div className={styles.projectContent}>
            <div className={styles.projectHeader}>
              <span className={styles.projectNumber}>Project 3</span>
              <h3 className={styles.projectTitle}>펫시터 플랫폼, 케어기버</h3>
            </div>
            
            <div className={styles.projectDescription}>
              케어기버는 반려견을 홀로 두고 외출하기 어려운 반려인들의 고민을 해결하고자 시작된 프로젝트로, <span className={styles.highlight}>반려인들을 위한 펫시터 매칭 플랫폼</span>입니다. 
              누구나 쉽게 펫시터가 될 수 있으며 반려인은 펫시터에게 펫시팅(방문/위탁)을 맡기고 마음 편하게 외출할 수 있습니다.
              특히 사용자는 상황에 따라 반려인/펫시터 모드를 자유롭게 전환할 수 있어, 서비스 제공자와 이용자 모두가 될 수 있는 유연한 플랫폼입니다.
            </div>
            
            <div className={styles.projectMedia}>
              <div className={styles.imageSliderWrapper}>
                <ImageSlider />
              </div>
            </div>

            <div className={styles.projectLinks}>
              {/* <a href="https://hyeri1126.github.io/hyeri-s-interactive-3d-web/" target="_blank" rel="noopener noreferrer">프로젝트 바로가기 ↗️</a> */}
              {/* <a href="https://hyerilog.tistory.com/156" target="_blank" rel="noopener noreferrer">개발 블로그 ↗️</a> */}
              <a href="https://github.com/hyeri1126/CareGiver" target="_blank" rel="noopener noreferrer">GitHub ↗️</a>
            </div>
            
            <div className={styles.projectDetails}>
              <div className={styles.detailItem}>
                <strong>작업 기간:</strong>
                <span>2023년 5월 ~ 2023년 11월 (7개월)</span>
              </div>
              
              <div className={styles.detailItem}>
                <strong>팀 구성:</strong>
                <span>7명 (백엔드/프론트엔드 리더 각 1명, 백엔드 2명, 프론트엔드 2명, 디자이너 1명)</span>
              </div>
              
              <div className={styles.detailItem}>
                <strong>기여도:</strong>
                <span>프론트엔드 개발 30%</span>
              </div>
              
              <div className={styles.detailItem}>
                <strong>프로젝트 핵심 기능:</strong>
                <ul>
                  <li>MVP 아키텍처 기반 설계</li>
                  <li>사용자 모드 전환 시스템 : 한 계정으로 반려인/펫시터 역할을 자유롭게 전환</li>
                  <li>다양한 펫시팅 서비스 : 방문 펫시팅과 위탁 펫시팅 지원</li>
                  <li>예약 관리 시스템 : 실시간 예약 상태 업데이트, 예약 확정/취소/변경 지원</li>
                </ul>
              </div>
            </div>
          </div>
        </SwiperSlide>
        
        {/* Project 4 */}
        <SwiperSlide className={styles.projectSlide}>
          <div className={styles.projectContent}>
            <div className={styles.projectHeader}>
              <span className={styles.projectNumber}>Project 4</span>
              <h3 className={styles.projectTitle}>프론트엔드 개발자 포트폴리오 | 류혜리</h3>
            </div>
            
            <div className={styles.projectDescription}>
              취업을 위해 <span className={styles.highlight}>Next.js 기반으로 개발한 개인 포트폴리오 웹사이트</span>입니다.
              기획, 디자인, 개발 전 과정을 혼자 진행하며, 프론트엔드 개발자로 취업하기 위한 그동안의
              여정과 기술력을 시각적으로 보여주는데 중점을 두었습니다. 
              평소 영감을 많이 받은 <span className={styles.highlight}>codegrid 유튜브 채널의 웹 인터랙션 기법</span>들을 
              제 방식으로 재해석여, 남들과 차별화된 포트포리오를 만들어 채용 담당자에게 좋은 인상을 주기 위해 노력했습니다.
            </div>
            
            <div className={styles.projectMedia}>
              <div className={styles.gifContainer}>
                <img src='/images/gif/nextportfolio.gif' className={styles.portfolioGif} alt="포트폴리오 미리보기" />
              </div>
            </div>
            
            <div className={styles.projectLinks}>
              <a href="https://github.com/hyeri1126/next_portfolio" target="_blank" rel="noopener noreferrer">GitHub ↗️</a>
              <a href="https://next-portfolio-hyeri.vercel.app" target="_blank" rel="noopener noreferrer">웹사이트 바로가기 ↗️</a>
            </div>
            
            <div className={styles.projectDetails}>
              <div className={styles.detailItem}>
                <strong>작업 기간:</strong>
                <span>2025년 1월 ~ 2025년 2월 (2개월)</span>
              </div>
              
              <div className={styles.detailItem}>
                <strong>팀 구성:</strong>
                <span>개인 프로젝트</span>
              </div>
              
              <div className={styles.detailItem}>
                <strong>프로젝트 핵심 기능:</strong>
                <ul>
                  <li>GSAP ScrollTrigger를 활용한 인터랙션 애니메이션 구현 - 
                    수평 스크롤 프로젝트 갤러리 구현, 다양한 스크롤 연동 애니메이션</li>
                  <li>Three.js를 활용한 마우스에 반응하는 물결 효과</li>
                  <li>모든 디바이스에 최적화된 반응형 디자인</li>
                </ul>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  )
}