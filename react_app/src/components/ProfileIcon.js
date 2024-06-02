import React, { useState } from 'react';
import { FaUser, FaBookmark, FaSignOutAlt } from 'react-icons/fa';
import './ProfileIcon.css';

const ProfileIcon = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const closeMenu = () => {
    setShowMenu(false);
  };

  return (
    <div className="profile-icon-container">
      <FaUser onClick={toggleMenu} style={{ marginTop: '-5px' }} />
      {showMenu && (
        <div className="dropdown-menu" onBlur={closeMenu} tabIndex={0}>
          <div className="dropdown-item"><FaUser/>Profile</div>
          <div className="dropdown-item"><FaBookmark/>Bookmark Films</div>
          <div className="dropdown-item"><FaSignOutAlt/>Log Out</div>
        </div>
      )}
    </div>
  );
};

export default ProfileIcon;




