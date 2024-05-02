import React from 'react';
import './footer.css';


const Footer = () => {
  return (
    <footer className="footer">
      <p className="copyright">
        &copy; {new Date().getFullYear()} Marcos Orihuela García.
      </p>
      <a className='link-format' href='https://formacion.intef.es/mod/book/view.php?id=2609&chapterid=2196'>Todos los derechos reservados.</a>
      <script src="https://kit.fontawesome.com/1211bb8815.js" crossorigin="anonymous"></script>
      <ul class="social-icons">
        <li><a href="https://www.facebook.com/cifpsancristobal" target="_blank"><i class="fa-brands fa-square-facebook"></i></a></li>
        <li><a href="https://twitter.com/cifpsancristobal" target="_blank"><i class="fa-brands fa-square-twitter"></i></a></li>
        <li><a href="https://www.instagram.com/cifpsancrstoba" target="_blank"><i class="fa-brands fa-square-instagram"></i></a></li>
      </ul>

    </footer>
  );
};


export default Footer;
