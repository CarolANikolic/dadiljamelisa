import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, A11y } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import styles from './carousel.module.css';
import ImageAndText from '../ImgText';

const Carousel = ({slides, ...props}) => {

  
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
          {props.carouselText ? (
            <>
              <p className={styles.firstText}>{slide[props.textOne]}</p>
              <p className={styles.secondText}>{slide[props.textTwo]}</p>
            </>
          ) : (
           
            <>
           
              {slides.map((slide, index) => (
                <ImageAndText key={index} desktopActive={props.desktop} {...slide}/>
              ))}
            </>
          )}
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Carousel;
