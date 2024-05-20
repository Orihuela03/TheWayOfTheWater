import React from 'react';
import './header.css';

const Header = () => {
  return (
    <header className="header">
      <img src="/public/fotos/Logo.png" alt="Logo" className="logo" />
      <a className='link-format' href='/home'>Home</a>
      <a className='link-format' href="/fotos">Fotos</a>
      <a className='link-format' href='/aboutus'>Sobre Nosotros</a>
      <a className='link-format' href='/contactus'>Contactanos</a>
    </header>
  );
};

export default Header;
