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
        <li>
      <img src={homeIcon}/> <i className="icon-home"></i><a href="/Login" className="Inicio"> Início </a>
        </li>
        <li>
        <img src={supportIcon}></img> <i className="icon-reservas"></i><a href="/Login" className="Inicio"> Análise de Reservas </a>
        </li>
        <li>
        <img src={equipmentIcon}></img> <i className="icon-salas"></i><a href="/Login" className="Inicio"> Cadastro de Sala </a>
        </li>
        <li>
        <img src={analysisIcon}></img>  <i className="icon-recursos"></i> <a href="/Login" className="Inicio">Status de Recursos </a>
        </li>
        <li>
        <img src={adminIcon}></img>  <i className="icon-admin"></i> <a href="/Login" className="Inicio">Cadastro de Equipamento </a>
        </li>
        <li>
        <img src={roomIcon}></img>  <i className="icon-suporte"></i> <a href="/Login" className="Inicio"> Suporte </a>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
