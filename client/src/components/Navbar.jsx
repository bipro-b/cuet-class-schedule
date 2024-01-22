// Navbar.jsx

import React from 'react';
import { Link } from 'react-router-dom'; // If you are using React Router
import './Navbar.css'; // Import your CSS file for styling

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        {/* Your logo or project name */}
        <Link to="/" className="navbar-brand">
          Class Routine Management System
        </Link>

        {/* Navigation links */}
        <ul className="nav-links">
          <li className="nav-item">
            <Link to="/dashboard" className="nav-link">
              Dashboard
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/schedule" className="nav-link">
              Schedule
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/teachers" className="nav-link">
              Teachers
            </Link>
          </li>
          {/* Add more navigation links as needed */}
        </ul>

        {/* User authentication or profile section */}
        <div className="user-section">
          {/* Display user information or login/logout options */}
          {/* For example, you can check if the user is logged in and display their name or a login button */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
