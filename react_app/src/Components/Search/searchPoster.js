import React from "react";

const MoviePoster = ({ title, year, poster }) => {
    return (
        <div>
            <img src={poster}/>
            <h1>{title}</h1>
            <p>{year}</p>
        </div>
    );
};

export default MoviePoster;