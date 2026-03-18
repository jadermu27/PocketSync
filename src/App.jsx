import React, { useState } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

// Importar componentes
import Navbar from "./components/navbar/Navbar";
import RegistrarGasto from "./components/registrargasto/RegistrarGasto";

// Importar las páginas
import Grupos from "./pages/grupos/Grupos";
import Inicio from "./pages/inicio/Inicio";
import InicioSesion from "./pages/iniciosesion/Iniciosesion";
import ModificarPerfil from "./pages/modificarperfil/Modificarperfil";
import Registro from "./pages/registro/Registro";
import Reportes from "./pages/reportes/Reportes";
import Sidebar from './components/sidebar/Sidebar';

// 1. CREAMOS UN COMPONENTE HIJO PARA LA LÓGICA
function AppContent() {
  const [ModalAbierto, setModalAbierto] = useState(false);
  const location = useLocation(); // Ahora sí funcionará porque está dentro del Router

  // Definimos las rutas donde NO queremos el Navbar
  const ocultarNavbar = ["/", "/registro"].includes(location.pathname);

  return (
    <div className="App">
      {/* 2. RENDERIZADO CONDICIONAL: Si NO es ruta de ocultar, muestra el Navbar */}
      {!ocultarNavbar && (
        <Navbar onAbrirGasto={() => setModalAbierto(true)} />
      )}

      <RegistrarGasto 
        isOpen={ModalAbierto} 
        onClose={() => setModalAbierto(false)} 
      />

      <Routes>
        <Route path="/" element={<InicioSesion />} />
        <Route path="/inicio" element={<Inicio />} />
        <Route path="/grupos" element={<Grupos />} />
        <Route path="/nuevogasto" element={<InicioSesion />} />
        <Route path="/perfil" element={<ModificarPerfil />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/reportes" element={<Reportes />} />
      </Routes>
    </div>
  );
}

// 3. COMPONENTE PRINCIPAL QUE ENVUELVE TODO
function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;