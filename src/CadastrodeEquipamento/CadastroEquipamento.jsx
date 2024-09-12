import React from 'react';
import './MainContentEquipamento.css';
import Sidebar from '../Sidebar/Sidebar';
import MainContentEquip from './MainContentEquipamento'

const CadastroEquipamento = () => {
  return (
    <div className="app-container">
       <Sidebar />
      <MainContentEquip />
    </div>
);
};
export default CadastroEquipamento