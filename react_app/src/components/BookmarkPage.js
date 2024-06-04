import React, { useState, useRef } from 'react';
import { Tooltip } from 'react-bootstrap';
import { OverlayTrigger } from 'react-bootstrap';
import moviesData from '../data/movies';
import MovieList from './MovieList';

const BookmarkPage = () => {
    const tooltip_Remove = (
        <Tooltip id="tooltip">
            Remove
        </Tooltip>
    )

  return (
    <>
    <div className='pagina-profil-full'>
        <div className='pagina-profil'>
            <div className='profil-header'>
                <div className='container-profil-header'>
                    <div className='ph-titlu'>Hello, Drwpa</div>
                    <div className='ph-nav'>
                        <ul className='nav-bar'>
                            <li className='nav-item'>
                                <a className='nav-link' href='/profile'>
                                <i className='fas fa-user mr-2'>
                                    </i>
                                Profile
                                </a>
                            </li>
                            <li className='nav-item'>
                                <a className='nav-link-active' href='/bookmark'>
                                <i className='fas fa-bookmark mr-2'>
                                    </i>
                                Bookmarks
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='bookmark-content'>
                <div className='bookmark-container'>
                        <div className='bookmark-header'>
                            <h2 className='h2-heading profile-title'>
                                <i className='fas fa-bookmark mr-3'></i>
                                Bookmarked movies
                            </h2>
                        </div>
                        <div className="category-page-container">
            <div className="category-page-content">
            <MovieList movies={moviesData} bookmark={false}>
            </MovieList>
            </div>
        </div>
                </div>
            </div>
        </div>
    </div>
    </>
  );
}
export default BookmarkPage