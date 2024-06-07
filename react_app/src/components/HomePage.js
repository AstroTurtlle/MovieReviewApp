import React, { useEffect, useState } from "react";
import SwiperBig from './SwiperBig';
import SwiperSmall from './SwipeSmall';
import moviesData from '../data/movies';
import MovieList from './MovieList';
import { Link} from 'react-router-dom';
import axios from 'axios';

const HomePage=() => {
    const more_movies_amount = 15;
    const more_movies_displaying = moviesData.slice(0,more_movies_amount)
    const category = 'Trending'
    const [movieData, setmovieData] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchUserFilms = axios.get('http://localhost:8080/allfilms');

        Promise.all([fetchUserFilms]).then((response) => {
            const userFilmsResponse = response[0];

            if (!userFilmsResponse.data.error) {
                setmovieData(userFilmsResponse.data);
                console.log("data ", userFilmsResponse.data);
            } else {
                console.log("No results found for user films");
            }

            setLoading(false);
        });
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
        <SwiperBig movies={moviesData}>
        </SwiperBig>
        <SwiperSmall category={category} movies={movieData}>
        </SwiperSmall>
            <div className="More_Movies"> 
                <h1 className="More_Movies_left_aligned">More Movies</h1>
                <div className="Movie_list_More_Movies">
                    <MovieList movies={movieData}  bookmark={false}>
                    </MovieList>
                </div>
                <div className="link_All_Movies">
                    <Link to="/allmovies" className="link_all_movies_design" style={{ textDecoration: "none", color:'#ffffff' }}>All Movies</Link>
                </div>
            </div>
        </div>
        )

}
export default HomePage;


