// src/components/Tienda.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Tienda.css';
import productos from '../data/Productos'; // Importa los productos desde el archivo de datos

const Tienda = () => {
  return (
    <div className="tienda">
      <h1>Tienda de Productos</h1>
      <div className="productos">
        {productos.map(producto => (
          <div key={producto.id} className="producto">
            <Link to={`/producto/${producto.id}`}>
              <img src={producto.imagen} alt={producto.nombre} />
              <h2>{producto.nombre}</h2>
              <p>{producto.precio} €</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tienda;
