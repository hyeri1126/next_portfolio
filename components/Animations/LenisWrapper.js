'use client';
import Lenis from "@studio-freight/lenis";
import { useEffect } from "react";

export default function LenisWrapper({children, introComplete}) {
    useEffect(() => {
        const lenis = new Lenis({
            smooth: introComplete, 
            enabled: !introComplete, // 애니메이션 전까지 스크롤 완전 비활성화
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