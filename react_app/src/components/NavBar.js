import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const NavBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  const handleHomeClick = () => {
    setQuery('');
    onSearch('');
    navigate('/');
  };



  return (
    <nav className="navbar">
      <Link to="/" onClick={handleHomeClick}>Home</Link>
      <div className="search-bar">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search movies..."
        />
        <button onClick={handleSearch} type="button">Search</button>
      </div>
      <div>
        <Link to="/login">Login</Link>
        <Link to="/signup">Sign Up</Link>
      </div>
    </nav>
  );
};

export default NavBar;
