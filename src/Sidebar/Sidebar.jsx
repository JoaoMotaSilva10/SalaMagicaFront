import React from 'react';
import './Sidebar.css';
import { Link } from 'react-router-dom';
import Logo from '../assets/Logobranca.svg';
import supportIcon from '../assets/frame1.svg'; 
import analysisIcon from '../assets/frame2.svg';
import roomIcon from '../assets/frame3.svg';
import equipmentIcon from '../assets/frame4.svg';
import statusIcon from '../assets/frame5.svg';
import adminIcon from '../assets/frame6.svg';
import homeIcon from '../assets/frame7.svg';

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="logo">
      <img src={Logo}/>
        <h2>Sala Mágica</h2>
      </div>
      <ul>
      <Link to={'/'} className="custom-button"> <li>
      <img src={homeIcon} /> <i className="icon-home"></i> Início 
        </li></Link>
        <Link to={'/Reservas'} className="custom-button"> <li>
         <img src={supportIcon}></img> <i className="icon-reservas"></i> Análise de Reservas 
        </li></Link>
        <Link to={'/CadastroSala'} className="custom-button">   <li>
        <img src={equipmentIcon}></img> <i className="icon-salas"></i>Atualização de Sala 
        </li></Link>
        <Link to={'/equipamento'} className="custom-button"> <li>
        <img src={adminIcon}></img>  <i className="icon-admin"></i> Cadastro de Equipamento 
        </li></Link>
        <Link to={'/Suporte'} className="custom-button"><li>
        <img src={roomIcon}></img>  <i className="icon-suporte"></i> Resposta de Suporte 
        </li></Link>
        <Link to={'/Gerenciador'} className="custom-button"><li>
        <img src={roomIcon}></img>  <i className="icon-suporte"></i> Cadastro de gerenciadores
        </li></Link>
      </ul>
    </div>
  );
}

export default Sidebar;
