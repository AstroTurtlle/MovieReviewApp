import React from "react";
import './searchPoster.css';

const MoviePoster = ({ title, year, poster }) => {
    return (
        <div className="wrapper">
            <img src={poster} alt="" style={{ height: '175px', width: '130px' }}/>
            <div style={{ marginLeft: '20px', color: "white" }}>
                <h3 className="title" >{title}</h3>
                <p>{year}</p>
            </div>
        </div>
    );
};

export default MoviePoster;