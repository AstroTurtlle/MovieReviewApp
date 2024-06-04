import React, { useRef } from 'react';
import MovieCard from './MovieCard';
import { Swiper, SwiperSlide, useSwiper} from "swiper/react";
import {Navigation} from 'swiper/modules'
import { A11y, Pagination } from 'swiper/modules';
import Card from './MovieCard'

import 'swiper/css';

const SwiperSmall = ({movies,category}) => {

    const swiperRef = useRef();

    console.log(category);

  return (

    <div className='container-swipersmall'>
        <div className='swipersmall-category'>
            <h2 className='category-text'>{category}</h2>
        </div>

        <div className='swiper-small-content'>
      <Swiper className="swiper-small"
      slidesPerView={6}
      onSwiper={(swiper) => {
        swiperRef.current = swiper;
      }}
      >
        {movies.map(movie => (
        <SwiperSlide className='swiper-slide-small'>
            <div className='swiper-slidesmall-content'>
                <div>
                <div className='swiper-slidesmall-number'>
                    <span>0{ movie.id}</span>
                </div>
                <MovieCard key={movie.id} movie={movie} bookmark={true}>
                </MovieCard>
                </div>
            </div>
        </SwiperSlide>
      ))}
      </Swiper>
      </div>
      <div className='swipersmall-navigation'>
      <div className='swipersmall-navigation-next' onClick={() => swiperRef.current.slideNext()}>
        <i className='fas fa-angle-right arrow-fix'></i>
      </div>
      <div className='swipersmall-navigation-prev' onClick={() => swiperRef.current.slidePrev()}>
        <i className='fas fa-angle-left arrow-fix'></i>
      </div>

      </div>
    </div>
    
    
  );
};

export default SwiperSmall;
