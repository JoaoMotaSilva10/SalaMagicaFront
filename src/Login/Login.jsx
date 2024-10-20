import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Login.css';
import Logo from '../assets/Logobranca.svg';

const Login = () => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:8080/login", { 
        email: email,
        senha: senha,
      });

      if (response.status === 200) {
        localStorage.setItem('usuario', JSON.stringify(response.data));
        alert("Login realizado com sucesso!");
        navigate('/Inicio'); // Redireciona para a página de perfil
      }
    } catch (error) {
      setErrorMessage("Email ou senha incorretos.");
      console.error('Error during login:', error.response || error.message);
    }
};


  return (
    <div className="login-container">
      <div className="login-image"></div>
      <div className="login-form"> 
        <div className="login-header">
          <img src={Logo} className="Logo" alt="Logo" />
          <h1 className="sala">Sala Mágica</h1>
          <p>É ótimo te ver novamente!</p>
        </div>
        <form onSubmit={handleLogin}>
          <div className="input-group">
            <label htmlFor="email">ID</label>
            <input id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Digite o ID" />
          </div>
          <div className="input-group">
            <label htmlFor="password">Senha</label>
            <input id="password"
              type="password"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              required
              placeholder="Digite a senha" />
          </div>
          {errorMessage && <p className="text-red-500">{errorMessage}</p>} {/* Exibe mensagem de erro */}
          <div className="options">
            <div className="remember">
              <label className="switch">
                <input type="checkbox" id="remember" />
                <span className="slider"></span>
              </label>
              <label htmlFor="remember" className="lembrlog">Lembrar login</label>
            </div>
            <a href="#" className="forgot-password">Esqueceu a senha?</a>
          </div>
          <button type="submit" className="login-button">Entrar</button>
        </form> 
      </div>
    </div>
  );
};

export default Login;
