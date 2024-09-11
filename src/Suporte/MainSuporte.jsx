
import React, { useState } from 'react';
import './MainSuporte.css';

const MainSuporte = () => {
  const [expandedRow, setExpandedRow] = useState(null);


  const data = [
    { id: 1, nome: 'João Silva', rm: '12345', tipoReclamacao: 'Produto defeituoso', reclamacao: 'O produto chegou com defeito e não funciona.' },
    { id: 2, nome: 'Maria Oliveira', rm: '67890', tipoReclamacao: 'Entrega atrasada', reclamacao: 'O produto foi entregue com uma semana de atraso.' },
    { id: 1, nome: 'João Silva', rm: '12345', tipoReclamacao: 'Produto defeituoso', reclamacao: 'O produto chegou com defeito e não funciona.' },
    { id: 2, nome: 'Maria Oliveira', rm: '67890', tipoReclamacao: 'Entrega atrasada', reclamacao: 'O produto foi entregue com uma semana de atraso.' },
    { id: 1, nome: 'João Silva', rm: '12345', tipoReclamacao: 'Produto defeituoso', reclamacao: 'O produto chegou com defeito e não funciona.' },
    { id: 2, nome: 'Maria Oliveira', rm: '67890', tipoReclamacao: 'Entrega atrasada', reclamacao: 'O produto foi entregue com uma semana de atraso.' },
    { id: 1, nome: 'João Silva', rm: '12345', tipoReclamacao: 'Produto defeituoso', reclamacao: 'O produto chegou com defeito e não funciona.' },
    { id: 2, nome: 'Maria Oliveira', rm: '67890', tipoReclamacao: 'Entrega atrasada', reclamacao: 'O produto foi entregue com uma semana de atraso.' },
    { id: 1, nome: 'João Silva', rm: '12345', tipoReclamacao: 'Produto defeituoso', reclamacao: 'O produto chegou com defeito e não funciona.' },
    { id: 2, nome: 'Maria Oliveira', rm: '67890', tipoReclamacao: 'Entrega atrasada', reclamacao: 'O produto foi entregue com uma semana de atraso.' },
    { id: 1, nome: 'João Silva', rm: '12345', tipoReclamacao: 'Produto defeituoso', reclamacao: 'O produto chegou com defeito e não funciona.' },
    { id: 2, nome: 'Maria Oliveira', rm: '67890', tipoReclamacao: 'Entrega atrasada', reclamacao: 'O produto foi entregue com uma semana de atraso.' },
    { id: 1, nome: 'João Silva', rm: '12345', tipoReclamacao: 'Produto defeituoso', reclamacao: 'O produto chegou com defeito e não funciona.' },
    { id: 2, nome: 'Maria Oliveira', rm: '67890', tipoReclamacao: 'Entrega atrasada', reclamacao: 'O produto foi entregue com uma semana de atraso.' },

  ];

  const handleToggle = (id) => {
    setExpandedRow(expandedRow === id ? null : id);
  };

  return (
    <div className="container">
        <h1 className="hora">Hora de responder as Reclamações!</h1>
        <div className="table-wrapper">
      <table className="support-table">
        <thead>
          <tr>
            <th>Nome</th>
            <th>RM</th>
            <th>Tipo de Reclamação</th>
            <th>Ver Reclamação</th>
          </tr>
        </thead>
        <tbody>
          {data.map(item => (
            <React.Fragment key={item.id}>
              <tr>
                <td>{item.nome}</td>
                <td>{item.rm}</td>
                <td>{item.tipoReclamacao}</td>
                <td>
                  <button className="seta" onClick={() => handleToggle(item.id)}>
                    {expandedRow === item.id ? '▲' : '▼'}
                  </button>
                </td>
              </tr>
              {expandedRow === item.id && (
                <tr>
                  <td colSpan="4">
                    <div className="reclamacao-details">
                      {item.reclamacao}
                    </div>
                  </td>
                </tr>
              )}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
    </div>
  );
};

export default MainSuporte;
