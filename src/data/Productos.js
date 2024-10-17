// src/data/productos.js
import camiseta1 from '../img/store/RENDER PARA WEB DISEÑO 1.jpg';
import camiseta2 from '../img/store/MERCH RENDER 2.jpg';
import camiseta3 from '../img/store/DISEÑ RENDER 3.jpg';
import album1 from '../img/store/portadatienda.jpg';

const productos = [
  { id: 1, nombre: 'White Monster', precio: 15, categoria: 'Camiseta', imagen: camiseta1 },
  { id: 2, nombre: 'Delfin Ahegao Pink', precio: 15, categoria: 'Camiseta', imagen: camiseta2 },
  { id: 3, nombre: 'Aquatic Metal God', precio: 15, categoria: 'Camiseta', imagen: camiseta3 },
  { id: 4, nombre: 'Album "." ', precio: 20, categoria: 'Album', imagen: album1 },
  // Agrega más productos aquí
];

export default productos;
