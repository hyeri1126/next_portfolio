import Masonry from "react-masonry-css";
import styles from "./PublishingSection.module.css";

export default  function PublishingSection(){

  const breakpointColumnsObj = {
    default: 3,
    1500: 3,
    1200: 2,
    500: 1
  };


  const items = [
    { img: '/images/kitty1.jpg', title: 'GeeBlock Web', desc: '처음으로 외주를 받아 작업한 퍼블리싱 작품, GeeBlock 블록체인 회사의 랜딩페이지 작업' },
    { img: '/images/gif/portfolio.gif', title:"Frontend Web Porfolio", desc: '현재 포트폴리오 이전 처음으로 제작한 웹 포트폴리오' },
    { img: '/images/gif/3dscroll.gif', title: '3D Interactive Web', desc:'스크롤에 의해 반응하는 3D 모델링(캔) 작업' },
    { img: '/images/gif/3dscroll.gif', title: '3D Interactive Web', desc:'스크롤에 의해 반응하는 3D 모델링(캔) 작업' },

  ];



  return(
    <div className={styles.sectionWrapper}>
        <div className={styles.section}>
          <header className={styles.header}>
            <div className={styles.mainText}>Publishing Projects</div>
            <div className={styles.subText}>
              코딩으로 그림 그린다는 것. <br />
              퍼블리싱 관련 작업물들을 소개합니다.
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
                <h2>{item.title}</h2>
                <p>{item.desc}</p>
              </div>
            ))}
          </Masonry>
        </div>
    </div>
  
  )
}