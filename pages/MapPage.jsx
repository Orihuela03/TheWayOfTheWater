import React from 'react';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import Map from '../components/ubicationmap/Map';

const MapPage = () => {
  return (
    <>
      <Header />
      <div style={{ padding: '20px' }}>
        <h1>Mapa de Ubicación</h1>
        <Map />
      </div>
      <Footer />
    </>
  );
};

export default MapPage;
