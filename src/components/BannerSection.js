import React from 'react';
import '../css/BannerSection.css'; // Archivo CSS para estilos personalizados

import logo from '../img/banner.png'; // Importa la imagen del logo
import logo2 from '../img/logo2.png'; // Importa la imagen del logo

const BannerSection = () => {
  return (
    <section className="BannerSection">
      <div className="portada">
        <img src={logo} alt="Logo de la banda" className="logo-img" />
      </div>
      <div className="streaming-links">
        <a href="https://open.spotify.com/intl-es/artist/3WCJtpHkNtFjLTO90DGjsB?si=kWN5h_EfQri5h-DEe7fAcg" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-spotify streaming-icon"></i>
        </a>
        <a href="https://music.apple.com/es/artist/el-monstruo-del-lago/1533715280" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-apple streaming-icon"></i>
        </a>
        <a href="https://music.amazon.com/artists/B08K2G5Y5Q/el-monstruo-del-lago" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-amazon streaming-icon"></i>
        </a>
      </div>
      <div className="logo">
        <img src={logo2} alt="Logo de la banda" className="logo-img" />
      </div>
      
      <div className="video-container">
        <iframe
          width="560"
          height="600"
          src="https://www.youtube.com/embed/2T5dSgoQlu0"
          title="Me importa una mierda"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </section>
  );
};

export default BannerSection;
