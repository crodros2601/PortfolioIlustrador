// src/pages/Ilustracion.js
import React, { useEffect, useState } from 'react';
import '../css/Ilustracion.css';
import avatarFull from '../assets/img/avatar-full.png';
import avatarHead from '../assets/img/avatar-head.png';

const artworks = [
  {
    id: 1,
    image: avatarFull,
  },
  {
    id: 2,
    image: avatarHead,
  },
  {
    id: 3,
    image: require('../assets/img/alaric.png'),
  },
  {
    id: 4,
    image: require('../assets/img/sabrina.png'),
  },
  {
    id: 5,
    image: require('../assets/img/ref.jpg'),
  },
];

const artwork1 = artworks.find(artwork => artwork.id === 1);
const artwork2 = artworks.find(artwork => artwork.id === 2);
const artwork3 = artworks.find(artwork => artwork.id === 3);
const artwork4 = artworks.find(artwork => artwork.id === 4);
const artwork5 = artworks.find(artwork => artwork.id === 5);

function Ilustracion() {
  const [artworks, setArtworks] = useState([]);

  useEffect(() => {
    setArtworks(artworks);
  }, []);

  return (
    <div className='contenedor'>
      <div className='row'>

        <div className='column'>
          {artwork1 && (
            <img src={artwork1.image} alt={`Imagen ${artwork1.id}`} />
          )}
          {artwork2 && (
            <img src={artwork2.image} alt={`Imagen ${artwork2.id}`} />
          )}
          {artwork3 && (
            <img src={artwork3.image} alt={`Imagen ${artwork3.id}`} />
          )}
          {artwork4 && (
            <img src={artwork4.image} alt={`Imagen ${artwork4.id}`} />
          )}
          {artwork5 && (
            <img src={artwork5.image} alt={`Imagen ${artwork5.id}`} />
          )}
        </div>

        <div className='column'>
          {artwork1 && (
            <img src={artwork5.image} alt={`Imagen ${artwork5.id}`} />
          )}
          {artwork2 && (
            <img src={artwork4.image} alt={`Imagen ${artwork4.id}`} />
          )}
          {artwork3 && (
            <img src={artwork3.image} alt={`Imagen ${artwork3.id}`} />
          )}
          {artwork4 && (
            <img src={artwork2.image} alt={`Imagen ${artwork2.id}`} />
          )}
          {artwork5 && (
            <img src={artwork1.image} alt={`Imagen ${artwork1.id}`} />
          )}
        </div>

        <div className='column'>
          {artwork1 && (
              <img src={artwork1.image} alt={`Imagen ${artwork1.id}`} />
            )}
            {artwork2 && (
              <img src={artwork2.image} alt={`Imagen ${artwork2.id}`} />
            )}
            {artwork3 && (
              <img src={artwork3.image} alt={`Imagen ${artwork3.id}`} />
            )}
            {artwork4 && (
              <img src={artwork4.image} alt={`Imagen ${artwork4.id}`} />
            )}
            {artwork5 && (
              <img src={artwork5.image} alt={`Imagen ${artwork5.id}`} />
            )}
        </div>

        <div className='column'>
          {artwork1 && (
            <img src={artwork5.image} alt={`Imagen ${artwork5.id}`} />
          )}
          {artwork2 && (
            <img src={artwork4.image} alt={`Imagen ${artwork4.id}`} />
          )}
          {artwork3 && (
            <img src={artwork3.image} alt={`Imagen ${artwork3.id}`} />
          )}
          {artwork4 && (
            <img src={artwork2.image} alt={`Imagen ${artwork2.id}`} />
          )}
          {artwork5 && (
            <img src={artwork1.image} alt={`Imagen ${artwork1.id}`} />
          )}
        </div>

      </div>
    </div>
  );
}

export default Ilustracion;
