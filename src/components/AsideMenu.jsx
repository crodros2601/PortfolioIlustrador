import React, { useEffect, useState } from 'react';
import avatarHead from '../assets/img/avatar-head.png';
import avatarFull from '../assets/img/avatar-full.png';
import '../css/AsideMenu.css';
import { NavLink } from 'react-router-dom';

function AsideMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isBurgerVisible, setIsBurgerVisible] = useState(true); 

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    document.body.classList.remove('body-menu-open');
    document.body.style.overflow = 'auto';
    setTimeout(() => {
      setIsBurgerVisible(true); 
  }, 280);
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add('body-menu-open');
      document.body.style.overflow = 'hidden';
    } else {
      document.body.classList.remove('body-menu-open');
      document.body.style.overflow = 'auto';
    }
  }, [isMenuOpen]);

  return (
    <>
        {/* Menú hamburguesa visible solo en móviles */}
        {isBurgerVisible && (
            <div className={`contenedorBurger ${isMenuOpen ? 'hidden' : ''}`}>
                <div className='burger-menu' onClick={() => {
                    setIsBurgerVisible(false);
                    toggleMenu();
                }}>
                    <div className='burger-line'></div>
                    <div className='burger-line'></div>
                    <div className='burger-line'></div>
                </div>
            </div>
        )}
        
        <aside className={`asideMenu ${isMenuOpen ? 'open' : ''}`}>
            <div className='perfilContenedor'>
                <div className='perfilImgContenedor'>
                    <img src={avatarHead} className='perfilImg front' alt="Perfil frontal"/>
                    <img src={avatarFull} className='perfilImg back' alt="Perfil trasera"/>
                </div>
                <h1>KarmelArtem</h1>
            </div>

            <div className='close-button' onClick={closeMenu}>
                &times;
            </div>

            <nav>
                <ul>
                    <li>
                        <NavLink to="/" activeClassName="active" onClick={closeMenu}>Ilustración</NavLink>
                    </li>
                    <li>
                        <NavLink to="/conceptArt" activeClassName="active" onClick={closeMenu}>Concept Art</NavLink>
                    </li>
                    <li>
                        <NavLink to="/retratos" activeClassName="active" onClick={closeMenu}>Retratos</NavLink>
                    </li>
                    <li>
                        <NavLink to="/sketch" activeClassName="active" onClick={closeMenu}>Sketch</NavLink>
                    </li>
                    <li>
                        <NavLink to="/sobre-mi" activeClassName="active" onClick={closeMenu}>Sobre mí</NavLink>
                    </li>
                    <li>
                        <NavLink to="/contacto-social" activeClassName="active" onClick={closeMenu}>Contacto/Social</NavLink>
                    </li>
                </ul>
            </nav>
        </aside>

        <div className={`overlay ${isMenuOpen ? 'show' : ''}`} onClick={closeMenu} />
    </>
);

}

export default AsideMenu;
