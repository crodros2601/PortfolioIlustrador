import React from 'react';
import '../css/ContactoSocial.css';
import tiktok from '../assets/img/icon/tik-tok.png';
import instagram from '../assets/img/icon/instagram.png'; 
import emailIcon from '../assets/img/icon/correo-electronico.png'; 

function ContactoSocial() {
  return (
    <div className='contacto-social'>
      <h2>Contacto Social</h2>
      <div className='social-icons'>
        <a href='https://www.tiktok.com/@karmelarteem?lang=es' target='_blank' rel='noopener noreferrer'>
          <img src={tiktok} alt='TikTok' className='icon' />
        </a>
        <a href='https://www.instagram.com/karmelartem' target='_blank' rel='noopener noreferrer'>
          <img src={instagram} alt='Instagram' className='icon' />
        </a>
        <a href='mailto:karmelartem@gmail.com'>
          <img src={emailIcon} alt='Correo Electrónico' className='icon' />
        </a>
      </div>
    </div>
  );
}

export default ContactoSocial;
