import React, { useEffect } from "react";
import SwiperBig from './SwiperBig';
import SwiperSmall from './SwipeSmall';
import moviesData from '../data/movies';
import MovieList from './MovieList';

const HomePage=() => {

    const category = 'Trending'

    return (
        <div>
        <SwiperBig movies={moviesData}>
        </SwiperBig>
        <SwiperSmall category={category} movies={moviesData}>
        </SwiperSmall>
        </div>
        )

}
export default HomePage;


