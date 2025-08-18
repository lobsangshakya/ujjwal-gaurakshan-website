import React from 'react';
import './index.css'; // Styles for the navbar
import logo from '../../assets/logo.png'; // Make sure logo path is correct

const links = [
  { name: 'Home', href: '/' },
  { name: 'Donate', href: '/donate' },
  { name: 'About', href: '/about' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'Contact', href: '/contact' },
];

const Navbar = () => {
  return (
    <nav className="navbar" aria-label="Main Navigation">
      <div className="navbar-container">
        <a href="/" className="navbar-logo">
          <img src={logo} alt="Ujjwal Gaurakshan Trust Logo" />
        </a>

        <ul className="navbar-links">
          {links.map((link, idx) => (
            <li key={idx}>
              <a href={link.href} className="navbar-link">
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
