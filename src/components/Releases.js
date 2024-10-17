import React from 'react';
import ReleaseItem from './ReleaseItem'; // Asegúrate de que la ruta sea correcta
import '../css/Releases.css'; // Archivo CSS para estilos personalizados
import album1 from '../img/AquaSplash.jpeg'; // Importa la imagen
import album2 from '../img/portada.jpg'; // Importa la imagen
import album3 from '../img/hummus.jpg'; // Importa la imagen

const Releases = () => {
  const releases = [
    {
      id: 1,
      title: 'Aqua Splash',
      type: 'Live-Album',
      tracks: [
        'Lumbalgia indefinida (Live)',
        'Depresión y sonrisas (Live)',
        'Albufera (Live)',
        'Delfines (Live)',
        'All cerditos are beautiful (Live)',
        'Parálisis (Live)',
        'Brote verde (Live)',
      ],
      image: album1, 
      listenLink: 'https://open.spotify.com/intl-es/album/1uHu7IpQPo0de9f7O8yI4L?si=IdIbs9tgTAKIrXTD6uG5UA',
    },
    {
      id: 2,
      title: '"."',
      type: 'Album',
      tracks: [
        'Depresión y sonrisas',
        'Albufera',
        'Brote verde',
        'Delfines',
        'Que empiece ya la siguiente!',
        'Me importa una mierda',
        '2020 No cuenta',
        'All cerditos are beautiful',
        'Lumbalgia indefinida',
        'Parálisis',
      ],
      image: album2, 
      listenLink: 'https://open.spotify.com/intl-es/album/2NJX8sYBAH4c1BtYJI6adf?si=kj7WGiZ2Q-24RkHyE1PkRA',
    },
    {
      id: 3,
      title: 'Hummus',
      type: 'EP',
      tracks: ['Argus', 'El niño libre', 'Odio ser alternativo', 'Café Egipcio', 'Tofu the firefly'],
      image: album3, 
      listenLink: 'https://open.spotify.com/album/3TNjyXipocXIHHKN8FOJtS?si=7ZKE8I0FRoGpZc1OolqjNA',
    },
    // Agrega más releases según sea necesario
    
  ];

 
  return (
    <section className="releases-section">
    {releases.map((release) => (
      <ReleaseItem
        key={release.id}
        title={release.title}
        type={release.type}
        tracks={release.tracks}  
        image={release.image}
        releaseDate={release.releaseDate}
        label={release.label}
        listenLink={release.listenLink} 
      />
    ))}
  </section>
  );
};

export default Releases;
