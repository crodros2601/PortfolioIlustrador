import React from 'react';
import avatarHead from '../assets/img/avatar-head.png';
import avatarFull from '../assets/img/avatar-full.png'; 
import '../css/AsideMenu.css';
import { Link } from 'react-router-dom';

function AsideMenu() {
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
                    <li><Link to="/ilustracion">Ilustración</Link></li>
                    <li><Link to="/conceptArt">Concept Art</Link></li>
                    <li><Link to="/retratos">Retratos</Link></li>
                    <li><Link to="/sketch">Sketch</Link></li>
                    <li><Link to="/sobre-mi">Sobre mí</Link></li>
                    <li><Link to="/contacto-social">Contacto/Social</Link></li>
                </ul>
            </nav>
        </aside>
    </>
  )
}

export default AsideMenu;

