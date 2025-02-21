import styles from './SkillSection.module.css';

export default function SkillSection() {
    return (
        <section id="site">
            <div className={styles.siteInner}>
                <h2 className={styles.siteTitle}>
                    What I can do? 
                </h2>
                <div className={styles.siteWrap}>
                    <article className={`${styles.siteItem} ${styles.s1}`}>
                        <span className={styles.num}>1. Web Front Development</span>
                        <div className={styles.skillContent}>
                            <div className={styles.contentLeft}>
                                <div className={styles.logoBox}>
                                    <div className={styles.imgBox}>
                                        <img src="/images/skill/html.svg" alt="HTML5 Logo" className={styles.skillLogo} />
                                    </div>
                                    <div className={styles.imgBox}>
                                        <img src="/images/skill/css.png" alt="HTML5 Logo" className={styles.skillLogo} />
                                    </div>
                                    <div className={styles.imgBox}>
                                        <img src="/images/skill/javascript.png" alt="HTML5 Logo" className={styles.skillLogo} />
                                    </div>
                                    <div className={styles.imgBox}>
                                        <img src="/images/skill/react.png" alt="HTML5 Logo" className={styles.skillLogo} />
                                    </div>
                                    <div className={styles.imgBox}>
                                        <img src="/images/skill/reactnative.png" alt="HTML5 Logo" className={styles.skillLogo} />
                                    </div>
                                    <div  >
                                        <img src="/images/skill/images.jpeg" alt="HTML5 Logo" className={styles.skillLogo} style={{borderRadius: "10px", overflow:"hidden"}} />
                                    </div>
                                    
                                </div>
                                {/* <div >
                                    <p className={styles.skillDescription}>
                                        사용 기술: HTML5, CSS3, JavaScript, React.js, Tailwind CSS
                                    </p>
                                </div> */}
                            </div>
                            <div className={styles.info}>
                                <div className={styles.infoText}> 
                                    웹 표준과 최신 프론트엔드 기술을 활용하여 직관적이고 반응형 UI를 설계 및 구현합니다. 
                                    HTML5, CSS3, JavaScript와 같은 기본 기술뿐만 아니라 React.js와 Tailwind CSS를 활용하여 사용자 경험을 
                                    극대화한 모던 웹 애플리케이션을 제작합니다. 유지보수가 용이하고 확장 가능한 코드를 작성하며, 
                                    SEO와 퍼포먼스를 고려한 최적화된 개발을 지향합니다.
                                </div>
                            </div>
                        </div>
                       
                    </article>
                    <article className={`${styles.siteItem} ${styles.s2}`}>
                        <span className={styles.num}>2. Animation & Interaction</span>
                        <div className={styles.skillContent}>
                            <div className={styles.contentLeft}>
                                <div className={styles.logoBox2}>
                                    <div style={{width:"380px", height:"200px"}} >
                                        <img src="/images/skill/threejs.png" alt="HTML5 Logo" className={styles.skillLogo} />
                                    </div>
                                    <div style={{width:"380px", height:"200px"}}>
                                        <img src="/images/skill/gsap.png" alt="HTML5 Logo" className={styles.skillLogo} />
                                    </div>
                                    
                                </div>
                             
                            </div>
                            <div className={styles.info}>
                                <div className={styles.infoText}> 
                                    웹 표준과 최신 프론트엔드 기술을 활용하여 직관적이고 반응형 UI를 설계 및 구현합니다. 
                                    HTML5, CSS3, JavaScript와 같은 기본 기술뿐만 아니라 React.js와 Tailwind CSS를 활용하여 사용자 경험을 
                                    극대화한 모던 웹 애플리케이션을 제작합니다. 유지보수가 용이하고 확장 가능한 코드를 작성하며, 
                                    SEO와 퍼포먼스를 고려한 최적화된 개발을 지향합니다.
                                </div>
                            </div>
                        </div>
                 
                    </article>
                    <article className={`${styles.siteItem} ${styles.s3}`}>
                        <span className={styles.num}>3. Web Backend Development </span>
                        <div className={styles.skillContent}>
                            <div className={styles.contentLeft}>
                                <div className={styles.logoBox2}>
                                    <div style={{width:"380px", height:"200px"}} >
                                        <img src="/images/skill/nodejs.png" alt="HTML5 Logo" className={styles.skillLogo} />
                                    </div>
                                    <div style={{width:"380px", height:"200px"}}>
                                        <img src="/images/skill/docker.png" alt="HTML5 Logo" className={styles.skillLogo} />
                                    </div>
                                    
                                </div>
                             
                            </div>
                            <div className={styles.info}>
                                <div className={styles.infoText}> 
                                    웹 표준과 최신 프론트엔드 기술을 활용하여 직관적이고 반응형 UI를 설계 및 구현합니다. 
                                    HTML5, CSS3, JavaScript와 같은 기본 기술뿐만 아니라 React.js와 Tailwind CSS를 활용하여 사용자 경험을 
                                    극대화한 모던 웹 애플리케이션을 제작합니다. 유지보수가 용이하고 확장 가능한 코드를 작성하며, 
                                    SEO와 퍼포먼스를 고려한 최적화된 개발을 지향합니다.
                                </div>
                            </div>
                        </div>
                     
                    </article>
                    <article className={`${styles.siteItem} ${styles.s4}`}>
                        <span className={styles.num}>4. Communication</span>
                        <div className={styles.skillContent}>
                            <div className={styles.contentLeft}>
                                <div className={styles.logoBox3}>
                                    <div style={{width:"380px", height:"200px"}} >
                                        <img src="/images/skill/github.png" alt="HTML5 Logo" className={styles.skillLogo} />
                                    </div>
                                    <div style={{width:"380px", height:"200px"}}>
                                        <img src="/images/skill/figma.png" alt="HTML5 Logo" className={styles.skillLogo} />
                                    </div>
                                    <div style={{width:"380px", height:"200px"}}>
                                        <img src="/images/skill/jira.png" alt="HTML5 Logo" className={styles.skillLogo} />
                                    </div>
                                    
                                </div>
                             
                            </div>
                            <div className={styles.info}>
                                <div className={styles.infoText}> 
                                    웹 표준과 최신 프론트엔드 기술을 활용하여 직관적이고 반응형 UI를 설계 및 구현합니다. 
                                    HTML5, CSS3, JavaScript와 같은 기본 기술뿐만 아니라 React.js와 Tailwind CSS를 활용하여 사용자 경험을 
                                    극대화한 모던 웹 애플리케이션을 제작합니다. 유지보수가 용이하고 확장 가능한 코드를 작성하며, 
                                    SEO와 퍼포먼스를 고려한 최적화된 개발을 지향합니다.
                                </div>
                            </div>
                        </div>
                     
                      
                    </article>
                </div>
            </div>
        </section>
    );
}