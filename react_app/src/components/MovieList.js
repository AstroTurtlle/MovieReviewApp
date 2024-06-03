import React from 'react';
import MovieCard from './MovieCard';

const MovieList = ({ movies, bookmark }) => {
  return (
    <div className="movie-list">
      {movies.map(movie => (
        <MovieCard key={movie.id} movie={movie} bookmark={bookmark}/>
      ))}
    </div>
  );
};

export default MovieList;
