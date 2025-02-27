'use client';
import { useEffect, useState } from "react";
import { useRef } from "react";
import IntroSection2 from "@/components/Section/IntroSection2";
import SkillSection from "@/components/Section/SkillSection";
import HorizontalSection from "@/components/Section/HorizontalSection";
// import HorizontalSection from "@/components/Section/HorizontalSection2";
import MarqueeSection from "@/components/Section/MarqueeSection";
import AboutSection from "@/components/Section/AboutSection2";
import ProjectIntroSection from "@/components/Section/ProjectIntroSection";
import PublishingSection from "@/components/Section/PublishingSection";
import MarqueeTextSection from "@/components/Section/MarqueeTextSection";
import ContactSection from "@/components/Section/ContactSecion";

export default function Home() {
  const marqueeRef = useRef(null);

  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    window.scrollTo(0, 0);

    return () => {
      window.history.scrollRestoration = "auto"; // 기본 동작 복원
    };
  }, []);

  return (
      <div>
        <IntroSection2  />
        <div className="section-container">
          <MarqueeSection />
        </div>
        <div className="section-container" style={{backgroundColor: "#f1f1f1"}}>
          <AboutSection />
        </div>
        <SkillSection />
        <ProjectIntroSection />
        {/* <HorizontalSection /> */}
        <HorizontalSection />
        <PublishingSection />
        <MarqueeTextSection  ref={marqueeRef}/>
        <ContactSection  marqueeRef={marqueeRef} />
      </div>
  );
}
