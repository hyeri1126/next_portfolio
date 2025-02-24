'use client'
import styles from './ImageSlider.moulde.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination,} from 'swiper/modules';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function ImageSlider({images}){
  return(
    <Swiper
      modules={[Navigation, Pagination]}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      loop={true}
      className={styles.swiper}
    >
      {images.map((image, index) => (
        <SwiperSlide key={index}>
          <img src={image} alt="" className={styles.slideImage} />
        </SwiperSlide>       
      ))}
    </Swiper>
  )
}