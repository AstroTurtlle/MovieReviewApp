import React from 'react';
import { useParams } from 'react-router-dom';
import movies from '../data/movies';
import AddReview from './AddReview';
import axios from 'axios'

const MovieDetail = () => {
  const { id } = useParams();
  const movie = movies.find(movie => movie.id === parseInt(id));

  return (
    <div className="movie-detail">
      <h1>{movie.title}</h1>
      <p>{movie.duration}</p>
      <p>{movie.director}</p>
      <p>{movie.description}</p>
      <h3>Reviews</h3>
      <ul>
        {movie.reviews.map((review, index) => (
          <li key={index}>
            <strong>{review.username}</strong>: {review.content}
          </li>
        ))}
      </ul>
      <AddReview movieId={movie.id} />
    </div>
  );
};

export default MovieDetail;
