import React from 'react';
import '../css/BannerSectionSiglas.css'; // Puedes crear un archivo CSS para estilos personalizados
import logo from '../img/siglas.png'; // Importa la imagen del logo




const BannerSectionSiglas = () => {
  return (
    <header className="BannerSectionSiglas">
      <div className="logo">
        <img src={logo} alt="Logo de la banda" className="logo-img" />
      </div>
      
    </header>
  );
};

export default BannerSectionSiglas;
