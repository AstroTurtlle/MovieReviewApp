import React from 'react';
import './Style.css';

const MovieCard = ({ movie}) => {
    return (
        <div className="movie-card">
            <center>
            <img src={movie.poster} alt="" style={{ height: '200px', width: '200px' }}/>
            </center>
            <div>
                <h3 className="title" >{movie.title}</h3>
                <p>{movie.rating}</p>
            </div>
           
        </div>
    );
};

export default MovieCard;