import './App.css';
import AsideMenu from './components/AsideMenu';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Ilustracion from './components/Ilustracion';
import ConceptArt from './components/ConceptArt';
import Retratos from './components/Retratos';
import Sketch from './components/Sketch';
import SobreMi from './components/SobreMi';
import ContactoSocial from './components/ContactoSocial';

function App() {
  return (
    <>
      <Router>
        <div className='app'>
          <AsideMenu/>
          <Routes>
            <Route path="/conceptArt" element={<ConceptArt/>}/>
            <Route path="/retratos" element={<Retratos/>}/>
            <Route path="/sketch" element={<Sketch/>}/>
            <Route path="/sobre-mi" element={<SobreMi/>}/>
            <Route path="/contacto-social" element={<ContactoSocial/>}/>
            <Route path="/" element={<Ilustracion/>}/>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
