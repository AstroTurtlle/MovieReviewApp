import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MovieList from './MovieList';
import MovieDetail from './MovieDetail';
import NavBar from './NavBar';
import moviesData from '../data/movies';
import AddReview from './AddReview';
import {LoginForm} from './LoginForm2';
import {SignUpForm} from './SignUpForm2';
import SwiperBig from './SwiperBig';
import SwiperSmall from './SwipeSmall';
import HomePage from './HomePage';
import ActionPage from './ActionPage';
import ComedyPage from './ComedyPage';
import ProfilePage from './ProfilePage';
import BookmarkPage from './BookmarkPage';
import AllMoviesPage from './AllMoviesPage';

const AppRoutes = () => {
  const [movies, setMovies] = useState(moviesData);
  const [filteredMovies, setFilteredMovies] = useState(moviesData);

  const handleSearch = (query) => {
    const results = movies.filter(movie =>
      movie.title.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredMovies(results);
  };

  const resetSearch = () => {
    setFilteredMovies(moviesData); 
  };

  return (
    <Router>
      <div className="App">
        <NavBar onSearch={handleSearch} />
        <Routes>
        {/* <Route
            path="/"
            element={<MovieList movies={filteredMovies} />}
            onClick={resetSearch}
          /> */}
          <Route path="/movies/:id" element={<MovieDetail />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/action" element={<ActionPage />} />
          <Route path="/comedy" element={<ComedyPage />} />
          <Route path="/signup" element={<SignUpForm />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/bookmark" element={<BookmarkPage />} />
          <Route path="/allmovies" element={<AllMoviesPage />} />
          <Route path="/movies/:id/add-review" element={<AddReview movies={movies} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default AppRoutes;
