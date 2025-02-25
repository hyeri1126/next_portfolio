import Masonry from "react-masonry-css";
import styles from "./PublishingSection.module.css";

export default  function PublishingSection(){

  const breakpointColumnsObj = {
    default: 3,
    1100: 3,
    700: 2,
    500: 1
  };


  const items = [
    { img: '/images/kitty1.jpg' },
    { img: '/images/kitty1.jpg' },
    { img: '/images/marquee/hero.jpg' },
    { img: '/images/kitty1.jpg' },
    { img: '/images/skill/' },
    { img: '/images/eyes.jpg' },
    { img: '/images/black2.jpg' },
    { img: '/images/book.jpg' },
    { img: '/images/marquee/hero.jpg' },
    { img: '/images/graybackground.jpg' },
    { img: '/images/laptop2.jpg' },
    { img: '/images/laptop5.jpg' },
  ];



  return(
    <div className={styles.sectionWrapper}>
        <div className={styles.section}>
          <header className={styles.header}>
            <div className={styles.mainText}>Publishing Projects</div>
            <div className={styles.subText}>
              코딩으로 그림 그린다는 것. <br />
              지금까지 작업한 프로젝트들을 소개합니다. 
            </div>
          </header>

          <Masonry
            breakpointCols={breakpointColumnsObj}
            className={styles.wall}
            columnClassName = {styles.wallColumn}
          >
            {items.map((item,index) =>(
              <div key={index} className={styles.wallItem}>
                <img src={item.img}  alt="" />
                <h2>Lorem ipsum dolor</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
              </div>
            ))}
          </Masonry>
        </div>
    </div>
  
  )
}