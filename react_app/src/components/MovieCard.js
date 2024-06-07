import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Tooltip } from 'react-bootstrap'
import { OverlayTrigger } from 'react-bootstrap'
import axios from 'axios';

  const MovieCard = ({ movie, bookmark }) => {
  const userId = localStorage.userId;
  
  const handleBookmark = async () => {
    try {
      const response = await axios.post('http://localhost:8080/user/addfilm', {
        userId: userId,
        movieId: movie.id
      });
      if (response.status === 201) {
        console.log('Film added to user\'s list successfully');
        //setIsBookmarked(true); // Update the state to reflect the bookmark
      } else {
        console.log('Failed to add film to user\'s list');
      }
    } catch (error) {
      console.error('Error adding film to user\'s list:', error);
    }
  };

  const handleRemoveBookmark = async () => {
    try {
      const response = await axios.delete(`http://localhost:8080/user/films/${userId}/${movie.movieId}`);
      if (response.status === 200) {
        console.log('Film removed from user\'s list successfully');
      } else {
        console.log('Failed to remove film from user\'s list');
      }
    } catch (error) {
      console.error('Error removing film from user\'s list:', error);
    }
  };
  
  const tooltip_Bookmark = (
    <Tooltip id="tooltip_B">
        Bookmark
    </Tooltip>
  )

  const tooltip_Remove = (
    <Tooltip id="tooltip_R">
        Remove
    </Tooltip>
  )


  return (
    <Link to={`/movies/${movie.movieId}/add-review`} className="movie-card-link">
    <div className="movie-card">
      <OverlayTrigger placement="top" delay={{ show: 250, hide: 0 }} overlay={bookmark ? tooltip_Remove : tooltip_Bookmark}>
        <div className='bookmark-film' onClick={bookmark ? handleRemoveBookmark : handleBookmark}>
          <i className='fas fa-bookmark bookmark' style={{ display: bookmark ? 'none' : '' }}></i>
          <i className='fas fa-times bookmark' style={{ display: bookmark ? '' : 'none' }}></i>
        </div>
      </OverlayTrigger>
        <img className='card-img' src={movie.imageBGposter} alt={movie.title} />
        <div className='rating-box'>
          <i className='fas fa-star mr-1 star'></i>
          {movie.rating.toFixed(1)}
        </div>
        <div className="movie-card-content">
          <h2 className='card-title'>{movie.title}</h2>
        </div>
      </div>
    </Link>
  );
};

export default MovieCard;
