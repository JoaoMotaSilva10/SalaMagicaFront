import React from 'react';
import './MainContent.css';
import im1 from '../assets/statusrec.png';
import im2 from '../assets/cadastrosala.png';
import im3 from '../assets/analise.png';
import { Link } from 'react-router-dom';

function MainContent() {
  return ( 
    <div className="main-content">
      <div className="header-content">
          <h1 className="bem-vindo">Bem-vindo(a) de volta, </h1>
        <button className="teste">
          <Link to={'/Login'} className="custom-link">Sair da conta</Link>
        </button>
      </div>
      <h1 className="gerente">Gerente!</h1>
      <div className="image-gallery">
      <img src={im2} classname="img1"/>
      <img src={im1}/>
      <img src={im3}/>
      </div>
    </div>
  );
}

export default MainContent;
