import React from 'react'

const artworks = [
  {
    id: 1,
    image: require('../assets/img/conceptArt/concept1.png'),
  },
  {
    id: 2,
    image: require('../assets/img/conceptArt/concept2.png'),
  },
  {
    id: 3,
    image: require('../assets/img/conceptArt/concept3.png'),
  },
  {
    id: 4,
    image: require('../assets/img/conceptArt/arwen.png'),
  }
];


const artwork1 = artworks.find(artwork => artwork.id === 1);
const artwork2 = artworks.find(artwork => artwork.id === 2);
const artwork3 = artworks.find(artwork => artwork.id === 3);
const artwork4 = artworks.find(artwork => artwork.id === 4);

function ConceptArt() {
  return (
    <div className='contenedor'>
        <div className='row'>
          <div className='column'>
            <div className='image-container'>
                <img src={artwork2.image} alt={`Imagen ${artwork2.id}`} />
                <div className='image-title'>Gótica</div>
            </div>
          </div>

          <div className='column'>
            <div className='image-container'>
                <img src={artwork1.image} alt={`Imagen ${artwork1.id}`} />
                <div className='image-title'>Imagen {artwork3.id}</div>
            </div>
          </div>

          <div className='column'>
            <div className='image-container'>
                <img src={artwork3.image} alt={`Imagen ${artwork3.id}`} />
                <div className='image-title'>Taylor Swift Fanart</div>
            </div>
          </div>

          <div className='column'>
            <div className='image-container'>
                <img src={artwork4.image} alt={`Imagen ${artwork4.id}`} />
                <div className='image-title'>Taylor Swift Fanart</div>
            </div>
          </div>
      </div>
    </div>
  )
}

export default ConceptArt