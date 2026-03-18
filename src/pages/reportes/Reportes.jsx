import React, { useState } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import './Reportes.css';

const Reportes = () => {
  const [tabActiva, setTabActiva] = useState('semanal');

  // Datos dinámicos para la gráfica circular
  const datosGrafica = {
    diario: [{ name: 'Gastos Hoy', value: 100, color: '#FFBB28' }],
    semanal: [
      { name: 'Alimentación', value: 40, color: '#FFBB28' },
      { name: 'Casa', value: 40, color: '#335577' },
      { name: 'Ocio', value: 20, color: '#D27D46' },
    ],
    mensual: [
      { name: 'Fijos', value: 70, color: '#335577' },
      { name: 'Variables', value: 30, color: '#FFBB28' }
    ]
  };

  return (
    <div className="reportes-screen-layout">
      
      {/* SECCIÓN IZQUIERDA/CENTRO */}
      <div className="reportes-main-flow">
        <h1 className="reportes-title">Reportes</h1>

        {/* Botones de filtro de tiempo */}
        <div className="filter-tabs-container">
          <div className="filter-tabs">
            <button className={`tab ${tabActiva === 'diario' ? 'active' : ''}`} onClick={() => setTabActiva('diario')}>Diario</button>
            <button className={`tab ${tabActiva === 'semanal' ? 'active' : ''}`} onClick={() => setTabActiva('semanal')}>Semanal</button>
            <button className={`tab ${tabActiva === 'mensual' ? 'active' : ''}`} onClick={() => setTabActiva('mensual')}>Mensual</button>
          </div>
        </div>

        {/* Card de la Gráfica */}
        <div className="chart-card">
          <ResponsiveContainer width="100%" height={220}>
            <PieChart>
              <Pie 
                data={datosGrafica[tabActiva]} 
                innerRadius={60} 
                outerRadius={85} 
                dataKey="value"
                paddingAngle={5}
              >
                {datosGrafica[tabActiva].map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
          <div className="chart-labels">
             {datosGrafica[tabActiva].map((item) => (
               <span key={item.name}>{item.value}% {item.name}</span>
             ))}
          </div>
        </div>

        {/* Fila de Totales */}
        <div className="stats-summary-row">
          <div className="summary-card">
            <span>Total General Gastado</span>
            <strong>$ 354.000</strong>
          </div>
          <div className="summary-card">
            <span>Total Aportes</span>
            <strong>$ 143.500</strong>
          </div>
          <div className="summary-card">
            <span>Balance Neto</span>
            <strong>$ 56.500</strong>
          </div>
        </div>

        {/* Tabla de Reportes */}
        <div className="table-container-card">
          <div className="table-header">
            <h3>Últimos Reportes:</h3>
            <button className="btn-export-small">Exportar a PDF</button>
          </div>
          <table className="custom-report-table">
            <thead>
              <tr>
                <th>Monto</th>
                <th>Categoría</th>
                <th>Grupo</th>
                <th>Fecha</th>
                <th>Aporte/Deuda</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>$ 220.000</td>
                <td>Comida</td>
                <td>Compañeros de Piso</td>
                <td>16/08/2025</td>
                <td>$ 110.000</td>
              </tr>
              <tr>
                <td>$ 80.000</td>
                <td>Ocio</td>
                <td>Amigos</td>
                <td>22/08/2025</td>
                <td>$ 20.000</td>
              </tr>
              <tr>
                <td>$ 54.000</td>
                <td>Salidas</td>
                <td>Amigos</td>
                <td>26/08/2025</td>
                <td>$ 13.500</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* PANEL DERECHO DE DETALLES (El gris del mockup) */}
      <aside className="reportes-details-sidebar">
        <h3 className="sidebar-title">Reportes Detallados:</h3>
        
        <div className="sidebar-search-box">
          <span>🔍</span>
          <select className="sidebar-select">
            <option>Comida</option>
            <option>Ocio</option>
          </select>
        </div>

        <div className="detail-content-card">
          <div className="detail-row">
            <strong>Nombre Reporte:</strong> <span>Cena en Restaurante</span>
          </div>
          <div className="detail-row">
            <strong>Categoría:</strong> <span>Comida</span>
          </div>
          <div className="detail-row">
            <strong>Fecha:</strong> <span>18/10/2025</span>
          </div>
          <div className="detail-row">
            <strong>Grupo:</strong> <span>Viaje a la Costa</span>
          </div>
          <div className="detail-description">
            <strong>Descripción:</strong>
            <p>Cena en Restaurante con Amigos en el viaje a la Costa.</p>
          </div>
          <div className="detail-amount-box">
            <strong>Monto:</strong> <span>$ 150.000</span>
          </div>
        </div>

        <button className="btn-pdf-large">Exportar a PDF</button>
      </aside>

    </div>
  );
};

export default Reportes;