import React from "react";
import "./GetStarted.css"; // Importa os estilos CSS para este componente

const GetStarted = () => {
  return (
    // Div principal do componente com id e classe para estilização e navegação
    <div id="get-started" className="g-wrapper">
      {/* Container com padding e largura interna definida */}
      <div className="paddings innerWidth g-container">
        {/* Container centralizado com layout em coluna e estilos do CSS .inner-container */}
        <div className="flexColCenter inner-container">
          {/* Título principal com estilo de texto primário */}
          <span className="primaryText">Get started with Homyz</span>

          {/* Texto secundário com explicação e quebra de linha */}
          <span className="secondaryText">
            Subscribe and find super attractive price quotes from us.
            <br />
            Find your residence soon
          </span>

          {/* Botão estilizado, contém um link mailto para contato por email */}
          <button className="button" href>
            <a href="mailto:zainkeepscode@gmail.com">Get Started</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
