import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from "axios";
import  { useEffect } from "react";

const AddReview = ({ movies }) => {
  const { id } = useParams();
  const movie = movies.find(movie => movie.id === parseInt(id));
  const [userRating, setUserRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [reviewText, setReviewText] = useState('');
  const [usersName, setUsersName] = useState('');
  const userId = localStorage.getItem('userId'); // Preia ID-ul utilizatorului din localStorage
  const [reviews, setReviews] = useState([]); // State pentru recenzii

  const handleRatingClick = (rating) => {
    setUserRating(rating);
  };

  const handleMouseEnter = (rating) => {
    setHoverRating(rating);
  };

  const handleMouseLeave = () => {
    setHoverRating(0);
  };



  ////pentru a dauga reviews
  const handleAddReview = async (event) => {
    event.preventDefault();
    const reviewDate = new Date().toISOString().split('T')[0];

    const userId = localStorage.getItem('userId'); // Preluare userId din localStorage

    if (!userId) {
      alert('You need to be logged in to add a review.');
      return;
    }

    try {
      const response = await axios.post('http://localhost:8080/reviews', {
        rating: userRating,
        userId: userId,
        movieId: id,
        review: reviewText,
        reviewDate: reviewDate
      }, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      });

      if (response.status === 201) {
        alert('Review added successfully!');
      } else {
        alert(`Status: ${response.data}`);
      }
    } catch (error) {
      console.error('Error adding review:', error);
      alert('Failed to add review: ' + error.message);
    }
  };


/////pentru a afisa reviews
useEffect(() => {
  const fetchReviews = async () => {
      try {
          const response = await axios.get(`http://localhost:8080/otherReviews?movieId=${id}`, {
              headers: {
                  'Authorization': `Bearer ${localStorage.getItem('token')}`
              }
          });

          if (response.status === 200) {
              const reviewsData = response.data.reviews;
              setReviews(reviewsData); // Setează recenziile preluate

              // Pentru fiecare recenzie, obține numele utilizatorului asociat
              reviewsData.forEach(review => {
                  fetchUserInfo(review.userId);
              });
          }
      } catch (error) {
          console.error('Error fetching reviews:', error);
          alert('Failed to fetch reviews: ' + error.message);
      }
  };

  fetchReviews();
}, [id]);

// Funcția pentru a obține numele utilizatorului asociat unui ID de utilizator
const fetchUserInfo = async (userId) => {
  try {
      const userInfoResponse = await axios.get(`http://localhost:8080/userInfo?userId=${userId}`, {
          headers: {
              'Authorization': `Bearer ${localStorage.getItem('token')}`
          }
      });

      if (userInfoResponse.status === 200) {
          const userName = userInfoResponse.data; // Obține numele utilizatorului
          setUsersName(userName); // Setează numele utilizatorului în stare
      }
  } catch (error) {
      console.error('Error fetching user info:', error);
      throw new Error('Failed to fetch user info: ' + error.message);
  }
};

///////////




/////pentru rating
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
      <textarea placeholder="Write your review..." rows="4" cols="50" className='review-writing-container' value={reviewText} onChange={(e) => setReviewText(e.target.value)}></textarea>

        <div className='add-review-button'>

          <button onClick={handleAddReview}>Add Review</button>
        </div>
      </div>
      <div className="other-reviews">
        <div className='other-reviews-title'>
        <h3>Other Reviews</h3>
        </div>
        {reviews.length > 0 ? (
                <ul className='other-reviews'>
                    {reviews.map((review, index) => (
                        <li key={index} className="review">
                            <div className='review-user-content'>
                                <div className='review-username'>
                                    <h4>{index+1}</h4>
                                </div>
                                <div className='review-rating'>
                                    <div className="stars">
                                        {renderStars(review.rating)} 
                                    </div>
                                </div>
                            </div>
                            <div className='review-comment'>
                                <p>{review.review}</p> 
                            </div>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>Momentan nu sunt reviews.</p>
            )}
      </div>
    </div>
  );
};

export default AddReview;
