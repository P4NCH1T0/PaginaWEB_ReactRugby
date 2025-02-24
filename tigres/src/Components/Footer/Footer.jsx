import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Sobre Nosotros</h3>
          <p>Somos un equipo apasionado por el rugby y comprometido con nuestra comunidad.</p>
        </div>
        <div className="footer-section">
          <h3>Ubicación</h3>
          <p>Estadio Gaspar Mass, Ciudad Universitaria, San Nicolás de los Garza, N.L.</p>
        </div>
        <div className="footer-section">
          <h3>Pendiente</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis suscipit ex earum culpa natus alias sed eaque, expedita quos minus omnis aperiam, quis tempora saepe ea? Consectetur odit placeat deserunt.</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Tigres Rugby Varonil. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;