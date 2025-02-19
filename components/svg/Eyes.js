'use client';
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Eyes() {
  const svgRef = useRef(null);
  const leftBlackRef = useRef(null);   // 왼쪽 검은 동그라미
  const rightBlackRef = useRef(null);  // 오른쪽 검은 동그라미
  const leftWhiteRef = useRef(null);   // 왼쪽 흰색 동그라미
  const rightWhiteRef = useRef(null);  // 오른쪽 흰색 동그라미

  useEffect(() => {
    const svg = svgRef.current;
    const mouse = svg.createSVGPoint();
    let requestId = null;

    const moveEye = (point, blackEye, whiteEye, centerX, centerY) => {
      const dx = point.x - centerX;
      const dy = point.y - centerY;
      const angle = Math.atan2(dy, dx);
      const distance = Math.min(Math.sqrt(dx * dx + dy * dy), 30);
      
      // 검은 동그라미는 덜 움직임 (강도 0.4)
      gsap.to(blackEye.current, {
        x: Math.cos(angle) * distance * 0.4,
        y: Math.sin(angle) * distance * 0.4,
        duration: 0.3
      });

      // 흰색 동그라미는 더 많이 움직임 (강도 0.8)
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

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      if (requestId) {
        cancelAnimationFrame(requestId);
      }
    };
  }, []);

  return (
    <svg 
      style={{zIndex: "10",  pointerEvents: "all"}}
      ref={svgRef} id="svg" viewBox="0 0 1200 800"
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
  );
}