'use client';

import { useEffect } from 'react';
import styles from "./MarqueeSection.module.css";
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import SplitType from 'split-type';
import Lenis from '@studio-freight/lenis';

const images = {
    img1: '/images/marquee/img1.jpg',
    img2: '/images/marquee/img2.jpg',
    img3: '/images/marquee/img3.jpg',
    img4: '/images/marquee/img4.jpg',
    img5: '/images/marquee/img5.jpg',
    img6: '/images/marquee/img6.jpg',
    img7: '/images/marquee/img7.jpg',
    img8: '/images/marquee/img8.jpg',
    img9: '/images/marquee/img9.jpg',
    img10: '/images/marquee/img10.jpg',
    img11: '/images/marquee/img11.jpg',
    img12: '/images/marquee/img12.jpg',
    img13: '/images/marquee/img13.jpg',
    img14: '/images/marquee/img14.jpg',
    img15: '/images/marquee/img15.jpg',
    img16: '/images/marquee/img16.jpg',
  };

export default function MarqueeSection() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    function animateChars(chars, reverse = false) {
      const staggerOptions = {
        each: 0.35,
        from: reverse ? "start" : "end",
        ease: "linear",
      };

      gsap.fromTo(
        chars,
        { fontWeight: 100 },
        {
          fontWeight: 900,
          duration: 1,
          ease: "none",
          stagger: staggerOptions,
          scrollTrigger: {
            trigger: chars[0].closest(`.${styles.marqueeContainer}`),
            start: "50% bottom",
            end: "top top",
            scrub: true,
          },
        }
      );
    }

    const splitText = new SplitType(`.${styles.item} h1`, { types: "chars" });

    const marqueeContainers = document.querySelectorAll(`.${styles.marqueeContainer}`);

    marqueeContainers.forEach((container, index) => {
      let start = "0%";
      let end = "-15%";

      if (index % 2 === 0) {
        start = "0%";
        end = "10%";
      }

      const marquee = container.querySelector(`.${styles.marquee}`);
      const words = marquee?.querySelectorAll(`.${styles.item} h1`);

      gsap.fromTo(
        marquee,
        {
          x: start,
        },
        {
          x: end,
          scrollTrigger: {
            trigger: container,
            start: "top bottom",
            end: "150% top",
            scrub: true,
          },
        }
      );

      words?.forEach((word) => {
        const chars = Array.from(word.querySelectorAll(".char"));
        if (chars.length) {
          const reverse = index % 2 !== 0;
          animateChars(chars, reverse);
        }
      });
    });

    const lenis = new Lenis();
    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add((time) => lenis.raf(time * 1000));
    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.destroy();
      gsap.ticker.remove(lenis.raf);
    };
  }, []);

  return (
    <section className={styles.marquees}>
      <div className={styles.marqueeContainer} id="marquee-1">
        <div className={styles.marquee}>
          <div className={styles.item}><img src={images.img1} alt=""/></div>
          <div className={`${styles.item} ${styles.withText}`}><h1>Hello, I'm</h1></div>
          <div className={styles.item}><img src={images.img2} alt=""/></div>
          <div className={styles.item}><img src={images.img3} alt=""/></div>
          <div className={styles.item}><img src={images.img4} alt=""/></div>
        </div>
      </div>
      <div className={styles.marqueeContainer} id="marquee-2">
        <div className={styles.marquee}>
          <div className={styles.item}><img src={images.img5} alt=""/></div>
          <div className={styles.item}><img src={images.img6} alt=""/></div>
          <div className={styles.item}><img src={images.img7} alt=""/></div>
          <div className={`${styles.item} ${styles.withText}`}><h1>Creative</h1></div>
          <div className={styles.item}><img src={images.img8} alt=""/></div>
        </div>
      </div>
      <div className={styles.marqueeContainer} id="marquee-3">
        <div className={styles.marquee}>
          <div className={styles.item}><img src={images.img9} alt=""/></div>
          <div className={`${styles.item} ${styles.withText}`}><h1>Frontend</h1></div>
          <div className={styles.item}><img src={images.img10} alt=""/></div>
          <div className={styles.item}><img src={images.img11} alt=""/></div>
          <div className={styles.item}><img src={images.img12} alt=""/></div>
        </div>
      </div>
      <div className={styles.marqueeContainer} id="marquee-4">
        <div className={styles.marquee}>
          <div className={styles.item}><img src={images.img13} alt=""/></div>
          <div className={styles.item}><img src={images.img14} alt=""/></div>
          <div className={styles.item}><img src={images.img15} alt=""/></div>
          <div className={`${styles.item} ${styles.withText}`}><h1>Developer</h1></div>
          <div className={styles.item}><img src={images.img16} alt=""/></div>
        </div>
      </div>
    </section>
  );
}