import React, { useEffect } from "react";
import moviesData from '../data/movies';
import MovieList from './MovieList';

const ActionPage=() => {

    return (
        <div className="category-page-container">
            <div className="category-page-title">
                Action Movies
            </div>
            <div className="category-page-content">
            <MovieList movies={moviesData}>
            </MovieList>
            </div>
        </div>
        )

}
export default ActionPage;