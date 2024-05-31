import React, { useState } from 'react';
import { useParams } from 'react-router-dom';


const AddReview = ({ movies }) => {
  const { id } = useParams();
  const movie = movies.find(movie => movie.id === parseInt(id));
  const [userRating, setUserRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);

  const handleRatingClick = (rating) => {
    setUserRating(rating);
  };

  const handleMouseEnter = (rating) => {
    setHoverRating(rating);
  };

  const handleMouseLeave = () => {
    setHoverRating(0);
  };

  const renderStars = (rating, setRating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      const fillPercentage = Math.min(Math.max(rating - (i - 1), 0), 1) * 100;
      stars.push(
        <span
          key={i}
          className="star"
          onClick={() => setRating(i)}
          onMouseEnter={() => handleMouseEnter(i)}
          onMouseLeave={handleMouseLeave}
        >
          <span className="star-fill" style={{ width: `${fillPercentage}%` }}>&#9733;</span>
          <span className="star-background">&#9733;</span>
        </span>
      );
    }
    return stars;
  };

  return (
    <div className="add-review">
      <header>
        <img src={movie.imageUrl} alt={movie.title} />
        <div className="movie-info">
          <h2>{movie.title}</h2>
          <p> Director: {movie.director}</p>
          <p> Screen Time: {movie.duration}</p>        
          <p>{movie.description}</p>
          <div className="general-rating">
            <label>Rating: </label>
            <div className="stars">{renderStars(movie.rating, () => {})}</div>
          </div>
          <div className="user-rating">
            <label>Your Rating: </label>
            <div className="stars">{renderStars(userRating, handleRatingClick)}</div>
          </div>
        </div>
      </header>
      <div className="review-form">
        <textarea placeholder="Write your review..." rows="4" cols="50"></textarea>
        <button>Add Review</button>
      </div>
      <div className="other-reviews">
        <h3>Other Reviews</h3>
        <ul>
          {movie.reviews.map((review, index) => (
            <li key={index} className="review">
              <h4>{review.username}</h4>
              <p>{review.content}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AddReview;
