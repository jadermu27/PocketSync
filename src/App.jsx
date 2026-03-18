import React, { useState } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

// IMPORTANTE: Asegúrate de que solo haya UNA importación de Sidebar
import Sidebar from "./components/sidebar/Sidebar"; 
import Navbar from "./components/navbar/Navbar";
import RegistrarGasto from "./components/registrargasto/RegistrarGasto";

// Páginas
import Grupos from "./pages/grupos/Grupos";
import Inicio from "./pages/inicio/Inicio";
import InicioSesion from "./pages/iniciosesion/Iniciosesion";
import ModificarPerfil from "./pages/modificarperfil/ModificarPerfil";
import Registro from "./pages/registro/Registro";
import Reportes from "./pages/reportes/Reportes";

// App.jsx
function AppContent() {
  const [ModalAbierto, setModalAbierto] = useState(false);
  const location = useLocation();
  const esRutaAuth = ["/", "/registro"].includes(location.pathname);

  return (
    <div className="App">
      {!esRutaAuth && <Sidebar onAbrirGasto={() => setModalAbierto(true)} />}
      
      {/* Usamos una clase en lugar de estilo en línea para tener más control */}
        <main style={{ 
          flex: 1, 
          marginLeft: !esRutaAuth ? '260px' : '0', 
          width: !esRutaAuth ? 'calc(100% - 260px)' : '100%',
          minHeight: '100vh',
          display: 'flex', 
          flexDirection: 'column',            /* Volvemos a flex pero... */
          justifyContent: 'flex-start', /* ...lo obligamos a empezar a la izquierda */
          alignItems: 'flex-start',    /* ...y arriba */
          backgroundColor: '#ffffff'
        }}>
          <Routes>
            <Route path="/" element={<InicioSesion />} />
            <Route path="/inicio" element={<Inicio />} />
            <Route path="/grupos" element={<Grupos />} />
            <Route path="/perfil" element={<ModificarPerfil />} />
            <Route path="/registro" element={<Registro />} />
            <Route path="/reportes" element={<Reportes />} />
          </Routes>
        </main>
      <RegistrarGasto isOpen={ModalAbierto} onClose={() => setModalAbierto(false)} />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;