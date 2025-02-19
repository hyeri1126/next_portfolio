'use client';
import Lenis from "@studio-freight/lenis";
import { useEffect } from "react";

export default function LenisWrapper({children, introComplete}) {
    console.log(introComplete)
    useEffect(() => {
        const lenis = new Lenis({
            smooth: introComplete, 
            enabled: introComplete, // 애니메이션 전까지 스크롤 완전 비활성화
            smoothTouch: introComplete,
            infinite: false,
        });

        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);
        

        return () => {
            lenis.destroy();
        };
    }, [introComplete]);
    

    return children;
}


// 'use client';
// import { useEffect } from "react";

// export default function LenisWrapper({children, introComplete}) {     
//     useEffect(() => {
//         if (!introComplete) {
//             // 스크롤 비활성화
//             document.body.style.overflow = 'hidden';
//             document.documentElement.style.overflow = 'hidden';
            
//             // 추가적인 스크롤 방지
//             const preventDefault = (e) => {
//                 e.preventDefault();
//             };

//             window.addEventListener('wheel', preventDefault, { passive: false });
//             window.addEventListener('touchmove', preventDefault, { passive: false });

//             return () => {
//                 document.body.style.overflow = 'auto';
//                 document.documentElement.style.overflow = 'auto';
//                 window.removeEventListener('wheel', preventDefault);
//                 window.removeEventListener('touchmove', preventDefault);
//             };
//         } else {
//             // 스크롤 활성화
//             document.body.style.overflow = 'auto';
//             document.documentElement.style.overflow = 'auto';
//         }
//     }, [introComplete]);

//     return children; 
// }