// Navbar.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/" exact activeClassName="active">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about" activeClassName="active">About</NavLink>
        </li>
        {/* Add more NavLink components for other pages */}
      </ul>
    </nav>
  );
}

export default Navbar;
