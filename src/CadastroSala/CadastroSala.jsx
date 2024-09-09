import React from 'react';
import './Cadastrosala.css';
import Sidebar from '../Sidebar/Sidebar';
import MainContentCad from './MainContentCadastro'

const CadastroSala = () => {
  return (
    <div className="app-container">
       <Sidebar />
      <MainContentCad />
    </div>
);
};
export default CadastroSala