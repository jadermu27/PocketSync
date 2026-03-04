import React from 'react';
import './Inicio.css';
import { Map, Home } from 'lucide-react';

const Inicio = () => {
  return (
    <div className="inicio-page-container">
      
      <div className="main-content-flow">
        <h1 className="welcome-title">Bienvenido a PocketSync</h1>
        
        <div className="balance-section">
          <div className="balance-tab-decorator"></div>
          <div className="balance-card-main">
            <div>
              <h2 style={{margin:0, fontSize:'24px'}}>Balance Total</h2>
              <div className="balance-amount-text">$ 123.450</div>
            </div>
            <div className="profile-circle-large">
              <img src="https://via.placeholder.com/90" alt="user" style={{width:'100%'}} />
            </div>
          </div>
        </div>

        <h3 className="section-header">Grupos Activos</h3>
        <div className="groups-layout">
          <div className="group-item-card">
            <div style={{background: 'white', padding: '10px', borderRadius: '50%', display: 'flex'}}><Map size={24}/></div>
            <div>
              <div style={{fontWeight: 'bold'}}>Viaje a la Costa</div>
              <div style={{color: '#c2410c', fontSize: '13px', fontWeight: 'bold'}}>Deudas Pendientes $ 25.000</div>
            </div>
          </div>
          <div className="group-item-card">
            <div style={{background: 'white', padding: '10px', borderRadius: '50%', display: 'flex'}}><Home size={24}/></div>
            <div style={{fontWeight: 'bold', fontSize: '18px'}}>Compañeros de Casa</div>
          </div>
        </div>

        <h3 className="section-header">Últimos Movimientos</h3>
        <div className="transactions-container">
          <div className="transaction-row">
            <span><b>Pago:</b> Cena</span>
            <span style={{color: '#f06400', fontWeight: 'bold'}}>$ 18.000</span>
          </div>
          <div className="transaction-row">
            <span><b>Pago:</b> Mercado</span>
            <span style={{color: '#f06400', fontWeight: 'bold'}}>$ 350.000</span>
          </div>
        </div>
      </div>

      <div className="side-widgets-column">
        <div className="info-widget-card">
          <h3 style={{textAlign:'center'}}>Notificaciones</h3>
          <ul>
            <li>• Juan añadió un nuevo gasto de $ 15.000</li>
            <li>• María te envió una invitación de grupo</li>
          </ul>
        </div>
      </div>

    </div>
  );
};

export default Inicio;