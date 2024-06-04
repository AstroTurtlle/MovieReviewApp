import React, { useEffect } from "react";
import moviesData from '../data/movies';
import MovieList from './MovieList';

const ComedyPage=() => {

    return (
        <div className="category-page-container">
            <div className="category-page-title">
                Comedy Movies
            </div>
            <div className="category-page-content">
            <MovieList movies={moviesData} bookmark={true}>
            </MovieList>
            </div>
        </div>
        )

}
export default ComedyPage;