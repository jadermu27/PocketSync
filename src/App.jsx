import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";

/* Importamos */
import Incio from "./components/inicio/Inicio";
import Servicios from "./components/servicios/Servicios";
import Contacto from "./components/contacto/Contacto";
import Portafolio from "./components/portafolio/Portafolio";

function App() {
  return (
    
    <div className="App"> 
      <Navbar />
      <h1>Bienvenido a PocketSync</h1>
    </div>
  );
}

export default App;