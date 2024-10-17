// src/components/Producto.js
import React, { useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import productos from '../data/Productos'; // Asegúrate de que la ruta sea correcta
import { CarritoContext } from '../CarritoContext';
import Carrito from './Carrito'; // Importa el componente Carrito
import '../css/Producto.css'; // Asegúrate de tener este archivo CSS

const Producto = () => {
  const { id } = useParams();
  const producto = productos.find(p => p.id === parseInt(id));
  const { agregarAlCarrito } = useContext(CarritoContext);
  const [talla, setTalla] = useState('M');
  const [cantidad, setCantidad] = useState(1);
  const [carritoVisible, setCarritoVisible] = useState(false);

  if (!producto) {
    return <div>Producto no encontrado</div>;
  }

  const handleAgregarAlCarrito = () => {
    agregarAlCarrito({ ...producto, cantidad });
    setCarritoVisible(true); // Muestra el carrito cuando se agrega un producto
  };

  const handleCloseCarrito = () => {
    setCarritoVisible(false); // Cierra el carrito
  };

  return (
    <div className="producto-detalle">
      <div className="imagen-producto">
        <img src={producto.imagen} alt={producto.nombre} />
      </div>
      <div className="detalles-producto">
        <h1>{producto.nombre}</h1>
        <p className="precio">{producto.precio} €</p>
        <div className="tallas">
          <span>Tamaño:</span>
          {['XS', 'S', 'M', 'L', 'XL', '2XL'].map(size => (
            <button
              key={size}
              className={talla === size ? 'active' : ''}
              onClick={() => setTalla(size)}
            >
              {size}
            </button>
          ))}
        </div>
        <div className="cantidad">
          <span>Cantidad:</span>
          <select value={cantidad} onChange={(e) => setCantidad(parseInt(e.target.value))}>
            {[1, 2, 3, 4, 5].map(num => (
              <option key={num} value={num}>{num}</option>
            ))}
          </select>
        </div>
        <button className="agregar-carrito" onClick={handleAgregarAlCarrito}>Agregar al Carrito</button>
        <p className="descripcion">
          Lousy t-shirt with a screen printed design. Designed by Joe.
          Material: 100% ringspun cotton, Modern classic fit, Heavyweight soft fabric, Taped neck and shoulders.
        </p>
      </div>
      <Carrito visible={carritoVisible} onClose={handleCloseCarrito} /> {/* Pasa la visibilidad y la función de cierre */}
    </div>
  );
};

export default Producto;
