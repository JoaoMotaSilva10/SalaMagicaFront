import React, { useState } from 'react';
import './Reservas.css';

// Dados de exemplo com IDs únicos
const roomsData = [
  { id: 1, reserva: "Sala de Informática", Sala: 4, usuario: "Gabriel Barbosa", pessoas: 4, horario: "07:45" },
  { id: 2, reserva: "Sala de Informática", Sala: 4, usuario: "Gabriel Barbosa", pessoas: 4, horario: "08:30" },
  { id: 3, reserva: "Sala de Informática", Sala: 4, usuario: "Gabriel Barbosa", pessoas: 4, horario: "09:00" },
  { id: 4, reserva: "Sala de Informática",Sala: 4, usuario: "Gabriel Barbosa", pessoas: 4, horario: "09:30" },
  { id: 5, reserva: "Sala de Informática",Sala: 4, usuario: "Gabriel Barbosa", pessoas: 4, horario: "10:00" },
  { id: 6, reserva: "Sala de Informática",Sala: 4, usuario: "Gabriel Barbosa", pessoas: 4, horario: "10:30" },
  { id: 7, reserva: "Sala de Informática",Sala: 4, usuario: "Gabriel Barbosa", pessoas: 4, horario: "11:00" },
  { id: 6, reserva: "Sala de Informática",Sala: 4, usuario: "Gabriel Barbosa", pessoas: 4, horario: "10:30" },
  { id: 7, reserva: "Sala de Informática",Sala: 4, usuario: "Gabriel Barbosa", pessoas: 4, horario: "11:00" },
  { id: 6, reserva: "Sala de Informática",Sala: 4, usuario: "Gabriel Barbosa", pessoas: 4, horario: "10:30" },
  { id: 7, reserva: "Sala de Informática",Sala: 4, usuario: "Gabriel Barbosa", pessoas: 4, horario: "11:00" },
  { id: 6, reserva: "Sala de Informática",Sala: 4, usuario: "Gabriel Barbosa", pessoas: 4, horario: "10:30" },
  { id: 7, reserva: "Sala de Informática",Sala: 4, usuario: "Gabriel Barbosa", pessoas: 4, horario: "11:00" },
  { id: 6, reserva: "Sala de Informática",Sala: 4, usuario: "Gabriel Barbosa", pessoas: 4, horario: "10:30" },
  { id: 7, reserva: "Sala de Informática",Sala: 4, usuario: "Gabriel Barbosa", pessoas: 4, horario: "11:00" },
];

const equipmentData = [
  { id: 1, reserva: "Projetor", usuario: "Lucas Silva", pessoas: 1, horario: "09:00" },
  { id: 2, reserva: "Microfone", usuario: "Ana Souza", pessoas: 1, horario: "10:00" },
  { id: 3, reserva: "Câmera", usuario: "Pedro Lima", pessoas: 1, horario: "11:00" },
  { id: 4, reserva: "Notebook", usuario: "Mariana Oliveira", pessoas: 1, horario: "12:00" },
  { id: 5, reserva: "Tablet", usuario: "Carlos Mendes", pessoas: 1, horario: "13:00" },
];

function Reservas() {
  const [activeTab, setActiveTab] = useState('salas');

  // Função para alternar entre as abas de Salas e Equipamentos
  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  // Renderização da tabela com os dados atuais
  const renderTable = (data) => (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>Reserva</th>
            <th>Sala</th>
            <th>Usuário</th>
            <th>Q. Pessoas</th>
            <th>Horário</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td data-label="Reserva">{item.reserva}</td>
              <td data-label="Sala">{item.Sala}</td>
              <td data-label="Usuário">{item.usuario}</td>
              <td data-label="Q. Pessoas">{item.pessoas}</td>
              <td data-label="Horário">{item.horario}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  const data = activeTab === 'salas' ? roomsData : equipmentData;

  return (
    <div className="reservations-container">
      <h1 className="analisar">Vamos analisar os pedidos </h1>
      <h1 className="Reservas"> de Reservas!</h1>

      <div className="tabs">
        <button
          className={activeTab === 'salas' ? 'active' : ''}
          onClick={() => handleTabChange('salas')}
        >
          Salas
        </button>
        <button
          className={activeTab === 'equipamentos' ? 'active' : ''}
          onClick={() => handleTabChange('equipamentos')}
        >
          Equipamentos
        </button>
      </div>
      {renderTable(data)}
    </div>
  );
}

export default Reservas;
