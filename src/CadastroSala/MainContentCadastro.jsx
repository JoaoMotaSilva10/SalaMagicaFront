import React from 'react';
import './MainContentCadastro.css';
import { Link } from 'react-router-dom';

function MainContentCadastro() {
  return ( 
    <div className="main-content">
      <form>

        <h1 className="cadastrar"> Hora de cadastrar </h1>
          <h1 className="gerente">  a sala!</h1>
          <div className="cadastro">
        <h2 className="tipo">Qual tipo de sala você gostaria de cadastrar?</h2>
      </div>
    <select className="inpcad">
        <option value="1"> Computador de informática </option>
        <option value="2"> Opção 2 </option>
        <option value="3"> Opção 3 </option>
        <option value="4"> Opção 4 </option>
    </select>

      </form>
      </div>
  );
}

export default MainContentCadastro;
