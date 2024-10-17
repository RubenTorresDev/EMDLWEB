// src/context/CarritoContext.js
import React, { createContext, useState, useEffect } from 'react';

export const CarritoContext = createContext();

export const CarritoProvider = ({ children }) => {
  const [carrito, setCarrito] = useState(() => {
    const carritoGuardado = localStorage.getItem('carrito');
    return carritoGuardado ? JSON.parse(carritoGuardado) : [];
  });

  useEffect(() => {
    localStorage.setItem('carrito', JSON.stringify(carrito));
  }, [carrito]);

  const agregarAlCarrito = (producto) => {
    const productoExistente = carrito.find(item => item.id === producto.id);
    if (productoExistente) {
      setCarrito(carrito.map(item =>
        item.id === producto.id ? { ...item, cantidad: item.cantidad + producto.cantidad } : item
      ));
    } else {
      setCarrito([...carrito, { ...producto, cantidad: producto.cantidad }]);
    }
  };

  const eliminarDelCarrito = (id) => {
    const productoExistente = carrito.find(item => item.id === id);
    if (productoExistente.cantidad > 1) {
      setCarrito(carrito.map(item =>
        item.id === id ? { ...item, cantidad: item.cantidad - 1 } : item
      ));
    } else {
      setCarrito(carrito.filter(producto => producto.id !== id));
    }
  };

  const totalCarrito = carrito.reduce((total, producto) => total + producto.precio * producto.cantidad, 0);

  return (
    <CarritoContext.Provider value={{ carrito, agregarAlCarrito, eliminarDelCarrito, totalCarrito }}>
      {children}
    </CarritoContext.Provider>
  );
};
