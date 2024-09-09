import React from 'react';
import './MainContentCadastro.css';
import { Link } from 'react-router-dom';

function MainContentCadastro() {
  return ( 
    <div className="main-content">
        <h1 className="cadastrar"> Hora de cadastrar </h1>
          <h1 className="gerente">  a sala!</h1>
          <div className="cadastro">
        <h2 className="tipo">Qual tipo de sala você gostaria de cadastrar?</h2>
      </div>
      
      </div>
  );
}

export default MainContentCadastro;
