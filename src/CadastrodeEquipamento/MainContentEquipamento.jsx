import React, { useState } from 'react';
import './MainContentEquipamento.css';

const MainContentEquipamento = () => {
  const [visualizar, setVisualizar] = useState(false);

  // Função para alternar entre cadastro e visualização de recurso
  const toggleVisualizar = () => {
    setVisualizar(!visualizar);
  };

  return (
    <div className="main-container">
      <h1>Hora de cadastrar/visualizar recursos!</h1>

      {/* Botões para alternar entre cadastro e visualização */}
      <div className="button-container">
        <button className={!visualizar ? "active" : ""} onClick={() => setVisualizar(false)}>
          Cadastro de recurso
        </button>
        <button className={visualizar ? "active" : ""} onClick={toggleVisualizar}>
          Visualização de recurso
        </button>
      </div>

      {/* Formulário de Cadastro de Recurso */}
      {!visualizar && (
        <form className="cadastro-form">
          <div className="form-group">
            <label>Qual será o equipamento que você deseja cadastrar?</label>
            <input type="text" placeholder="Digite o nome do equipamento" />
          </div>
          <div className="form-group">
            <label>Qual será a sala em que se encontra?</label>
            <input type="text" placeholder="Digite a sala" />
          </div>

          <button type="submit" className="submit-button">
            Cadastrar Equipamento
          </button>
        </form>
      )}

      {/* Tabela de Visualização de Recursos */}
      {visualizar && (
        <table className="resource-table">
          <thead>
            <tr>
              <th>Equipamento</th>
              <th>Situação</th>
              <th>Problema</th>
              <th>Quantidade</th>
            </tr>
          </thead>
          <tbody>
            {/* Dados de exemplo */}
            <tr>
              <td>Projetor</td>
              <td>Funcionando</td>
              <td>Nenhum</td>
              <td>2</td>
            </tr>
            <tr>
              <td>Computador</td>
              <td>Com defeito</td>
              <td>Problema na placa mãe</td>
              <td>5</td>
            </tr>
          </tbody>
        </table>
      )}
    </div>
  );
};

export default MainContentEquipamento
