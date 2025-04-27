import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Ensure the CSS file has updated styling

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-content">
        <h2 className="navbar-logo">Student Management System</h2>
        <ul className="navbar-links">
          <li><Link to="/" className="navbar-link">Home</Link></li>
          <li><Link to="/add" className="navbar-link">Add Student</Link></li>
          <li><Link to="/list" className="navbar-link">View Students</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
