'use client';
import { useEffect, useState } from "react";
import { useRef } from "react";
import IntroSection2 from "@/components/Section/IntroSection2";
import SkillSection from "@/components/Section/SkillSection";
import HorizontalSection from "@/components/Section/HorizontalSection";
import MarqueeSection from "@/components/Section/MarqueeSection";
import AboutSection from "@/components/Section/AboutSection2";
import ProjectIntroSection from "@/components/Section/ProjectIntroSection";
import PublishingSection from "@/components/Section/PublishingSection";
import MarqueeTextSection from "@/components/Section/MarqueeTextSection";
import ContactSection from "@/components/Section/ContactSecion";
import MobileProjects from "@/components/Section/MobileProjects";

export default function Home() {
  const marqueeRef = useRef(null);
  const aboutRef = useRef(null);
  const projectRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {

    if (window.innerWidth < 600) {
      setIsMobile(true);
    }

    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    window.scrollTo(0, 0);

      
    const handleResize = () => {
      setIsMobile(window.innerWidth < 600);
    };
    
    window.addEventListener('resize', handleResize);
      

    return () => {// 기본 동작 복원
      window.removeEventListener('resize', handleResize);

    };
  }, []);

  const scrollToSection = (ref) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
      <div>
        <IntroSection2  
          scrollToAbout={() => scrollToSection(aboutRef)} 
          scrollToProjects={() => scrollToSection(projectRef)} 
        />
        <div className="section-container">
          <MarqueeSection />
        </div>
        <div className="section-container" style={{backgroundColor: "#f1f1f1"}} ref={aboutRef}>
          <AboutSection />
        </div>
        <SkillSection />
        <div ref={projectRef}>
          <ProjectIntroSection />
        </div>
        {isMobile ? <MobileProjects /> : <HorizontalSection />}
        <PublishingSection />
        {!isMobile && <MarqueeTextSection ref={marqueeRef} />}
        <ContactSection marqueeRef={isMobile ? null : marqueeRef} />
      </div>
  );
}
