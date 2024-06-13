import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="header">
      <div className="logo">
        <img src="../public/images/Logo.png" alt="App Logo" />
      </div>
      <nav className={`nav ${isOpen ? 'nav-open' : ''}`}>
        <ul>
          <li><Link to="/home">Inicio</Link></li>
          <li><Link to="/aboutus">Sobre nosotros</Link></li>
          <li><Link to="/map">Ubicacion</Link></li>
          <li><a href="../public/rss.xml" target="_blank" rel="noopener noreferrer">RSS</a></li>
        </ul>
      </nav>
      <div className="menu-toggle" onClick={toggleMenu}>
        ☰
      </div>
    </header>
  );
};

export default Header;
