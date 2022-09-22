import { NavLink } from 'react-router-dom';
// import logoUrl from '../img/logo.png';

const Navbar = () => {
  const activeLink = ({ isActive }) => `nav-link${(isActive ? ' activated' : '')}`;

  return (
    <nav>
      <div className="navbar-content">
        <div className="logo-container">
          <h1 className="app-title">App Name</h1>
        </div>
        <div className="nav-links">
          <NavLink to="/" className="nav-link">Home</NavLink>
          <NavLink to="/Reservations" className={activeLink}>My Reservations</NavLink>
          <NavLink to="/NewTour" className={activeLink}>Create Tour</NavLink>
          <NavLink to="/ReservationsForm" className={activeLink}>Reserve Tour</NavLink>
          <NavLink to="/DeleteTours" className={activeLink}>Delete Tour</NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
