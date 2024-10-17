import React, { useState } from 'react';
import '../css/Header.css';
import logo from '../img/logochiquito.png';
import logo2 from '../img/monstruitologobueno.png';


const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="header">
      <div className='header-side'>
        <button className="menu-toggle" onClick={toggleMenu}>
        ☰
      </button>
      </div>
      <img src={logo} alt="Logo de la banda" className="header-image left" />
      <nav className={`nav ${isOpen ? 'open' : ''}`}>
        <ul>
          <li><a href="/">HOME</a></li>
          <li><a href="/store">STORE</a></li>
          <li><a href="/live">LIVE</a></li>
          <li><a href="/videos">VIDEOS</a></li>
          <li><a href="/releases">RELEASES</a></li>
        </ul>
      </nav>
      <div className='header-side'>
        <img src={logo2} alt="Logo de la banda2" className="header-image right" />
      </div>
      
    </header>
  );
};

export default Header;
