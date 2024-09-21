import React, { useState } from "react";
import "./MainContentGerenciador.css";

const MainContentGerenciador = () => {
  const [employees, setEmployees] = useState([
    { id: 1, name: "william lucas", role: "pogramador", salary: 4000 },
    { id: 2, name: "lucas dev", role: "analista", salary: 3000 },
    { id: 3, name: "giseli", role: "Gerente", salary: 20000 },
    { id: 1, name: "william lucas", role: "pogramador", salary: 4000 },
    { id: 2, name: "lucas dev", role: "analista", salary: 3000 },
    { id: 3, name: "giseli", role: "Gerente", salary: 20000 },
    { id: 1, name: "william lucas", role: "pogramador", salary: 4000 },
    { id: 2, name: "lucas dev", role: "analista", salary: 3000 },
    { id: 3, name: "giseli", role: "Gerente", salary: 20000 },
  ]);
  const [modalVisible, setModalVisible] = useState(false);
  const [currentEmployee, setCurrentEmployee] = useState(null);
  const [isEdit, setIsEdit] = useState(false);

  const handleAddEmployee = () => {
    setCurrentEmployee(null);
    setIsEdit(false);
    setModalVisible(true);
  };

  const handleEditEmployee = (employee) => {
    setCurrentEmployee(employee);
    setIsEdit(true);
    setModalVisible(true);
  };

  const handleDeleteEmployee = (id) => {
    setEmployees(employees.filter((employee) => employee.id !== id));
  };

  const handleSaveEmployee = (employee) => {
    if (isEdit) {
      setEmployees(
        employees.map((emp) => (emp.id === employee.id ? employee : emp))
      );
    } else {
      employee.id = employees.length + 1;
      setEmployees([...employees, employee]);
    }
    setModalVisible(false);
  };

  return (
    <div className="main-content">
      <h1 className="cadfunc">Hora de Cadastrar </h1>
      <h1 className="cadfunc2">os Funcionários!</h1>
      <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Email</th>
            <th>Senha</th>
            <th>Editar</th>
            <th>Excluir</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.name}</td>
              <td>{employee.role}</td>
              <td>{employee.salary}</td>
              <td>
                <button className="lapis" onClick={() => handleEditEmployee(employee)}>✏️</button>
              </td>
              <td>
                <button className="lapis" onClick={() => handleDeleteEmployee(employee.id)}>
                  🗑️
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {modalVisible && (
        <Modal
          employee={currentEmployee}
          onClose={() => setModalVisible(false)}
          onSave={handleSaveEmployee}
          isEdit={isEdit}
        />
      )} </div>
       <button className="add-button" onClick={handleAddEmployee}>
        Incluir
      </button>
    </div>
    
  );
};

const Modal = ({ employee, onClose, onSave, isEdit }) => {
  const [name, setName] = useState(employee?.name || "");
  const [role, setRole] = useState(employee?.role || "");
  const [salary, setSalary] = useState(employee?.salary || "");

  const handleSubmit = () => {
    const updatedEmployee = { id: employee?.id, name, role, salary };
    onSave(updatedEmployee);
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>{isEdit ? "Editar Funcionário" : "Adicionar Funcionário"}</h2>
        <label>
          ID:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label>
          Email:
          <input
            type="text"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          />
        </label>
        <label>
          Senha:
          <input
            type="text"
            value={salary}
            onChange={(e) => setSalary(e.target.value)}
          />
        </label>
        <button onClick={handleSubmit}>Salvar</button>
        <button onClick={onClose}>Cancelar</button>
      </div>
    </div>
  );
};

export default MainContentGerenciador;
