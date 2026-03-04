import React, {useState} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

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


function App() {

  const [ModalAbierto, setModalAbierto] = useState(false);

  return (
    <BrowserRouter>
      <div className="App">
        {/*El Navbar se queda fijo en todas las pantallas */}
        <Navbar onAbrirGasto={() => setModalAbierto(true)} />
        <RegistrarGasto 
        isOpen={ModalAbierto} 
        onClose={() => setModalAbierto(false)} 
        />

        <Routes>
          {/* Aquí definimos qué componente se muestra según la URL */}
          <Route path="/" element={<Inicio />} />
          <Route path="/grupos" element={<Grupos />} />
          <Route path="/nuevogasto" element={<InicioSesion />} />
          <Route path="/perfil" element={<ModificarPerfil />} />
          <Route path="/registro" element={<Registro />} />
          <Route path="/reportes" element={<Reportes />} />
        </Routes>

      </div>
    </BrowserRouter>
  );
}

export default App;