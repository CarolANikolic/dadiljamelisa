import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, A11y } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import styles from './carousel.module.css';

const Carousel = ({slides, textOne, textTwo}) => {

    return (
      <Swiper
       className={styles.swiperContainer}
       modules={[Pagination, A11y]}
       pagination={{ clickable: true }}
       spaceBetween={50}
       slidesPerView={1}
      >
        {slides.map((slide, index) => (
           <SwiperSlide key={index} className={styles.slideContainer}>
             <p className={styles.firstText}>{slide[textOne]}</p>
             <p className={styles.secondText}>{slide[textTwo]}</p>
           </SwiperSlide>
        ))}
      </Swiper>
    );
};

export default Carousel