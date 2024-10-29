import React, { useEffect, useState } from 'react';
import avatarHead from '../assets/img/avatar-head.png';
import avatarFull from '../assets/img/avatar-full.png';
import '../css/AsideMenu.css';
import { NavLink } from 'react-router-dom';

function AsideMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add('body-menu-open');
    } else {
      document.body.classList.remove('body-menu-open');
    }
  }, [isMenuOpen]);

  return (
    <>
      {/* Menú hamburguesa visible solo en móviles */}
      <div className='burger-menu' onClick={toggleMenu}>
        <div className='burger-line'></div>
        <div className='burger-line'></div>
        <div className='burger-line'></div>
      </div>

      <aside className={`asideMenu ${isMenuOpen ? 'open' : ''}`}>
        <div className='perfilContenedor'>
          <div className='perfilImgContenedor'>
            <img src={avatarHead} className='perfilImg front' alt="Perfil frontal"/>
            <img src={avatarFull} className='perfilImg back' alt="Perfil trasera"/>
          </div>
          <h1>KarmelArtem</h1>
        </div>
        
        {/* Botón de cerrar el menú */}
        <div className='close-button' onClick={toggleMenu}>
          &times; {/* Este símbolo representa la "X" */}
        </div>

        <nav>
          <ul>
            <li><NavLink to="/" activeClassName="active">Ilustración</NavLink></li>
            <li><NavLink to="/conceptArt" activeClassName="active">Concept Art</NavLink></li>
            <li><NavLink to="/retratos" activeClassName="active">Retratos</NavLink></li>
            <li><NavLink to="/sketch" activeClassName="active">Sketch</NavLink></li>
            <li><NavLink to="/sobre-mi" activeClassName="active">Sobre mí</NavLink></li>
            <li><NavLink to="/contacto-social" activeClassName="active">Contacto/Social</NavLink></li>
          </ul>
        </nav>
      </aside>

      {isMenuOpen && <div className='overlay' onClick={toggleMenu} />}
    </>
  )
}

export default AsideMenu;
