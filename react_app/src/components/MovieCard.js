import React from 'react';
import { Link } from 'react-router-dom';
import { Tooltip } from 'react-bootstrap'
import { OverlayTrigger } from 'react-bootstrap'

  const MovieCard = ({ movie }) => {

  const tooltip_Bookmark = (
    <Tooltip id="tooltip_B">
        Bookmark
    </Tooltip>
  )

  return (
    <Link to={`/movies/${movie.id}/add-review`} className="movie-card-link">
      <div className="movie-card">
        <img className='card-img' src={(movie.imageBGposter)} alt={movie.title} />
        <OverlayTrigger placement="top" delay={{ show: 250, hide: 0 }} overlay={tooltip_Bookmark}>
        <div className='bookmark-film'>
            <i className='fas fa-bookmark bookmark'>
            </i>
        </div>
        </OverlayTrigger >
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
