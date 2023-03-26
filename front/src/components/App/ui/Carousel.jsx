import React from 'react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import ninos1 from '../../../assets/ninos1.jpg';
import ninos2 from '../../../assets/ninos2.jpg';

export const Carousel = () => {
    return (
        <Swiper
            modules={[Pagination]}
            
            breakpoints={{
                // when window width is >= 640px
               
                640: {
                    width: 640,
                    slidesPerView: 1,
                },
                // when window width is >= 768px
                768: {
                    width: 768,
                    slidesPerView: 2,
                },
            }}
            spaceBetween={30}
            slidesPerView={4}
            pagination={{ clickable: true }}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
        >
            <SwiperSlide>
                <img className='img' src={ninos1} alt="image" />
            </SwiperSlide>
            <SwiperSlide>
                <img className='img' src={ninos2} alt="image" />
            </SwiperSlide>
            <SwiperSlide>
                <img className='img' src={ninos1} alt="image" />
            </SwiperSlide>
            <SwiperSlide>
                <img className='img' src={ninos2} alt="image" />
            </SwiperSlide>
            <SwiperSlide>
                <img className='img' src={ninos1} alt="image" />
            </SwiperSlide>
            <SwiperSlide>
                <img className='img' src={ninos2} alt="image" />
            </SwiperSlide>
            <SwiperSlide>
                <img className='img' src={ninos1} alt="image" />
            </SwiperSlide>
            <SwiperSlide>
                <img className='img' src={ninos2} alt="image" />
            </SwiperSlide>
        </Swiper>
    )
}

