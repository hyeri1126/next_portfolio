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
    '/images/projects/project3_main.png',
    '/images/projects/caregiver3.webp',
    '/images/projects/caregiver2.webp',
    '/images/projects/caregiver3.png',
    // Add more images as needed
  ];

  return(
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={30}
      slidesPerView={1}
      navigation
      pagination={{ 
        clickable: true 
       
      }}
      loop={true}
      className={styles.swiper}
    >
      {images.map((image, index) => (
        <SwiperSlide key={index}>
          <img src={image} alt="" className={styles.img} />
        </SwiperSlide>       
      ))}
    </Swiper>
  )
}