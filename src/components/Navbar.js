import { NavLink } from 'react-router-dom';
import React, { useState } from 'react';

const Navbar = () => {
  const activeLink = ({ isActive }) => `nav-link${(isActive ? ' activated' : '')}`;
  const [navbarOpen, setNavbarOpen] = useState(false);
  const handleToggle = () => {
    setNavbarOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setNavbarOpen(true);
  };

  return (
    <nav>
      <div className="btn-container">
        { navbarOpen
          ? <button className="menu-btn" onClick={handleToggle} type="button">&#9776;</button> : <button className="menu-btn" onClick={handleToggle} type="button">&#9747;</button>}
      </div>
      <div className={`logo-container ${navbarOpen ? ' closeMenu' : ''}`}>
        <h1 className="app-title">App Name</h1>
      </div>
      <div className={`nav-links ${navbarOpen ? ' closeMenu' : ''}`}>
        <NavLink to="/" className="nav-link" onClick={() => closeMenu()}>Home</NavLink>
        <NavLink to="/Reservations" className={activeLink} onClick={() => closeMenu()}>My Reservations</NavLink>
        <NavLink to="/NewTour" className={activeLink} onClick={() => closeMenu()}>Create Tour</NavLink>
        <NavLink to="/ReservationsForm" className={activeLink} onClick={() => closeMenu()}>Reserve Tour</NavLink>
        <NavLink to="/DeleteTours" className={activeLink} onClick={() => closeMenu()}>Delete Tour</NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
