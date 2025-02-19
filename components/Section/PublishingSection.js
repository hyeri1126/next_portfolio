import styles from './PublishingSection.module.css';
import { useEffect } from 'react';
import Masonry from 'masonry-layout';

const PublishingSection = () => {
  useEffect(() => {
    // Masonry를 초기화하기 전에 모든 이미지가 로드되었는지 확인
    const grid = document.querySelector(`.${styles.wall}`);


    
    if (grid) {
      const masonry = new Masonry(grid, {
        itemSelector: `.${styles.wallItem}`,
        columnWidth: `.${styles.wallItem}`,
        percentPosition: true,
        gutter:20,
      });

      // 이미지 로드 후 레이아웃 재계산
      const images = grid.getElementsByTagName('img');
      let loadedImages = 0;

      function handleImageLoad() {
        loadedImages++;
        if (loadedImages === images.length) {
          masonry.layout();
        }
      }

      // 각 이미지에 로드 이벤트 리스너 추가
      Array.from(images).forEach(img => {
        if (img.complete) {
          handleImageLoad();
        } else {
          img.addEventListener('load', handleImageLoad);
        }
      });
    }
  }, []);

  return (
    <div className={styles.section}>
    
      <div className={styles.title}>Responsive Grid Layout</div>
      
      <div className={styles.wall}>
        <div className={styles.wallItem}>
          <img src="/images/projects/project1_main2.png" alt="" />
          <h2>Lorem ipsum dolor</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
        </div>

        <div className={styles.wallItem}>
          <img src="/images/marquee/hero.jpg" alt="" />
          <h2>Lorem ipsum dolor</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
        </div>

        <div className={styles.wallItem}>
          <img src="/images/projectIntro/img1.jpg" alt="" />
          <h2>Lorem ipsum dolor</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
        </div>

        <div className={styles.wallItem}>
          <img src="/images/skill/s1.jpg" alt="" />
          <h2>Lorem ipsum dolor</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
        </div>

        <div className={styles.wallItem}>
          <img src="/images/kitty1.jpg" alt="" />
          <h2>Lorem ipsum dolor</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
        </div>

        <div className={styles.wallItem}>
          <img src="/images/img3.jpeg" alt="" />
          <h2>Lorem ipsum dolor</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
        </div>

        <div className={styles.wallItem}>
          <img src="/images/img1.jpeg" alt="" />
          <h2>Lorem ipsum dolor</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
        </div>
      </div>
    </div>
  );
};

export default PublishingSection;