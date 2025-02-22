'use client';
import styles from "./ContactSection.module.css";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ContactSection({ marqueeRef }){

  const sectionRef = useRef(null);


  const svgRef = useRef(null);
  const leftBlackRef = useRef(null);
  const rightBlackRef = useRef(null);
  const leftWhiteRef = useRef(null);
  const rightWhiteRef = useRef(null);

  useEffect(() => {
    const elements = document.querySelectorAll(`.${styles.text}`);
    
    elements.forEach((element) => {
      const text = element.innerText;
      element.innerHTML = "";
      
      const textContainer = document.createElement("div");
      textContainer.classList.add(styles.block);
      
      for (let letter of text) {
        const span = document.createElement("span");
        span.innerText = letter.trim() === "" ? "\xa0" : letter;
        span.classList.add(styles.letter);
        textContainer.appendChild(span);
      }
      
      element.appendChild(textContainer);
      element.appendChild(textContainer.cloneNode(true));
      element.classList.add(styles.play);
    });

    elements.forEach((element) => {
      element.addEventListener("mouseover", () => {
        element.classList.remove(styles.play);
      });
    });


    // 눈 애니메이션
    const svg = svgRef.current;
    const mouse = svg.createSVGPoint();
    let requestId = null;

    const moveEye = (point, blackEye, whiteEye, centerX, centerY) => {
      const dx = point.x - centerX;
      const dy = point.y - centerY;
      const angle = Math.atan2(dy, dx);
      const distance = Math.min(Math.sqrt(dx * dx + dy * dy), 30);
      
      gsap.to(blackEye.current, {
        x: Math.cos(angle) * distance * 0.4,
        y: Math.sin(angle) * distance * 0.4,
        duration: 0.3
      });

      gsap.to(whiteEye.current, {
        x: Math.cos(angle) * distance * 0.8,
        y: Math.sin(angle) * distance * 0.8,
        duration: 0.3
      });
    };

    const onFrame = () => {
      const point = mouse.matrixTransform(svg.getScreenCTM().inverse());
      moveEye(point, leftBlackRef, leftWhiteRef, 500, 400);
      moveEye(point, rightBlackRef, rightWhiteRef, 700, 400);
      requestId = null;
    };

    const onMouseMove = (event) => {
      mouse.x = event.clientX;
      mouse.y = event.clientY;

      if (!requestId) {
        requestId = requestAnimationFrame(onFrame);
      }
    };

    window.addEventListener("mousemove", onMouseMove);

  
    const createScrollTrigger = () =>{
      return  ScrollTrigger.create({
          id: "contactSection",
          trigger: marqueeRef.current,
          start: "top 70%",
          end: "bottom top",
          scrub: 1,
          toggleActions: "play reverse play reverse",
          animation: gsap.to(sectionRef.current, {
          y: "-20vh",
          ease: "none",
        })
      });
    }

    // createScrollTrigger의 반환값을 변수에 저장하여 재사용 가능하게함 
    let st = createScrollTrigger();

    const handleResize = () => {
        st.kill();
        st = createScrollTrigger();
    };

    window.addEventListener("resize", handleResize);
 
  
  

  },[marqueeRef]);

  return(
    <div className={styles.sectionBox}>
      <div ref={sectionRef} className={`contact-section ${styles.section}`} >
        <div className={styles.wrapper}>
          <svg 
              ref={svgRef} 
              viewBox="0 0 1200 800"
              className={styles.svg}
            >
              {/* 왼쪽 눈 */}
              <circle
                className="eye-outer"
                cx="500"
                cy="400"
                r="100"
                fill="#fff"
              />
              <circle 
                ref={leftBlackRef}
                className="eye-inner"
                cx="500" 
                cy="400" 
                r="50"
                fill="#000"
              />
              <circle 
                ref={leftWhiteRef}
                className="eye-highlight"
                cx="485"
                cy="410"
                r="5"
                fill="#fff"
              />
              
              {/* 오른쪽 눈 */}
              <circle
                className="eye-outer"
                cx="700"
                cy="400"
                r="100"
                fill="#fff"
              />
              <circle 
                ref={rightBlackRef}
                className="eye-inner"
                cx="700"
                cy="400"
                r="50"
                fill="#000"
              />
              <circle 
                ref={rightWhiteRef}
                className="eye-highlight"
                cx="685"
                cy="410"
                r="5"
                fill="#fff"
              />
            </svg>
          <div className={styles.container}>
            <a className={styles.text} href="#">Instagram</a>
            <a className={styles.text} href="#">TISTORY</a>
            <a className={styles.text} href="#">GITHUB</a>
          </div>
        </div>

        <div className={styles.footer}>
          <div className={styles.left}>
            Hyeri's Portfolio
          </div>
          <div className={styles.right}>
            Seoul, South Korea
          </div>
        </div>
      </div>
    </div>
  

  )

}


