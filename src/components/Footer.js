import React from 'react';
import footerlogo from '../assets/footerlogo.png'
import { Link } from "react-router-dom";
function Footer() {
  return (
    <footer>
       <menu>
        <li className="img-footer">
          <img
            src={footerlogo}
            alt="Little Lemon logo"
            width="25%"
          ></img>
        </li>
        <li><Link to="/">
        Home</Link></li>
        <li><Link to="/menu">Menu</Link></li>
        <li><Link to="/reservation">Reservation</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        </menu>
    </footer>
  );
}

export default Footer;
