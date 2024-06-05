import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import ProfileIcon from './ProfileIcon';
import { isAuthenticated } from './Utils'; // Importă funcția isAuthenticated

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

  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  const hideSidebar = () => setSidebar(false);

  const HomeclickHandle = () => {
    handleHomeClick();
    hideSidebar();
  };

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    navigate('/login');
  };

  return (
    <nav className="navbar">
      <Link to="#" className='menu-bars'>
        <i className='fas fa-bars' onClick={showSidebar}></i>
      </Link>
      <nav className={sidebar ? 'nav-menu-active' : 'nav-menu'}>
        <ul className='nav-menu-items'>
          <li className='navbar-toggle'>
            <Link to="#" className='menu-bars'>
              <i className='fas fa-times' onClick={showSidebar}></i>
            </Link>
          </li>
          <div className='nav-text-tab'>Genres</div>
          {SidebarData.map((item, index) => (
            <li key={index} className={item.cName}>
              <Link to={item.path} onClick={showSidebar}>
                <i></i>
                <span>{item.title}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className='nav-home-button'>
        <Link to="/" onClick={HomeclickHandle}>Home</Link>
      </div>
      <div className="search-bar">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search movies..."
        />
        <button onClick={handleSearch} type="button">Search</button>
      </div>
      <div className='nav-log-buttons'></div>
      <div className="login-profile">
        {isAuthenticated() ? (
          <>
            <Link to="/profile">Profile</Link> 
            <Link to="/bookmark">Bookmarks</Link>
            <button onClick={handleLogout}>Logout</button>
          </>
        ) : (
          <>
            <Link to="/login">Login</Link>
            <Link to="/signup">Sign Up</Link>
          </>
        )}
        <ProfileIcon />
      </div>
    </nav>
  );
};

export default NavBar;
