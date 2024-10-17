  // src/pages/Ilustracion.js
  import React, { useEffect, useState } from 'react';
  import '../css/Ilustracion.css';

  const artworks = [
    {
      id: 1,
      image: require('../assets/img/ilustracion/character.png'),
    },
    {
      id: 2,
      image: require('../assets/img/ilustracion/ava.png'),
    },
    {
      id: 3,
      image: require('../assets/img/ilustracion/character1.png'),
    },
    {
      id: 4,
      image: require('../assets/img/ilustracion/character2.png'),
    },
    {
      id: 5,
      image: require('../assets/img/ilustracion/riven.png'),
    },
    {
      id: 6,
      image: require('../assets/img/ilustracion/taylor.png'),
    },
    {
      id: 7,
      image: require('../assets/img/ilustracion/nanna.png'),
    },
    {
      id: 8,
      image: require('../assets/img/ilustracion/tiana.png'),
    },
  ];

  const artwork1 = artworks.find(artwork => artwork.id === 1);
  const artwork2 = artworks.find(artwork => artwork.id === 2);
  const artwork3 = artworks.find(artwork => artwork.id === 3);
  const artwork4 = artworks.find(artwork => artwork.id === 4);
  const artwork5 = artworks.find(artwork => artwork.id === 5);
  const artwork6 = artworks.find(artwork => artwork.id === 6);
  const artwork7 = artworks.find(artwork => artwork.id === 7);
  const artwork8 = artworks.find(artwork => artwork.id === 8);

  function Ilustracion() {

    return (
      <div className='contenedor'>
        <div className='row'>

            <div className='column'>
                <div className='image-container'>
                    <img src={artwork1.image} alt={`Imagen ${artwork1.id}`} />
                    <div className='image-title'>Gótica</div>
                </div>
                <div className='image-container'>
                    <img src={artwork2.image} alt={`Imagen ${artwork2.id}`} />
                    <div className='image-title'>Imagen {artwork2.id}</div>
                </div>
            </div>

            <div className='column'>
                <div className='image-container'>
                    <img src={artwork3.image} alt={`Imagen ${artwork3.id}`} />
                    <div className='image-title'>Imagen {artwork3.id}</div>
                </div>
                <div className='image-container'>
                    <img src={artwork7.image} alt={`Imagen ${artwork7.id}`} />
                    <div className='image-title'>Imagen {artwork7.id}</div>
                </div>
            </div>

            <div className='column'>
                <div className='image-container'>
                    <img src={artwork6.image} alt={`Imagen ${artwork6.id}`} />
                    <div className='image-title'>Taylor Swift Fanart</div>
                </div>
                <div className='image-container'>
                    <img src={artwork4.image} alt={`Imagen ${artwork4.id}`} />
                    <div className='image-title'>Imagen {artwork4.id}</div>
                </div>
            </div>

            <div className='column'>
                <div className='image-container'>
                    <img src={artwork5.image} alt={`Imagen ${artwork5.id}`} />
                    <div className='image-title'>Imagen {artwork5.id}</div>
                </div>
                <div className='image-container'>
                    <img src={artwork8.image} alt={`Imagen ${artwork8.id}`} />
                    <div className='image-title'>Imagen {artwork8.id}</div>
                </div>
            </div>

        </div>
      </div>

    );
  }

  export default Ilustracion;
