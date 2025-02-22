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
                            </div>
                            <div className={styles.info}>
                                <div className={styles.infoText}> 
                                    html,css,javascript를 활용한 바닐라 웹 환경에서부터 React와 Next.js를 활용한 동적 웹 애플리케이션을 구현합니다. 또한 React Native 
                                    환경에서 모바일 앱을 구현한 경험이 있습니다. <br />
                                    급변하는 프론트엔드 기술 트렌드를 꾸준히 학습하며, 최근에는 Next.js를 적극 활용해
                                    최신 기술을 적용한 웹 개발을 하고 있습니다. <br />
                                    유지보수가 용이하고 확장 가능한 코드를 지향합니다.
                                </div>
                            </div>
                        </div>
                       
                    </article>

                    <article className={`${styles.siteItem} ${styles.s2}`}>
                        <span className={styles.num}>2. Animation & Interaction</span>
                        <div className={styles.skillContent}>
                            <div className={styles.contentLeft}>
                                <div className={styles.logoBox2}>
                                    <div className={styles.imgBox2}>
                                        <img src="/images/skill/gsap.png" alt="HTML5 Logo" className={styles.skillLogo} />
                                    </div>
                                    <div className={styles.imgBox2} >
                                        <img src="/images/skill/threejs.png" alt="HTML5 Logo" className={styles.skillLogo} />
                                    </div>
                                    
                                </div>
                             
                            </div>
                            <div className={styles.info}>
                                <div className={styles.infoText}> 
                                   GSAP의 ScrollTrigger를 적극 활용하여 스크롤 동작에 따라 다양한 애니메이션 효과와 패럴랙스 효과를 적용합니다.
                                   사용자와 상호작용이 가능한 웹을 제작하기 위해 다양한 인터랙션 라이브러리를 면밀하고 깊게게 공부합니다. <br />
                                   특히, Three.js를 통해 3D 요소 기반의 애니메이션을 활용하여 웹 공간에서 마치 메타버스 환경에 있는 듯한
                                   몰입감 있고 생동감 넘치는 서비스를 사용자들에게 제공하는 것을 목표로 하고 있습니다. 
                                </div>
                            </div>
                        </div>
                 
                    </article>

                    <article className={`${styles.siteItem} ${styles.s3}`}>
                        <span className={styles.num}>3. Backend Development </span>
                        <div className={styles.skillContent}>
                            <div className={styles.contentLeft}>
                                <div className={styles.logoBox4}>
                                    <div className={styles.imgBox3} >
                                        <img src="/images/skill/nodejs.png" alt="HTML5 Logo" className={styles.skillLogo} />
                                    </div>
                                    <div className={styles.imgBox3}>
                                        <img src="/images/skill/docker.png" alt="HTML5 Logo" className={styles.skillLogo} />
                                    </div>
                                    <div className={styles.imgBox3}>
                                        <img src="/images/skill/springboot.png" alt="HTML5 Logo" className={styles.skillLogo} />
                                    </div>
                                    <div className={styles.imgBox3}>
                                        <img src="/images/skill/aws.png" alt="HTML5 Logo" className={styles.skillLogo} />
                                    </div>
                                </div>
                             
                            </div>
                            <div className={styles.info}>
                                <div className={styles.infoText}> 
                                    백엔드 기술에 전문적이지는 않지만, 금융 계열사의 핀테크 교육을 통해 백엔드 기술을 익힌 경험이 있습니다.
                                    6개월동안 약 960시간의 교육을 통하여 다양한 백엔드 기술을 학습할 수 있었습니다. <br />
                                    특히, Java 프로그래밍을 이해하며 이클립스 환경에서 
                                    MVC 구조를 기반으로 Spring Boot 기반 백엔드 서버를 설계하고 RESTful API를 구현한 경험이 있습니다. <br />
                                    뿐만 아니라, 클라우드 네이티브 환경인 AWS, Docker를 활용하여 프론트엔드드와 백엔드 배포를 진행한
                                    경험이 있으며, Jenkins를 통해 CI/CD 파이프라인을 구성하고 자동화된 배포 절차를 익혔습니다. 
                                </div>
                            </div>
                        </div>
                     
                    </article>

                    <article className={`${styles.siteItem} ${styles.s4}`}>
                        <span className={styles.num}>4. Communication</span>
                        <div className={styles.skillContent}>
                            <div className={styles.contentLeft}>
                                <div className={styles.logoBox3}>
                                    <div className={styles.imgBox2} >
                                        <img src="/images/skill/github.png" alt="HTML5 Logo" className={styles.skillLogo} />
                                    </div>
                                    <div className={styles.imgBox2}>
                                        <img src="/images/skill/figma.png" alt="HTML5 Logo" className={styles.skillLogo} />
                                    </div>
                                    <div className={styles.imgBox2}>
                                        <img src="/images/skill/jira.png" alt="HTML5 Logo" className={styles.skillLogo} />
                                    </div>
                                </div>
                             
                            </div>
                            <div className={styles.info}>
                                <div className={styles.infoText}> 
                                  Github와 Jira를 활용하여 프로젝트 형상관리를 효율적으로 수행합니다. 프론트엔드 리더 역할을 수행하며
                                  팀원들에게 일감을 나눠주고, PR을 검토하고 승인하며 코드 충돌을 해결하는 역할을 맡았습니다. <br />
                                  디자이너가 없는 미니 프로젝트를 여러 번 진행하면서 Figma 부재로 인함 불편함을 실감한 후, 직접 
                                  Figma를 익혀 UI/UX와 디자인 시스템을 설계하며 원활한 소통을 이끌었습니다. <br />
                                  또한, 백엔드 지식의 부족으로 개발자간의 의사소통에 어려움을 겪었던 경험을 바탕으로, 백엔드 기술을 습득하기 위해
                                  약 960 시간의 교육을 들었으며 백엔드 개발자와의 협업 능력을 향상시켰습니다. <br />
                                  이외에도 상세한 요구사항 분석을 통해 개발 프로세스의 효율성을 높이고, 시간을 절약하는 방법을 실천하며
                                  프로젝트 진행의 원활함을 추구하고 있습니다.
                                </div>
                            </div>
                        </div>
                     
                      
                    </article>
                </div>
            </div>
        </section>
    );
}