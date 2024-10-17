// src/components/Carrito.js
import React, { useContext } from 'react';
import { CarritoContext } from '../CarritoContext';
import '../css/Carrito.css';

const Carrito = ({ visible, onClose }) => {
  const { carrito, eliminarDelCarrito, totalCarrito } = useContext(CarritoContext);

  return (
    <div className={`carrito ${visible ? 'visible' : ''}`}>
      {visible && (
        <button className="close-button" onClick={onClose}>
          &times; {/* Botón de cierre */}
        </button>
      )}
      <h2>Tu Carrito</h2>
      {carrito.map(producto => (
        <div key={producto.id} className="producto-carrito">
          <img src={producto.imagen} alt={producto.nombre} className="miniatura" />
          <span>{producto.nombre}</span>
          <span>{producto.precio} €</span>
          <span>Cantidad: {producto.cantidad}</span> {/* Muestra la cantidad */}
          <button onClick={() => eliminarDelCarrito(producto.id)}>Eliminar</button>
        </div>
      ))}
      <h3>Subtotal: {totalCarrito} €</h3>
      <button className="checkout">Checkout</button>
    </div>
  );
};

export default Carrito;
