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
                                    html,css,javascript를 기반으로 한 웹 애플리케이션 구축부터, React와 Next.js를 활용한 대규모 SPA(Single Page Application)을 개발합니다.
                                    또한 React Native를 활용한 크로스 플랫폼 모바일 앱 개발 경험을 보유하고 있습니다. <br />
                                    모던 웹 개발의 최신 트렌드를 지속적으로 학습하고 있으며, 특히 Next.js의 SSR/SSG, API Routes 기능을 적극 활용하여
                                    성능이 최적화된 웹 서비스를 구현합니다. <br />
                                    클린 코드 작성과 컴포넌트 재사용성을 중시하며, 현대적인 개발 도구들을 활용한
                                    확장 가능하고 유지보수가 용이한 아키텍쳐를 지향합니다.
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
                                    GSAP의 고급 기능인 ScrollTrigger와 Timeline을 활용하여 복잡한 스크롤 기반 애니메이션과 부드러운 패럴랙스 효과를 구현합니다. <br />
                                    Three.js와 WebGL을 활용한 3D 웹 그래픽스 개발에 전문성을 쌓기 위해 노력하고 있으며, 
                                    커스텀 쉐이더, 3D 모델링, 카메라 컨트롤을 통해 몰입감 있는 인터랙티브 환경을 제공합니다. <br />
                                    다양한 인터랙션 라이브러리에 대한 심층적인 이해를 바탕으로, 마치 메타버스 환경에 있는 듯한
                                    웹 경험을 제공하는 것을 목표로 합니다.
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
                                    백엔드 기술에 전문적이지는 않지만, 금융 계열사의 핀테크 교육(960시간)을 통해 백엔드 개발의 기초부터 
                                    실무 활용까지 체계적으로 학습했습니다. 특히, Java와 Spring Boot 기반의 서버 개발을 
                                    경험하며, MVC 아키텍처와 객체지향 설계 원칙을 실무에 적용했습니다. <br />
                                    RESTful API 설계 및 구현 경험을 보유하고 있으며, JPA를 활용한 데이터베이스 
                                    연동, Spring Security를 통한 인증/인가 구현 등 핵심적인 백엔드 기능을 
                                    습득헀습니다. <br />
                                    뿐만 아니라, 
                                    AWS EC2, RDS와 Docker를 활용한 클라우드 네이티브 환경에서의 배포와 Jenkins를 통한 CI/CD 파이프라인 구축으로 자동화된 개발 프로세스를 
                                    경험했습니다.
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
                                  프론트엔드 리더로서 Github를 활용한 코드 리뷰와 PR 관리를 주도하며, Jira를 활용한 스프린트 관리로 
                                  프로젝트 형상관리를 효율적으로 이끈 경험이 있습니다. <br />

                                  이전 프로젝트들에서 디자인 협업 도구의 부재와 백엔드 지식 부족으로 인한 협업의 어려움을 겪었고, 
                                  이를 개선하고자 Figma 독학으로 UI/UX 디자인 시스템을 구축하고, 금융 핀테크 교육(960시간)을 통해 
                                  백엔드 실무를 학습했습니다.
                                  이를 통해 디자인-프론트엔드-백엔드 간의 원활한 협업 체계를 구축하는데 기여했습니다. <br />

                                  요구사항 분석부터 배포까지 전반적인 개발 프로세스를 이해를 바탕으로 
                                  팀 내 효율적인 협업 문화를 만드는 것이 저의 강점입니다.
                                </div>
                            </div>
                        </div>
                     
                      
                    </article>
                </div>
            </div>
        </section>
    );
}