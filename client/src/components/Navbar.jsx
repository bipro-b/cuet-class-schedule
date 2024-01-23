// Navbar.jsx
import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <span className="brand">Class Routine Management</span>
        <ul className="nav-links">
          <li className="nav-item">Dashboard</li>
          <li className="nav-item">Schedule</li>
          <li className="nav-item">Teachers</li>
          {/* Add more navigation links as needed */}
        </ul>
        <div className="user-section">
          <span className="user-dropdown">User</span>
          {/* Add dropdown items for user profile, logout, etc. */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
