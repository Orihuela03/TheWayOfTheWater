import React from 'react';
import './footer.css';


const Footer = () => {
  return (
    <footer className="footer">
      <p className="copyright">
        &copy; {new Date().getFullYear()} Marcos Orihuela García.
      </p>

      <a className='link-format' href='https://formacion.intef.es/mod/book/view.php?id=2609&chapterid=2196'>Todos los derechos reservados.</a>
      
      <div className='social-icons' style={{fontSize:"5em", color: 'yellow'}}>
      <img src="../../public/fotos/iconos/facebook-icon.jpg" />
      <img src="../../public/fotos/iconos/instagram-icon.png" />
      <img src="../../public/fotos/iconos/twitter-icon.png" />
      <img src="../../public/fotos/iconos/github-icon.png" />
      </div>

    </footer>
  );
};


export default Footer;
