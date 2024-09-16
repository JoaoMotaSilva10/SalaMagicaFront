import React, { useState } from 'react';
import './Reservas.css';

// Dados de exemplo
const initialRoomsData = [
  { id: 1, reserva: "Sala de Informática", Sala: 4, usuario: "Gabriel Barbosa", pessoas: 4, data: "01/01/24", horario: "07:45" },
  { id: 2, reserva: "Sala de Informática", Sala: 4, usuario: "Gabriel Barbosa", pessoas: 4, data: "01/01/24", horario: "08:30" },
  { id: 3, reserva: "Sala de Informática", Sala: 4, usuario: "Gabriel Barbosa", pessoas: 4, data: "01/01/24", horario: "09:00" },
  { id: 4, reserva: "Sala de Informática", Sala: 4, usuario: "Gabriel Barbosa", pessoas: 4, data: "01/01/24", horario: "09:30" },
  { id: 5, reserva: "Sala de Informática", Sala: 4, usuario: "Gabriel Barbosa", pessoas: 4, data: "01/01/24", horario: "10:00" },
  { id: 6, reserva: "Sala de Informática", Sala: 4, usuario: "Gabriel Barbosa", pessoas: 4, data: "01/01/24", horario: "10:30" },
  { id: 7, reserva: "Sala de Informática", Sala: 4, usuario: "Gabriel Barbosa", pessoas: 4, data: "01/01/24", horario: "11:00" },
  { id: 8, reserva: "Sala de Informática", Sala: 4, usuario: "Gabriel Barbosa", pessoas: 4, data: "01/01/24", horario: "11:00" },
  { id: 9, reserva: "Sala de Informática", Sala: 4, usuario: "Gabriel Barbosa", pessoas: 4, data: "01/01/24", horario: "11:00" },
  { id: 10, reserva: "Sala de Informática", Sala: 4, usuario: "Gabriel Barbosa", pessoas: 4, data: "01/01/24", horario: "11:00" },
];

const initialEquipmentData = []; // Equipamentos começam vazios

function Reservas() {
  const [roomsData, setRoomsData] = useState(initialRoomsData);
  const [equipmentData, setEquipmentData] = useState(initialEquipmentData);
  const [activeTab, setActiveTab] = useState('salas');
  const [searchFilters, setSearchFilters] = useState({
    reserva: '',
    Sala: '',
    usuario: '',
    pessoas: '',
    data: '',
    horario: ''
  });

  // Função para aprovar um item
  const approveItem = (item) => {
    setRoomsData((prevRoomsData) => {
      const updatedRoomsData = prevRoomsData.filter(room => room.id !== item.id);
      return updatedRoomsData;
    });

    setEquipmentData((prevEquipmentData) => {
      const updatedEquipmentData = [...prevEquipmentData, item];
      return updatedEquipmentData;
    });
  };

  // Função para rejeitar um item
  const rejectItem = (item) => {
    setRoomsData((prevRoomsData) => prevRoomsData.filter(room => room.id !== item.id));
  };

  // Função para atualizar o valor do filtro de pesquisa
  const handleSearch = (e) => {
    setSearchFilters({
      ...searchFilters,
      [e.target.name]: e.target.value
    });
  };

  // Função para filtrar os dados de acordo com os filtros de pesquisa
  const filteredEquipmentData = equipmentData.filter((item) => {
    return (
      item.reserva.toLowerCase().includes(searchFilters.reserva.toLowerCase()) &&
      String(item.Sala).includes(searchFilters.Sala) &&
      item.usuario.toLowerCase().includes(searchFilters.usuario.toLowerCase()) &&
      String(item.pessoas).includes(searchFilters.pessoas) &&
      item.data.includes(searchFilters.data) &&
      item.horario.includes(searchFilters.horario)
    );
  });

  // Renderização da tabela de pedidos (salas)
  const renderRoomsTable = () => (
    
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>Reserva</th>
            <th>Sala</th>
            <th>Usuário</th>
            <th>Q. Pessoas</th>
            <th>Data</th>
            <th>Horário</th>
            <th>Aprovação</th>
          </tr>
        </thead>
        <tbody>
          {roomsData.map((item) => (
            <tr key={item.id}>
              <td data-label="Reserva">{item.reserva}</td>
              <td data-label="Sala">{item.Sala}</td>
              <td data-label="Usuário">{item.usuario}</td>
              <td data-label="Q. Pessoas">{item.pessoas}</td>
              <td data-label="Data">{item.data}</td>
              <td data-label="Horário">{item.horario}</td>
              <td data-label="Aprovação">
                <button className="aprovar" onClick={() => approveItem(item)}>Aceitar</button>
                <button className="recusar" onClick={() => rejectItem(item)}>Recusar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  const renderEquipmentTable = () => (
    <div className="table-container">
      <div className="search-container">
        <input
          type="text"
          name="reserva"
          value={searchFilters.reserva}
          onChange={handleSearch}
          placeholder="Pesquisar Reserva"
          className="search-input1"
        />
        <input
          type="text"
          name="Sala"
          value={searchFilters.Sala}
          onChange={handleSearch}
          placeholder="Pesquisar Sala"
          className="search-input2"
        />
        <input
          type="text"
          name="usuario"
          value={searchFilters.usuario}
          onChange={handleSearch}
          placeholder="Pesquisar Usuário"
          className="search-input3"
        />
        <input
          type="text"
          name="pessoas"
          value={searchFilters.pessoas}
          onChange={handleSearch}
          placeholder="Pesquisar Q. Pessoas"
          className="search-input4"
        />
        <input
          type="text"
          name="data"
          value={searchFilters.data}
          onChange={handleSearch}
          placeholder="Pesquisar Data"
          className="search-input5"
        />
        <input
          type="text"
          name="horario"
          value={searchFilters.horario}
          onChange={handleSearch}
          placeholder="Pesquisar Horário"
          className="search-input6"
        />
      </div>

      <table>
        <thead>
          <tr>
            <th>Reserva</th>
            <th>Sala</th>
            <th>Usuário</th>
            <th>Q. Pessoas</th>
            <th>Data</th>
            <th>Horário</th>
          </tr>
        </thead>
        <tbody>
          {filteredEquipmentData.map((item) => (
            <tr key={item.id}>
              <td data-label="Reserva">{item.reserva}</td>
              <td data-label="Sala">{item.Sala}</td>
              <td data-label="Usuário">{item.usuario}</td>
              <td data-label="Q. Pessoas">{item.pessoas}</td>
              <td data-label="Data">{item.data}</td>
              <td data-label="Horário">{item.horario}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  return (
    <div className="reservations-container">
      <h1 className="analisar">Vamos analisar os pedidos </h1>
      <h1 className="Reservas"> de Reservas!</h1>

      <div className="tabs">
        <button
          className={activeTab === 'salas' ? 'active' : ''}
          onClick={() => setActiveTab('salas')}
        >
          Pedidos
        </button>
        <button
          className={activeTab === 'equipamentos' ? 'active' : ''}
          onClick={() => setActiveTab('equipamentos')}
        >
          Aprovação
        </button>
      </div>

      {activeTab === 'salas' ? renderRoomsTable() : renderEquipmentTable()}
    </div>
  );
}

export default Reservas;
