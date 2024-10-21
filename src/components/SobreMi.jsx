import React from 'react';
import Nanna from '../assets/img/ilustracion/nanna.png';
import '../css/SobreMi.css';
import Tiana from '../assets/img/ilustracion/tiana.png';

function SobreMi() {
  return (
    <div className='sobre-mi-contenedor'>
      <div className='bio'>
        <h2>Sobre Mí</h2>
        <p>
          Soy Carmelo Rodríguez, un artista autodidacta de Huelva que comenzó a dibujar a los 16 años. Aunque mi formación artística se limita al bachillerato, 
          he desarrollado mis habilidades de manera independiente y con dedicación.
        </p>
        <p>
          Me apasiona explorar diferentes estilos y técnicas, y siempre estoy en búsqueda de nuevas oportunidades para crecer y colaborar con otros 
          creativos en el mundo del arte.
        </p>
      </div>
      <div className='sobreMiPersonajes'>
        <img src={Nanna} alt='Nanna' className='foto-perfil' />
        <img src={Tiana} alt='Tiana' className='foto-perfil' />
      </div>
    </div>
  );
}

export default SobreMi;
