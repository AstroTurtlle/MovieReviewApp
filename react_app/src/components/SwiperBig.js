import React, { useRef } from 'react';
import MovieCard from './MovieCard';
import { Swiper, SwiperSlide, useSwiper} from "swiper/react";
import {Navigation} from 'swiper/modules'
import { A11y, Pagination} from 'swiper/modules';
import moviesData from '../data/movies';
import { Link } from 'react-router-dom';

import { Autoplay} from 'swiper/modules';

import 'swiper/css/bundle';
import 'swiper/css/autoplay'


const SwiperBig = ({movies}) => {

    const swiperRef = useRef();

  return (

    <div className='container-swiperbig'>
      <Swiper className="swiper-big"
      slidesPerView={1}
      loop = {true}
      modules={[Autoplay]}
      autoplay={true}
      onSwiper={(swiper) => {
        swiperRef.current = swiper;
      }}
      >
        {movies.map(movie => (
          <SwiperSlide className='swiper-slide-big'>
          <div className='swiper-slidebig-img1'>
          <img className='swiper-slidebig-img2' src={movie.imageBGbanner}></img>
          </div>
          <div className='swiper-slidebig-content'>
                  <div className='swiper-slidebig-spotlight'>#{movie.movieId} Spotlight</div>
                  <div className='swiper-slidebig-title'>{movie.title}</div>
                  <div className='swiper-slidebig-details'>
                      <div className='swiper-slidebig-details-container'>
                          <i className='fas fa-star mr-1 star'></i>
                          {movie.rating}
                      </div>
                      <div className='swiper-slidebig-details-container'>
                        <i className='fas fa-film mr-1'></i>
                          {movie.director}
                      </div>
                      <div className='swiper-slidebig-details-container'>
                          <i className='fas fa-calendar mr-1'></i>
                          {movie.releaseDate.split('T')[0]}
                      </div>
                  </div>
                  <div className='swiper-slidebig-description'>
                    {movie.movieDescription}             
                  </div>
                  <Link to={`/movies/${movie.movieId}/add-review`} className="movie-card-link">
                  <div className='swiper-slidebig-button'>
                      Details
                      <i className='fas fa-angle-right ml-2'></i>
                  </div>
                  </Link>
              </div>
      </SwiperSlide>
      ))}
      </Swiper>
      <div className='swiperbig-navigation'>
      <div className='swiperbig-navigation-next' onClick={() => swiperRef.current.slideNext()}>
        <i className='fas fa-angle-right'></i>
      </div>
      <div className='swiperbig-navigation-prev' onClick={() => swiperRef.current.slidePrev()}>
        <i className='fas fa-angle-left'></i>
      </div>

      </div>
    </div>
    
    
  );
};

export default SwiperBig;
