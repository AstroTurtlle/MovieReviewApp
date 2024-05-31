import React from 'react';
import { Link } from 'react-router-dom';

const MovieCard = ({ movie }) => {
  return (
    <Link to={`/movies/${movie.id}/add-review`} className="movie-card-link">
      <div className="movie-card">
        <img src={movie.imageUrl} alt={movie.title} />
        <div className="movie-card-content">
          <h2>{movie.title}</h2>
          <h3>{movie.rating.toFixed(1)} <span className="star"> &#9733; </span> </h3>
        </div>
      </div>
    </Link>
  );
};

export default MovieCard;
