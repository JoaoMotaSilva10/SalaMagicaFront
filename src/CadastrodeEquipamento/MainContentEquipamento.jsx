import React, { useState } from 'react';

const MainContentEquipamento = () => {
  const [equipamento, setEquipamento] = useState(''); // Armazena o equipamento selecionado
  const [tabela, setTabela] = useState([
    { nome: 'Computador de informatica', quantidade: 2 },
    { nome: 'Data Show', quantidade: 1 },
    { nome: 'Chromebook', quantidade: 8 },
  ]); // Armazena os equipamentos cadastrados

  const handleCadastro = () => {
    if (equipamento) {
      // Verifica se o equipamento já existe na tabela
      const index = tabela.findIndex((item) => item.nome === equipamento);
      if (index !== -1) {
        // Atualiza a quantidade
        const novaTabela = [...tabela];
        novaTabela[index].quantidade += 1;
        setTabela(novaTabela);
      } else {
        // Adiciona um novo equipamento
        setTabela([...tabela, { nome: equipamento, quantidade: 1 }]);
      }
    }
  };

  return (
    <div className="main-content">
      <form>
        <div className="header">
          <div className="header-text">
            <h1 className="cadastrar">Hora de visualizar e cadastrar equipamentos!</h1>
          </div>
        </div>
        <div className="cadastro">
          <h2 className="tipo">Qual tipo de equipamento você gostaria de cadastrar?</h2>
          <select
            className="inpcad"
            value={equipamento}
            onChange={(e) => setEquipamento(e.target.value)}
          >
            <option value="">Selecione um equipamento</option>
            <option value="Computador de informatica">Computador de informática</option>
            <option value="Data Show">Data Show</option>
            <option value="Chromebook">Chromebook</option>
          </select>
        </div>

        <button className="cadastra" type="button" onClick={handleCadastro}>
          Cadastrar
        </button>

        {/* Tabela de visualização dos equipamentos */}
        <table>
          <thead>
            <tr>
              <th>Equipamento</th>
              <th>Quantidade</th>
            </tr>
          </thead>
          <tbody>
            {tabela.map((item, index) => (
              <tr key={index}>
                <td>{item.nome}</td>
                <td>{item.quantidade}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </form>
    </div>
  );
};

export default MainContentEquipamento;