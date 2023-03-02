import React from 'react';
import { Link } from "react-router-dom";

import logo from '../assets/Logo .svg'
function Nav() {
  return (
    <nav>
      <ul>
      <Link to="/">

      <img
            src={logo}
            alt="Little Lemon logo"
            className="logo"
            
          ></img></Link>
        <li><Link to="/">
        Home</Link></li>
        <li><Link to="/menu">Menu</Link></li>
        <li><Link to="/reservation">Reservation</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}

export default Nav;
