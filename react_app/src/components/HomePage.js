import React, { useEffect } from "react";
import SwiperBig from './SwiperBig';
import SwiperSmall from './SwipeSmall';
import moviesData from '../data/movies';
import MovieList from './MovieList';
import { Link} from 'react-router-dom';

const HomePage=() => {
    const more_movies_amount = 15;
    const more_movies_displaying = moviesData.slice(0,more_movies_amount)
    const category = 'Trending'

    return (
        <div>
        <SwiperBig movies={moviesData}>
        </SwiperBig>
        <SwiperSmall category={category} movies={moviesData}>
        </SwiperSmall>
            <div className="More_Movies"> 
                <h1 className="More_Movies_left_aligned">More Movies</h1>
                <div className="Movie_list_More_Movies">
                    <MovieList movies={more_movies_displaying}  bookmark={true}>
                    </MovieList>
                </div>
                <div className="link_All_Movies">
                    <Link to="/allmovies" className="link_all_movies_design">All Movies</Link>
                </div>
            </div>
        </div>
        )

}
export default HomePage;


