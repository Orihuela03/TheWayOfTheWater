import React from 'react';
import './Map.css';

const Map = () => {
  return (
    <div className="Mapcontainer">
      <iframe
        frameBorder="0"
        scrolling="no"
        src="https://es.wikiloc.com/wikiloc/embedv2.do?id=103263672&elevation=off&images=off&maptype=H"
        width="600"
        height="500"
        title="Wikiloc Map"
      ></iframe>
      <div className="Mapcredits">
        Powered by&nbsp;
        <a
          style={{ color: '#4C8C2B', fontSize: '11px', lineHeight: '16px' }}
          target="_blank"
          rel="noopener noreferrer"
          href="https://es.wikiloc.com"
        >
          Wikiloc
        </a>
      </div>
    </div>
  );
};

export default Map;
