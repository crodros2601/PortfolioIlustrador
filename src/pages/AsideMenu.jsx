import React from 'react';
import avatarHead from '../assets/img/avatar-head.png';
import avatarFull from '../assets/img/avatar-full.png'; 
import '../css/AsideMenu.css';
import { Link, NavLink, useLocation } from 'react-router-dom';

function AsideMenu() {

  const location = useLocation();

  return (
    <>  
        <aside className='asideMenu'>
          <div className='perfilContenedor'>
            <div className='perfilImgContenedor'>
              <img src={avatarHead} className='perfilImg front' alt="Perfil frontal"/>
              <img src={avatarFull} className='perfilImg back' alt="Perfil trasera"/>
            </div>
            <h1>KarmelArtem</h1>
          </div>
            <nav>
            <ul>
                <li>
                <NavLink 
                  to="/ilustracion" 
                  className={({ isActive }) => 
                    isActive || location.pathname === "/" ? "active" : ""
                  }
                >
                  Ilustración
                </NavLink>
              </li>
                <li><NavLink to="/conceptArt" activeClassName="active">Concept Art</NavLink></li>
                <li><NavLink to="/retratos" activeClassName="active">Retratos</NavLink></li>
                <li><NavLink to="/sketch" activeClassName="active">Sketch</NavLink></li>
                <li><NavLink to="/sobre-mi" activeClassName="active">Sobre mí</NavLink></li>
                <li><NavLink to="/contacto-social" activeClassName="active">Contacto/Social</NavLink></li>
            </ul>
            </nav>
        </aside>
    </>
  )
}

export default AsideMenu;

