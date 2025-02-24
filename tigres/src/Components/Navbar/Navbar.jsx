import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css';
import logo from '../../Images/Logo.jpg'; // Asegúrate de que la ruta sea correcta

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav>
      <div className="title-container">
        <img src={logo} alt="Logo" className="logo" />
        <Link to="/" className="title">
          Tigres Rugby Varonil
        </Link>
      </div>
      <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuOpen ? "open" : ""}>
        <li>
          <NavLink to="Noticias">Noticias</NavLink>
        </li>
        <li>
          <NavLink to="Calendario">Calendario</NavLink>
        </li>
        <li>
          <NavLink to="Galeria">Galeria</NavLink>
        </li>
        <li>
          <NavLink to="Equipo">Equipo</NavLink>
        </li>
        <li>
          <NavLink to="Contacto">Contacto</NavLink>
        </li>
        <li>
          <NavLink to="Login">Ingresar</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;