import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";

// Importar las páginas
import grupos from "./pages/grupos/Grupos";
import Inicio from "./pages/inicio/Inicio";
import iniciosesion from "./pages/iniciosesion/Iniciosesion";
import modificarperfil from "./pages/modificarperfil/Modificarperfil";
import registro from "./pages/registro/Registro";
import reportes from "./pages/reportes/Reportes";


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

        <h1>Bienvenido a PocketSync</h1>
      </div>
    </BrowserRouter>
  );
}

export default App;