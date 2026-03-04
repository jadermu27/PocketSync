import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";

// Importar las páginas
import Grupos from "./pages/grupos/Grupos";
import Inicio from "./pages/inicio/Inicio";
import InicioSesion from "./pages/iniciosesion/Iniciosesion";
import ModificarPerfil from "./pages/modificarperfil/Modificarperfil";
import Registro from "./pages/registro/Registro";
import Reportes from "./pages/reportes/Reportes";


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        {/*El Navbar se queda fijo en todas las pantallas */}
        <Navbar />
        
        <Routes>
          {/* Aquí definimos qué componente se muestra según la URL */}
          <Route path="/" element={<Inicio />} />
          <Route path="/grupos" element={<Grupos />} />
          <Route path="/iniciosesion" element={<InicioSesion />} />
          <Route path="/perfil" element={<ModificarPerfil />} />
          <Route path="/registro" element={<Registro />} />
          <Route path="/reportes" element={<Reportes />} />
        </Routes>

      </div>
    </BrowserRouter>
  );
}

export default App;