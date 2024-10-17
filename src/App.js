import './App.css';
import AsideMenu from './pages/AsideMenu';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Ilustracion from './pages/Ilustracion';
import ConceptArt from './pages/ConceptArt';
import Retratos from './pages/Retratos';
import Sketch from './pages/Sketch';
import SobreMi from './pages/SobreMi';
import ContactoSocial from './pages/ContactoSocial';

function App() {
  return (
    <Router>
      <div className='app'>
        <AsideMenu />
        <Routes>
          <Route path="/ilustracion" element={<Ilustracion />} />
          <Route path="/concept-art" element={<ConceptArt />} /> {/* Cambiado a kebab-case */}
          <Route path="/retratos" element={<Retratos />} />
          <Route path="/sketch" element={<Sketch />} />
          <Route path="/sobre-mi" element={<SobreMi />} />
          <Route path="/contacto-social" element={<ContactoSocial />} />
          <Route path="/" element={<Navigate to="/ilustracion" />} />
          <Route path="*" element={<Navigate to="/ilustracion" />} /> {/* Redirige a ilustración para rutas no encontradas */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
