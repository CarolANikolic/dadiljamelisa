import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Carousel = ({slides, textOne, textTwo}) => {

    return (
      <Swiper
       modules={[Navigation, Pagination, A11y]}
       navigation
       pagination={{ clickable: true }}
       spaceBetween={50}
       slidesPerView={1}
       onSlideChange={() => console.log('slide change')}
       onSwiper={(swiper) => console.log(swiper)}
      >
        {slides.map((slide, index) => (
           <SwiperSlide key={index}>
             <p>{slide[textOne]}</p>
             <p>{slide[textTwo]}</p>
           </SwiperSlide>
        ))}
      </Swiper>
    );
};

export default Carousel