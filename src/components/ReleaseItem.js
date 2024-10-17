import React, { useState } from 'react';

const ReleaseItem = ({ title, type, tracks, image, releaseDate, label, listenLink }) => {
  const [showTracklist, setShowTracklist] = useState(false);

  const toggleTracklist = () => {
    setShowTracklist(!showTracklist);
  };

  return (
    <div className="release-item">
      {/* Imagen del álbum */}
      <div className="release-image-container">
        <img src={image} alt={title} className="release-image" />
      </div>

      {/* Información del álbum */}
      <div className="release-info">
        <h2>{title}</h2>
        <p className="release-type">{type}</p> {/* Tipo de release */}
        <p>{label}</p>
        <p>{releaseDate}</p>

        {/* Botón para mostrar/ocultar el tracklist */}
        <p className="tracklist-toggle" onClick={toggleTracklist}>
          TRACKLIST {showTracklist ? '▲' : '▼'}
        </p>

        {/* Mostrar el tracklist si el estado `showTracklist` es verdadero */}
        <ul className={`tracklist ${showTracklist ? 'show' : ''}`}>
          {tracks.map((track, index) => (
            <li key={index}>{track}</li>
          ))}
        </ul>

        {/* Botón de "Listen Now" */}
        <a href={listenLink} target="_blank" rel="noopener noreferrer">
          <button className="listen-now-button">LISTEN NOW</button>
        </a>
      </div>
    </div>
  );
};

export default ReleaseItem;
