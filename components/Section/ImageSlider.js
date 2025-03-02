'use client'

import styles from './ImageSlider.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay} from 'swiper/modules';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function ImageSlider(){
  console.log("ImageSlider component loaded");
  const images = [
    '/images/projects/caregiver3.webp',
    '/images/projects/project3_main.png',
    '/images/projects/caregiver2.webp',
    '/images/projects/caregiver3.png',
    // Add more images as needed
  ];

  return(
    <div className={styles.swiperWrapper}>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          navigation={{
            nextEl: '.custom-swiper-button-next',
            prevEl: '.custom-swiper-button-prev',
          }}
          pagination={{ 
            clickable: true 
          }}
          loop={true}
          className={styles.swiper}
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <div className={styles.slideImageContainer}>
                <img src={image} alt="" className={styles.img} />
              </div>
            </SwiperSlide>       
          ))}
        </Swiper>
        {/* 커스텀 네비게이션 버튼 */}
        <button className={`custom-swiper-button-prev ${styles.customSwiperButtonPrev}`}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 19L8 12L15 5" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <button className={`custom-swiper-button-next ${styles.customSwiperButtonNext}`}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 5L16 12L9 19" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

        
    </div>
  
  )
}