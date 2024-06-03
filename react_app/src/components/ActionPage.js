import React, { useEffect } from "react";
import moviesData from '../data/movies';
import MovieList from './MovieList';

const ActionPage=() => {

    return (
        <div className="category-page-container">
            <div className="h2-heading category-page-title">
                Action Movies
            </div>
            <div className="category-page-content">
            <MovieList movies={moviesData} bookmark='true'>
            </MovieList>
            </div>
        </div>
        )

}
export default ActionPage;