import React from 'react';
import './footer.css';


const Footer = () => {
  return (
    <footer className="footer">
      
      <p className="copyright">
        &copy; {new Date().getFullYear()} Marcos Orihuela García.
      </p>

      <a className='link-format' href='https://formacion.intef.es/mod/book/view.php?id=2609&chapterid=2196'>Todos los derechos reservados.</a>

      <a className='link-format' href='/contactus'>Contactanos</a>

      <a className='link-format' href='../../public/fenti.xml'>RSS</a>

      
      <div className='social-icons' style={{fontSize:"5em", color: 'yellow'}}>
      <a href='https://www.facebook.com/p/CIFP-San-Crist%C3%B3bal-100057079285067/' ><img src="../../public/fotos/iconos/facebook-icon.jpg" /></a>
      <a href='https://www.instagram.com/cifpsancristobal/'><img src="../../public/fotos/iconos/instagram-icon.png" /></a>
      <a href='https://x.com/cifpsancristoba?lang=es'><img src="../../public/fotos/iconos/twitter-icon.png" /></a>
      <a href='https://github.com/Orihuela03'><img src="../../public/fotos/iconos/github-icon.png" /></a>
      </div>

    </footer>
  );
};


export default Footer;
