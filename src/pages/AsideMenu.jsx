import React from 'react';
import avatarHead from '../assets/img/avatar-head.png';
import avatarFull from '../assets/img/avatar-full.png'; 
import '../css/AsideMenu.css';
import { Link, NavLink } from 'react-router-dom';

function AsideMenu() {
  return (
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
          <li><NavLink to="/ilustracion" className={({ isActive }) => (isActive ? "active" : "")}>Ilustración</NavLink></li>
          <li><NavLink to="/concept-art" className={({ isActive }) => (isActive ? "active" : "")}>Concept Art</NavLink></li>
          <li><NavLink to="/retratos" className={({ isActive }) => (isActive ? "active" : "")}>Retratos</NavLink></li>
          <li><NavLink to="/sketch" className={({ isActive }) => (isActive ? "active" : "")}>Sketch</NavLink></li>
          <li><NavLink to="/sobre-mi" className={({ isActive }) => (isActive ? "active" : "")}>Sobre mí</NavLink></li>
          <li><NavLink to="/contacto-social" className={({ isActive }) => (isActive ? "active" : "")}>Contacto/Social</NavLink></li>
        </ul>
      </nav>
    </aside>
  )
}

export default AsideMenu;
