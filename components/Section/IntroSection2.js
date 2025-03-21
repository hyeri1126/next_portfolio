'use client'
import { useEffect, useState } from "react";
import styles from "./IntroSection2.module.css";
import gsap from "gsap";
import { CustomEase } from "gsap/dist/CustomEase";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { WaterEffect } from "../Animations/WaterEffect";

export default function IntroSection2({scrollToAbout, scrollToProjects}){
    const [isMobile, setIsMobile] = useState(false) 
    const [step, setStep] = useState(0);
   
    const firstText = "Hyeri's";
    const secondText = ['S', 'T', ' ', 'R', 'I', 'E', 'S'];

    useEffect(()=>{

      // 초기 로드 시에만 화면 크기 확인
      if (window.innerWidth < 600) {
        setIsMobile(true);
      }

      // 스크롤 비활성화
      const disableScroll = () => {
        document.body.style.overflow = "hidden";
        document.body.style.touchAction = "none"; 
      };
  
      // 스크롤 활성화
      const enableScroll = () => {
        document.body.style.overflow = "hidden";
        document.body.style.overflowY = "auto";
        document.body.style.touchAction = "auto";
      };
  
      disableScroll();

      gsap.registerPlugin(CustomEase);
      gsap.registerPlugin(ScrollTrigger);


      CustomEase.create(
        "hop",
        "M0,0 C0.29,0 0.348,0.05 0.422,0.134 0.494,0.217 0.484,0.355 0.5,0.5 0.518,0.662 0.515,0.793 0.596,0.876 0.701,0.883 0.82,0.95 1,1 "
      );

      const revealLandingPage = () => {

        const t1 = gsap.timeline();

          t1.to(`.${styles.hero}`,{
            //   clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
              clipPath: "inset(0% round 5px)",
              duration: 2,
              ease: "hop",
          })


          .to(`.${styles.overlay}`, {
              clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
              scale: 3,
              duration: 2,
              ease: "hop",
              onStart: () => {
                  setTimeout(() => {
                      setStep(1);  // Hyeri's 표시 시작
                      
                   
                      // Hyeri's 에서 각 글자가 150ms 간격으로 나타나고 여유시간을 1000ms 으로 둠. 
                      // Hyeri's 애니메이션이 시작된 후, hyeriAnimationDuration(ms) 간격 후에 STORIES 시작작
                      const hyeriAnimationDuration = firstText.length * 160 + 1000; // 예: 500ms는 기본 트랜지션 시간
                 

                      setTimeout(() => {
                          setStep(2);  // STORIES 표시

                          // STORIES가 180ms 간격으로 나타나고 여유시간 500ms 둔 후, nav가 나타나기 시작. 
                          setTimeout(() => {
                            setStep(3);

                            setTimeout(() => {

                              ScrollTrigger.create({
                                trigger: ".introSection",
                                start: "top top",
                                pin: true,
                                pinSpacing: false
                              });
                                enableScroll();
                                console.log("animation completed")
                            }, 1200);
                          
                          },  secondText.length * 180 + 500)
                      
                        }, hyeriAnimationDuration ) ;
                  }, 680);
              }
          }, "-=1.5")

      }

      revealLandingPage();

      // 예외 상황을 위한 안전장치
      // 애니메이션이 완료되기 전에 사용자가 페이지를 벗어나거나, 어떤 이유로 컴포넌트가 언마운트 되는 경우
    

      return () => {
    
      };

    }, []);


    return(
        <div className={`${styles.container} introSection`}>
            <section className={styles.hero}>

                <div id="water-effect-container" className={styles.waterEffectContainer}>
                    {isMobile ? (
                      <div
                        style={{
                          background: "url('/images/black1.jpg')",
                          backgroundSize: 'cover',
                          backgroundPosition: 'center',
                          width: '100%',
                          height: '100%',
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          zIndex: 2  
                        }}
                      >
                      </div>
                    ) : (
                      <WaterEffect 
                        containerId="water-effect-container" 
                        backgroundImage="/images/black2.jpg"  
                      />
                    )}
                 
                    <h1 className={styles.title}>
                        <div className={styles.textWrapper}>
                        {firstText.split('').map((char, index) => (
                            <span key={`first-${index}`} className={styles.letterWrapper}>
                                <span
                                    className={styles.letter}
                                    style={{
                                        transitionDelay: `${index * 160}ms`,
                                        transform: step >= 1 ? 
                                            (step === 1 ? 'translateY(0)' : 'translateY(50%)') : 
                                            'translateY(200%)',
                                        opacity: step === 1 ? 1 : 0
                                    }}
                                >
                                    {char}
                                </span>
                            </span>
                        ))}
                        </div>

                        <div className={styles.textWrapper}>
                            {secondText.map((char, index) => (
                                <span key={`second-${index}`} className={styles.letterWrapper}>
                                    {char === ' ' ? (
                                    <span 
                                            style={{
                                                display: 'inline-block',
                                                transitionDelay: `${index * 150}ms`,
                                                opacity: step >= 2 ? 1 : 0,
                                            }}
                                        >
                                            <span 
                                                className={styles.customOShape}
                                                style={{
                                                    transform: step >= 2 ? 'scale(1)' : 'scale(0)',
                                                    transformOrigin: 'bottom left',
                                                    transition: 'transform 2000ms'
                                                }}
                                            />
                                        </span>
                                    ) : (
                                        <span
                                            className={styles.letter}
                                            style={{
                                                transitionDelay: `${index * 180}ms`,
                                                transform: step >= 2 ? 'translateY(0)' : 'translateY(50%)',
                                                opacity: step >= 2 ? 1 : 0
                                            }}
                                        >
                                            {char}
                                        </span>
                                    )}
                                </span>
                            ))}
                        </div>

                    </h1>

                </div>

              
                <div className={styles.overlay}></div>


                <div
                  style={{
                    transform: step >= 3 ? 'translateY(0)' : 'translateY(200%)',
                    opacity: step >= 3 ? 1 : 0,
                    transition: 'all 1s ease',
                    transitionDelay: '0.2s'
                  }}
                  className={styles.logoTitle}
                >
                  Hyeri's Porfolio
                </div>

                <nav className={styles.nav}>
                    <div 
                      style={{
                          transform: step >= 3 ? 'translateY(0)' : 'translateY(200%)',
                          opacity: step >= 3 ? 1 : 0,
                          transition: 'all 1s ease',
                          transitionDelay: '0.2s'
                      }}
                    >
                      <button onClick={scrollToAbout}>
                        ABOUT.
                      </button>
                    </div>
                    <div 
                      style={{
                          transform: step >= 3 ? 'translateY(0)' : 'translateY(200%)',
                          opacity: step >= 3 ? 1 : 0,
                          transition: 'all 1s ease',
                          transitionDelay: '0.5s'
                      }}
                    >
                      <button onClick={scrollToProjects}>
                        PROJECTS.
                      </button>
                    </div>
                </nav>
                
                <div
                  style={{
                    transform: step >= 3 ? 'translateY(0)' : 'translateY(200%)',
                    opacity: step >= 3 ? 1 : 0,
                    transition: 'all 1s ease',
                    transitionDelay: '0.2s'  
                  }}
                  className={styles.introText}
                >
                  내일의 나는 더 나은 내가 되기 위해 성장 중인  류혜리입니다.
                  프론트엔드 개발자로 취업하기 위한 그동안의 여정과 노력을 담은 포트폴리오입니다.
                </div>



            </section>
        </div>
    )
}