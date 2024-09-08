import React from 'react';
import './Sidebar.css';
import { Link } from 'react-router-dom';
import Logo from './assets/Logo.png';
import supportIcon from './assets/frame1.svg'; 
import analysisIcon from './assets/frame2.svg';
import roomIcon from './assets/frame3.svg';
import equipmentIcon from './assets/frame4.svg';
import statusIcon from './assets/frame5.svg';
import adminIcon from './assets/frame6.svg';
import homeIcon from './assets/frame7.svg';

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="logo">
      <img src={Logo}/>
        <h2>Sala Mágica</h2>
      </div>
      
      <ul>
      <Link to="/Login">  <li>
      <img src={homeIcon}/> <i className="icon-home"></i> Início 
        </li></Link>
        <li>
        <img src={supportIcon}></img> <i className="icon-reservas"></i> Análise de Reservas
        </li>
        <li>
        <img src={equipmentIcon}></img> <i className="icon-salas"></i> Cadastro de Sala
        </li>
        <li>
        <img src={analysisIcon}></img>  <i className="icon-recursos"></i> Status de Recursos
        </li>
        <li>
        <img src={adminIcon}></img>  <i className="icon-admin"></i> Cadastro de Equipamento
        </li>
        <li>
        <img src={roomIcon}></img>  <i className="icon-suporte"></i> Suporte
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
