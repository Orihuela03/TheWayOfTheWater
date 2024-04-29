import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <p className="copyright">
        &copy; {new Date().getFullYear()} Marcos Orihuela García.
      </p>
      <a className='link-format' href='https://formacion.intef.es/mod/book/view.php?id=2609&chapterid=2196'>Todos los derechos reservados.</a>
    </footer>
  );
};

export default Footer;
