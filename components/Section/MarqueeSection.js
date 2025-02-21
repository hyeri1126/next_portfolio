'use client';

import { useEffect } from 'react';
import styles from "./MarqueeSection.module.css";
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import SplitType from 'split-type';

const images = {
    img1: '/images/kitty1.jpg',
    img2: '/images/kitty2.jpg',
    img3: '/images/study6.jpg',
    img4: '/images/study3.jpg',
    img5: '/images/kitty7.jpg',
    img6: '/images/ican.jpg',
    img7: '/images/laptop2.jpg',
    img8: '/images/study2.jpg',
    img9: '/images/laptop5.jpg',
    img10: '/images/book.jpg',
    img11: '/images/study.jpg',
    img12: '/images/kitty5.jpg',
    img13: '/images/kitty3.jpg',
    img14: '/images/ok.jpg',
    img15: '/images/study5.jpg',
    img16: '/images/kitty10.jpg',
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

  

    return () => {
   
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