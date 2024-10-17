import React from 'react';
import '../css/Footer.css'; // Asegúrate de tener este archivo CSS

const Footer = () => {
  return (
    <footer className="footer">
      <div className="social-icons">
        <a href="https://www.instagram.com/elmonstruodellago/" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="https://open.spotify.com/intl-es/artist/3WCJtpHkNtFjLTO90DGjsB?si=GABFdbX6SkCLl00qUADwAg" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-spotify"></i>
        </a>
        <a href="https://www.youtube.com/@elmonstruodellago.4996" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-youtube"></i>
        </a>
        <a href="https://music.apple.com/es/artist/el-monstruo-del-lago/1533715280" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-apple"></i>
        </a>
        <a href="https://www.tiktok.com/@elmonstruodellagoband" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-tiktok"></i>
        </a>
      </div>
      <div className="footer-text">
        <p>Copyright © 2024 El Monstruo del Lago</p>
        <p>VELCRO | SUBURBAN RELAPSE LABEL</p>
      </div>
    </footer>
  );
};

export default Footer;

