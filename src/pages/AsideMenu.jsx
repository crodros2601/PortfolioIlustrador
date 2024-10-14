  import React from 'react';
  import avatar from '../assets/img/avatar.png';
  import '../css/AsideMenu.css';

  function AsideMenu() {
    return (
      <>  
          <aside className='asideMenu'>
            <div className='perfilContenedor'>
              <img src={avatar} className='perfilImg'/>
              <h1>KarmelArtem</h1>
            </div>
              <nav>
                  <ul>
                      <li><a href="">Ilustración</a></li>
                      <li><a href="">Concept Art</a></li>
                      <li><a href="">Retratos</a></li>
                      <li><a href="">Sketch</a></li>
                      <li><a href="">Sobre mí</a></li>
                      <li><a href="">Contacto/Social</a></li>
                  </ul>
              </nav>
          </aside>
      </>
    )
  }

  export default AsideMenu;