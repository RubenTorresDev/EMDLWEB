import React from 'react';
import '../css/BannerSectionAlbum.css'; // Asegúrate de tener este archivo CSS
import videoSrc from '../Videos/PITO BAILONGO APAISADO.mp4';

const BannerSectionAlbum = () => {
  return (
    <header className="BannerSectionAlbum">
      <video
        className="banner-video"
        src={videoSrc}
        muted
        loop
        autoPlay
        playsInline
      ></video>
  
    </header>
  );
};

export default BannerSectionAlbum;
