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
      <header className='header-add-review'>
        <div className='add-review-poster-container'>
          <img className='add-review-poster' src={movie.imageBGposter} alt={movie.title} />
        </div>
        <div className="movie-info">
          <div className='movie-info-title'>
            <h2>{movie.title}</h2>
          </div>
          <div className='movie-info-container'>
            <div className='movie-info-director'>
            Director:<p className='p-director'>{movie.director}</p>
            </div>
            <div className='movie-info-duration'>
            Screen Time:<p className='p-duration'>{movie.duration}</p>    
            </div>
            <div className='container-description'>
              <p>{movie.description}</p>
            </div>    
          </div>
          <div className="general-rating">
            <div className='general-rating-rating'>
              <label>Rating: </label>
            </div>
            <div className="stars">{renderStars(movie.rating, () => {})}</div>
          </div>
          <div className="user-rating">
            <div className='user-rating-rating'>
              <label>Your Rating: </label>
            </div>
            <div className="stars">{renderStars(userRating, handleRatingClick)}</div>
          </div>
        </div>
      </header>
      <div className="review-form">
        <textarea placeholder="Write your review..." rows="4" cols="50" className='review-writing-container'></textarea>
        <div  className='add-review-button'>
          <button>Add Review</button>
        </div>
      </div>
      <div className="other-reviews">
        <div className='other-reviews-title'>
        <h3>Other Reviews</h3>
        </div>
        <ul className='other-reviews'>
          {movie.reviews.map((review, index) => (
            <li key={index} className="review">
              <div className='review-user-content'>
                <div className='review-username'>
                  <h4>{review.username}</h4>
                </div>
                <div className='review-rating'>
                <div className="stars">
                  {renderStars(review.reviewrating, () => {})}
                </div>
                </div>
              </div>
              <div className='review-comment'>
                <p>{review.content}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AddReview;
