import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <p>© 2024 MARCOS Todos los derechos reservados | <a href="https://www.interior.gob.es/opencms/es/politica-de-cookies/">Política de Privacidad y Cookies</a> | <a href="https://economistas.es/condiciones-de-venta/">Condiciones de Venta</a></p>
            <div className="social-icons">
                <a href="https://www.facebook.com/p/CIFP-San-Crist%C3%B3bal-100057079285067/" target="_blank" rel="noopener noreferrer"><img src="https://cdn-icons-png.flaticon.com/512/733/733547.png" alt="Facebook" /></a>
                <a href="https://twitter.com/CIFPSanCristoba" target="_blank" rel="noopener noreferrer"><img src="https://cdn-icons-png.flaticon.com/512/733/733579.png" alt="Twitter" /></a>
                <a href="https://www.instagram.com/cifpsancristobal/" target="_blank" rel="noopener noreferrer"><img src="https://cdn-icons-png.flaticon.com/512/733/733558.png" alt="Instagram" /></a>
                <a href="https://github.com/Orihuela03/TheWayOfTheWater" target="_blank" rel="noopener noreferrer"><img src="https://cdn-icons-png.flaticon.com/512/733/733553.png" alt="GitHub" /></a>

            </div>
            <p>
                <a href="http://localhost:5173/home" target="_blank" rel="noopener noreferrer">Inicio</a>
                <a href="http://localhost:5173/aboutus" target="_blank" rel="noopener noreferrer">Sobre nosotros</a>
                <a href="http://localhost:5173/map" target="_blank" rel="noopener noreferrer">Ubicacion</a>
                <a href="http://localhost:5173/public/rss.xml" target="_blank" rel="noopener noreferrer">RSS</a>
            </p>
        </footer>
    );
}

export default Footer;
