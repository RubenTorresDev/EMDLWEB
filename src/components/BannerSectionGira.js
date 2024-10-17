import React from 'react';
import '../css/BannerSectionGira.css'; // Puedes crear un archivo CSS para estilos personalizados
import logo from '../img/GIRA2024cartelfinal.jpg'; // Importa la imagen del logo




const BannerSectionGira = () => {
  return (
    <header className="BannerSectionGira">
      <div className="logo">
        <img src={logo} alt="Logo de la banda" className="logo-img" />
      </div>
      
    </header>
  );
};

export default BannerSectionGira;
