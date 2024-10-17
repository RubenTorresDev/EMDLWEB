// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { CarritoProvider } from './CarritoContext'; 
import Header from './components/Header';
import BannerSectionSiglas from './components/BannerSectionSiglas';
import BannerSection from './components/BannerSection';
import VideoSection from './components/VideoSection';
// import SubscribeForm from './components/SubscribeForm';
import Releases from './components/Releases';
import Footer from './components/Footer';
import './App.css'; // Archivo CSS global
import Tienda from './components/tienda';
import Producto from './components/Producto';
import Eventos from './components/Eventos';
import BannerSectionGira from './components/BannerSectionGira';
import './css/variables.css';
import BannerSectionAlbum from './components/BannerSectionAlbum';
import '@fortawesome/fontawesome-free/css/all.min.css';
 

function App() {
  return (
    <CarritoProvider>
      <Router>
        <div className="App">
          <Header />
          <BannerSectionSiglas />
          <Routes>
            {/* Ruta para la página principal */}
            <Route path="/" element={
              <>
                
                <BannerSection />
                <Eventos />
                <BannerSectionAlbum/>
              
              </>
            } />

            {/* Ruta para la sección de videos */}
            <Route path="/videos" element={
              <>
                
                <VideoSection />
              </>
            } />

            {/* Ruta para la tienda */}
            <Route path="/store" element={
              <>
                
                <Tienda />
              </>
            } />

            {/* Ruta para los lanzamientos */}
            <Route path="/releases" element={
              <>
                
                <Releases />
                
              </>
            } />

            {/* Ruta para la página de producto */}
            <Route path="/producto/:id" element={<Producto />} />

            {/* Puedes agregar más rutas para otras secciones */}
            <Route path="/live" element={
              <>
              
              <BannerSectionGira/>
              <Eventos />
              <BannerSectionAlbum/>
              </>
            }/>
          </Routes>
          <Footer />
        </div>
      </Router>
    </CarritoProvider>
  );
}

export default App;