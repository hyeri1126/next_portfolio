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
                            <img src="path/to/html5-logo.png" alt="HTML5 Logo" className={styles.skillLogo} />
                            <img src="path/to/css3-logo.png" alt="CSS3 Logo" className={styles.skillLogo} />
                            <img src="path/to/react-logo.png" alt="React Logo" className={styles.skillLogo} />
                            <p className={styles.skillDescription}>
                                웹 표준과 접근성을 준수한 UI/UX 디자인 및 개발. 최신 프론트엔드 기술을 활용하여 반응형 웹사이트 제작.
                            </p>
                        </div>
                        <div className={styles.info}>
                            <span>사용 기술: HTML5, CSS3, JavaScript, React.js, Tailwind CSS</span>
                        </div>
                    </article>
                    <article className={`${styles.siteItem} ${styles.s2}`}>
                        <span className={styles.num}>2. Animation & Interaction</span>
                        <div className={styles.text}>
                            <div>Make</div>
                            <div>site compliant with</div>
                            <div>react.js</div>
                        </div>
                        <h3 className={styles.title}>리액트를 이용한 사이트 제작</h3>
                        <div className={styles.btn}>
                            <a href="https://github.com/webstoryboy/port2023-react">code</a>
                            <a href="https://port2023-react.netlify.app/">view</a>
                        </div>
                        <div className={styles.info}>
                            <span>site coding</span>
                            <span>production period : two days</span>
                            <span>use stack : HTML5/CSS3, CSS Variable, Vite</span>
                        </div>
                    </article>
                    <article className={`${styles.siteItem} ${styles.s3}`}>
                        <span className={styles.num}>3. Web Backend Development </span>
                        <div className={styles.text}>
                            <div>Make</div>
                            <div>site compliant with</div>
                            <div>vue.js</div>
                        </div>
                        <h3 className={styles.title}>뷰를 이용한 사이트 제작</h3>
                        <div className={styles.btn}>
                            <a href="https://github.com/webstoryboy/port2023-vue">code</a>
                            <a href="https://port2023-vue.netlify.app/">view</a>
                        </div>
                        <div className={styles.info}>
                            <span>site coding</span>
                            <span>production period : two days</span>
                            <span>use stack : vue.js, CSS Variable, vite</span>
                        </div>
                    </article>
                    <article className={`${styles.siteItem} ${styles.s4}`}>
                        <span className={styles.num}>4. Communication</span>
                        <div className={styles.text}>
                            <div>Make</div>
                            <div>site compliant with</div>
                            <div>next.js</div>
                        </div>
                        <h3 className={styles.title}>넥스트를 이용한 사이트 제작</h3>
                        <div className={styles.btn}>
                            <a href="https://github.com/webstoryboy/port2023-next">code</a>
                            <a href="https://port2023-next.netlify.app/">view</a>
                        </div>
                        <div className={styles.info}>
                            <span>site coding</span>
                            <span>production period : two days</span>
                            <span>use stack : next.js, CSS Variable, Vite</span>
                        </div>
                    </article>
                </div>
            </div>
        </section>
    );
}