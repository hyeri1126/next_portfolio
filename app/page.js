'use client';
import { useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import IntroSection2 from "@/components/Section/IntroSection2";
import SkillSection from "@/components/Section/SkillSection";
import HorizontalSection from "@/components/Section/HorizontalSection";
import MarqueeSection from "@/components/Section/MarqueeSection";
import AboutSection from "@/components/Section/AboutSection2";
import ProjectIntroSection from "@/components/Section/ProjectIntroSection";
import HorizontalSection2 from "@/components/Section/HorizontalSection2";
import PublishingSection from "@/components/Section/PublishingSection";
import LenisWrapper from "@/components/Animations/LenisWrapper";

export default function Home() {
  const [introComplete, setIntroComplete] = useState(false);
  

  return (
    <LenisWrapper introComplete={introComplete}>
      <div >
        <IntroSection2 onAnimationComplete={() => setIntroComplete(true)} />
        <MarqueeSection />
        <AboutSection />
        <SkillSection />
        <ProjectIntroSection />
        <HorizontalSection2 />
        <PublishingSection />
        {/* {introComplete && (
          <div style={{ position: 'relative' }}> 
            <MarqueeSection />
            <AboutSection />
            <SkillSection />
            <ProjectIntroSection />
            <HorizontalSection2 />
            <PublishingSection />
          </div>
      
        )} */}
      </div>
    </LenisWrapper>
  );
}
