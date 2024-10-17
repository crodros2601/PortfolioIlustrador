import React from 'react'

const artworks = [
  {
    id: 1,
    image: require('../assets/img/retrato/retrato1.png'),
  },
  {
    id: 2,
    image: require('../assets/img/retrato/retrato2.png'),
  },
  {
    id: 3,
    image: require('../assets/img/retrato/retrato3.png'),
  },
  {
    id: 4,
    image: require('../assets/img/retrato/retrato4.png'),
  },
  {
    id: 5,
    image: require('../assets/img/retrato/retrato5.png'),
  },
  {
    id: 6,
    image: require('../assets/img/retrato/retrato6.png'),
  },
  {
    id: 7,
    image: require('../assets/img/retrato/retrato7.png'),
  },
];

const artwork1 = artworks.find(artwork => artwork.id === 1);
const artwork2 = artworks.find(artwork => artwork.id === 2);
const artwork3 = artworks.find(artwork => artwork.id === 3);
const artwork4 = artworks.find(artwork => artwork.id === 4);
const artwork5 = artworks.find(artwork => artwork.id === 5);
const artwork6 = artworks.find(artwork => artwork.id === 6);
const artwork7 = artworks.find(artwork => artwork.id === 7);

function ConceptArt() {
  return (
    <div className='contenedor'>
        <div className='row'>
          <div className='column'>
            <div className='image-container'>
                <img src={artwork4.image} alt={`Imagen ${artwork4.id}`} />
                <div className='image-title'>Gótica</div>
            </div>
            <div className='image-container'>
                <img src={artwork5.image} alt={`Imagen ${artwork5.id}`} />
                <div className='image-title'>Gótica</div>
            </div>
          </div>

          <div className='column'>
            <div className='image-container'>
                <img src={artwork2.image} alt={`Imagen ${artwork2.id}`} />
                <div className='image-title'>Imagen {artwork3.id}</div>
            </div>
            <div className='image-container'>
                <img src={artwork6.image} alt={`Imagen ${artwork6.id}`} />
                <div className='image-title'>Gótica</div>
            </div>
          </div>

          <div className='column'>
            <div className='image-container'>
                <img src={artwork3.image} alt={`Imagen ${artwork3.id}`} />
                <div className='image-title'>Taylor Swift Fanart</div>
            </div>
            <div className='image-container'>
                <img src={artwork7.image} alt={`Imagen ${artwork7.id}`} />
                <div className='image-title'>Gótica</div>
            </div>
          </div>

          <div className='column'>
            <div className='image-container'>
                <img src={artwork1.image} alt={`Imagen ${artwork1.id}`} />
                <div className='image-title'>Taylor Swift Fanart</div>
            </div>
          </div>
      </div>
    </div>
  )
}

export default ConceptArt