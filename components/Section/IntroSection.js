'use client'
import { useState, useEffect, useRef} from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './IntroSection.module.css';

gsap.registerPlugin(ScrollTrigger);

export default function IntroSection(){
    const [step, setStep] = useState(0); // 0: 초기, 1: Hyeri's 보이기, 2: STORIES 보이기
    const [showScroll, setShowScroll] = useState(false);
    const firstText = "Hyeri's";
    const secondText = ['S', 'T', ' ', 'R', 'I', 'E', 'S'];


    useEffect(() => {
        const timer1 = setTimeout(() => {
            setStep(1);
        }, 500);
  
        const timer2 = setTimeout(() => {
            setStep(2);
        }, 2500);

        const timer3 = setTimeout(() => {
            setShowScroll(true);
        }, 3500);

        // const ctx = gsap.context(() => {
        //       gsap.fromTo(
        //         `.${styles.secondContainer}`,
        //         { opacity: 0, y: 50 },
        //         {
        //             opacity: 1,
        //             y: 0,
        //             duration: 1,
        //             scrollTrigger: {
        //                 trigger: sectionRef.current,
        //                 start: "top center",
        //                 end: "+=500",
        //                 toggleActions: "play none none none",
        //                 scrub: 1,
        //                 pin: true,
        //             },
        //         }
        //     );
        // });
         
        return () => {
            clearTimeout(timer1);
            clearTimeout(timer2);
            clearTimeout(timer3);
            // ctx.revert();
        };
    }, []);

    return(
        <section className={styles.section}>
            {/* 인트로 부분 -> Hyeri's stories */}
            <div className={styles.container}>

                <h1 className={styles.title}>
                    {/* Hyeri's 애니메이션 */}
                    <div className={styles.textWrapper}>
                    {firstText.split('').map((char, index) => (
                        <span key={`first-${index}`} className={styles.letterWrapper}>
                            <span
                                className={styles.letter}
                                style={{
                                transitionDelay: `${index * 100}ms`,
                                transform: step >= 1 ? 
                                    (step === 1 ? 'translateY(0)' : 'translateY(50%)') : 
                                    'translateY(50%)',
                                opacity: step === 1 ? 1 : 0
                                }}
                            >
                                {char}
                            </span>
                        </span>
                    ))}
                    </div>

                    {/* STORIES 애니메이션 */}
                    <div className={styles.textWrapper}>
                        {secondText.map((char, index) => (
                            <span key={`second-${index}`} className={styles.letterWrapper}>
                                {char === ' ' ? (
                                   <span 
                                        style={{
                                            display: 'inline-block',
                                            transitionDelay: `${index * 100}ms`,
                                            opacity: step >= 2 ? 1 : 0,
                                        }}
                                    >
                                        <span 
                                            className={styles.customOShape}
                                            style={{
                                                transform: step >= 2 ? 'scale(1)' : 'scale(0)',
                                                transformOrigin: 'bottom left',
                                                transition: 'transform 1500ms'
                                            }}
                                        />
                                    </span>
                                ) : (
                                    <span
                                        className={styles.letter}
                                        style={{
                                            transitionDelay: `${index * 100}ms`,
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
                <p 
                    className={styles.scrollText}
                    style={{
                        opacity: showScroll ? 1 : 0,
                        transform: showScroll ? 'translateY(0)' : 'translateY(20px)',
                        transition: 'all 500ms ease-out'
                    }}
                >
                    please scroll down
                </p>
            </div>


            <div className={styles.welcomeText}>
                Your Next Frontend Developer is Here.<br />
                Step Into My World of Frontend Development,<br /> Where Creativity Meets Functionality in Harmony
            </div>

        </section>
    )
}