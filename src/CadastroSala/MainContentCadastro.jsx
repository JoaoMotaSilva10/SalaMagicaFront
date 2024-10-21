import React, { useState } from 'react';
import './MainContentCadastro.css';

function MainContentCadastro() {
  const [activeButtons, setActiveButtons] = useState(new Set());

  const buttonTimes = [
    '08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00',
    '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00'
  ];

  // Função para selecionar ou desmarcar horários
  const handleButtonClick = (index) => {
    setActiveButtons((prevActiveButtons) => {
      const newActiveButtons = new Set(prevActiveButtons);
      if (newActiveButtons.has(index)) {
        newActiveButtons.delete(index); // Se o horário já estiver selecionado, remove-o
      } else {
        newActiveButtons.add(index); // Caso contrário, adiciona o horário
      }
      return newActiveButtons;
    });
  };

  return (
    <div className="main-content">
      <form>
        <div className="header">
          <div className="header-text">
            <h1 className="cadastrar">Hora de atualizar a Página!</h1>
          </div>
          <button className="teste">Avançar</button>
        </div>

        {/* Seletor de dia específico na parte de cima */}
        <div className="cadastro">
          <h2 className="tipo">Qual será o dia específico?</h2>
          <select className="inpcad">
            <option value="1">Segunda</option>
            <option value="2">Terça</option>
            <option value="3">Quarta</option>
            <option value="4">Quinta</option>
            <option value="5">Sexta</option>
          </select>
        </div>

        {/* Seletor de horários */}
        <div className="cadastro">
          <h2 className="tipo">Qual será o horário específico?</h2>
        </div>
        <div className="galeriabuttons">
          {[...Array(7)].map((_, index) => (
            <button
              key={index}
              type="button"
              className={`horarios ${activeButtons.has(index) ? 'active' : ''}`}
              onClick={() => handleButtonClick(index)}
            >
              {buttonTimes[index]}
            </button>
          ))}
        </div>
        <div className="galeriabuttons2">
          {[...Array(7)].map((_, index) => (
            <button
              key={index + 7}
              type="button"
              className={`horarios ${activeButtons.has(index + 7) ? 'active' : ''}`}
              onClick={() => handleButtonClick(index + 7)}
            >
              {buttonTimes[index + 7]}
            </button>
          ))}
        </div>

        {/* Seletor de tipo de sala */}
        <div className="cadastro">
          <h2 className="tipo">Qual tipo de sala estará disponível?</h2>
          <select className="inpcad">
            <option value="1">Sala de informática</option>
            <option value="2">Sala de informática para internet</option>
            <option value="3">Sala de Redes</option>
            <option value="4">Sala de Telecomunicações</option>
          </select>
        </div>

        {/* Seletor de sala específica */}
        <div className="cadastro">
          <h2 className="tipo">Qual sala específica?</h2>
          <div className="linha-inputs">
            <select className="inpcad">
              <option value="1">Sala 1</option>
              <option value="2">Sala 2</option>
              <option value="3">Sala 3</option>
              <option value="4">Sala 4</option>
            </select>
          </div>
        </div>

      </form>
    </div>
  );
}

export default MainContentCadastro;
