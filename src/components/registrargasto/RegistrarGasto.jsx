import React from 'react';
import "./RegistrarGasto.css"; // Aquí va el estilo de tu modal

const RegistrarGasto = ({ isOpen, onClose }) => {
  if (!isOpen) return null; // Si no está abierto, no renderiza nada

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-header">
          <button className="close-btn" onClick={onClose}>X</button>
          <h2>Registrar Gasto</h2>
        </div>

        {/* AInputs del formulario */}
        <input type="text" placeholder="$ 12.550" />
        <input type= "text" placeholder="Categoria                                                         v" />
        <input type="date" placeholder="Fecha" />
        <input type="text" placeholder="Descripción" />
        <h4>¿Quieres añadir algun colaborador?</h4>
        <button className='boton-colaborador' onClick={onClose}>Añadir Colaborador</button>
        <button className='boton-categoria' onClick={onClose}>Crear o Borrar Categoria</button>
        <button className='boton-guardar' onClick={onClose}>Guardar Gasto</button>

      </div>
    </div>
  );
};

export default RegistrarGasto;