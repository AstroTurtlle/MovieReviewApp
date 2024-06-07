import React from 'react';
import MovieCard from './MovieCard';

const MovieList = ({ movies, bookmark }) => {
  console.log("movie", movies);
  return (
    <div className="movie-list">
      {movies.map(movie1 => (
        <MovieCard key={movie1.movieId} movie={movie1} bookmark={bookmark}/>
      ))}
    </div>
  );
};

export default MovieList;
