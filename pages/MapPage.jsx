import React from 'react';
import Header from '../components/header/header';
import Footer from '../components/footer/footer';
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
