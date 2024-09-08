import React from 'react';
import './MainContent.css';
import im1 from './assets/statusrec.png';
import im2 from './assets/cadastrosala.png';
import im3 from './assets/analise.png';

function MainContent() {
  return (
    <div className="main-content">
      <div className="welcome-text">
        <h1>Bem-vindo(a) de volta, </h1>
        </div>
          <h1 className="gerente">  Gerente!</h1>
      <div className="image-gallery">
      <img src={im2} classname="img1"/>
      <img src={im1}/>
      <img src={im3}/>
      </div>
    </div>
  );
}

export default MainContent;
