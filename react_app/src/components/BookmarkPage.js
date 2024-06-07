import React, { useState, useRef, useEffect } from 'react';
import { Tooltip } from 'react-bootstrap';
import { OverlayTrigger } from 'react-bootstrap';
import moviesData from '../data/movies';
import MovieList from './MovieList';
import axios from 'axios';

const BookmarkPage = () => {

    const userId = localStorage.getItem('userId');
    const [userName, setuserName] = useState('');
    const [movieData, setmovieData] = useState('');
    const [loading, setLoading] = useState(true);
    const tooltip_Remove = (
        <Tooltip id="tooltip">
            Remove
        </Tooltip>
    )

    useEffect(() => {
        const fetchUserInfo = axios.get('http://localhost:8080/userinfo', {
            params: { userId: userId }
        });

        const fetchUserFilms = axios.get('http://localhost:8080/user/films', {
            params: { userId: userId }
        });

        Promise.all([fetchUserInfo, fetchUserFilms]).then((responses) => {
            const userInfoResponse = responses[0];
            const userFilmsResponse = responses[1];

            if (!userInfoResponse.data.error) {
                setuserName(userInfoResponse.data[0].userName);
                console.log("dataaa", userInfoResponse.data);
                console.log("userName ", userName);
            } else {
                console.log("No results found for user info");
            }

            if (!userFilmsResponse.data.error) {
                setmovieData(userFilmsResponse.data);
                console.log("data ", userFilmsResponse.data);
            } else {
                console.log("No results found for user films");
            }

            setLoading(false); // Step 2: Set loading to false after fetching data
        });
    }, []);

    if (loading) { // Step 3: Conditional rendering based on loading state
        return <div>Loading...</div>;
    }
  return (
    <>
    <div className='pagina-profil-full'>
        <div className='pagina-profil'>
            <div className='profil-header'>
                <div className='container-profil-header'>
                    <div className='ph-titlu'>Hello, {userName}</div>
                    <div className='ph-nav'>
                        <ul className='nav-bar'>
                            <li className='nav-item'>
                                <a className='nav-link' href='/profile'>
                                <i className='fas fa-user mr-2'>
                                    </i>
                                Edit Profile
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
            <MovieList movies={movieData} bookmark={true}>
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