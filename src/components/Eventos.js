import React from 'react';
import '../css/Eventos.css';

const Eventos = () => {
  const events = [
    { date: '20-Ene', location: 'Móstoles', lugar: 'CSOA La Casika', status: 'Celebrado' },
    { date: '30-Mar', location: 'Móstoles', lugar: 'El Viejo Mati FEST', status: 'Celebrado' },
    { date: '6-Abr', location: 'Málaga', lugar: 'CSOA Las Vegas', status: 'Celebrado' },
    { date: '13-Abr', location: 'Móstoles', lugar: 'Bacterio Brewing', status: 'Celebrado' },
    { date: '1-Jun', location: 'Madrid', lugar: 'Sala La Trinchera', status: 'Celebrado' },
    { date: '7-Jun', location: 'Leganés', lugar: 'Leganés Sonora + Flinks', status: 'Celebrado' },
    { date: '8-Jun', location: 'Parla', lugar: 'Lets Go Rock Bar + Flawbrain + Flinks', status: 'Celebrado' },
    { date: '22-Jun', location: 'Ventilla', lugar: 'Festival Almenara', status: 'Celebrado' },
    { date: '7-Sept', location: 'Madrid', lugar: 'Cadillac Solitario', status: 'Celebrado' },
    { date: '19-Oct', location: 'Sevilla', lugar: 'Moments + Vapores + Magnetismo Sonoro', status: 'Disponible' },
    { date: '9-Nov', location: 'Badajoz', lugar: 'La Hoguera + Sniff', status: 'Disponible' },
    { date: '15-Nov', location: 'Madrid', lugar: 'Sala Barracudas', status: 'Disponible' },
    { date: '14 Dic', location: 'Madrid', lugar: 'Sala El Perro + Puggles', status: 'Disponible' },
  ];

  return (
    <div className="event-list">
      {events.map((event, index) => (
        <div className="event-item" key={index}>
          <div className="event-details">
            <strong>{event.lugar}</strong> {event.date} <br />
            ({event.location})
          </div>
          <div className="event-actions">
            <span className={`status ${event.status === 'Disponible' ? 'available' : 'celebrated'}`}>
              {event.status}
            </span>
            <button className={`button ${event.status === 'Disponible' ? 'tickets' : 'sold-out'}`}>
              {event.status === 'Disponible' ? 'TICKETS' : 'SOLD OUT'}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Eventos;
