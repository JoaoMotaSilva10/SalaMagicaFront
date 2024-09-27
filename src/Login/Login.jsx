import React from 'react';
import './Login.css';
import { Link } from 'react-router-dom';
import Logo from '../assets/Logobranca.svg';

const Login = () => {
  return (
    <div className="login-container">
      <div className="login-image">
      </div>
      <div className="login-form"> 
        <div className="login-header">
          <img src={Logo} className="Logo"/>
 <h1 className="sala">Sala Mágica</h1>
          <p>É ótimo te ver novamente!</p>
        </div>
        <form>
          <div className="input-group">
            <label htmlFor="id">ID</label>
            <input type="text" id="id" placeholder="Digite o ID" />
          </div>
          <div className="input-group">
            <label htmlFor="password">Senha</label>
            <input type="password" id="password" placeholder="Digite a senha" />
          </div>
          <div className="options">
            <div className="remember">
              <label class="switch">
              <input type="checkbox" id="remember" />
              <span class="slider"></span>
              </label>
              <label htmlFor="remember" className="lembrlog">Lembrar login</label>
            </div>
            <a href="#" className="forgot-password">Esqueceu a senha?</a>
          </div>
          <Link to={'/'}><button type="submit" className="login-button">Entrar</button></Link>
        </form> 
      </div>
    </div>
  );
};

export default Login;