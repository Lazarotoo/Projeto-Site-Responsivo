import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    // Container geral do footer com classe para estilização
    <div className="f-wrapper">
      {/* Container interno com padding, largura controlada e layout flex centralizado */}
      <div className="paddings innerWidth flexCenter f-container">

        {/* Lado esquerdo do footer, layout em coluna alinhado ao início */}
        <div className="flexColStart f-left">
          {/* Logo da empresa com largura fixa */}
          <img src="./logo2.png" alt="" width={120} />

          {/* Texto secundário explicativo */}
          <span className="secondaryText">
            Our vision is to make all people <br />
            the best place to live for them.
          </span>
        </div>

        {/* Lado direito do footer, layout em coluna alinhado ao início */}
        <div className="flexColStart f-right">
          {/* Título principal da seção de informações */}
          <span className="primaryText">Information</span>

          {/* Endereço com estilo de texto secundário */}
          <span className="secondaryText">145 New York, FL 5467, USA</span>

          {/* Menu com opções, usando flexbox para espaçamento entre itens */}
          <div className="flexCenter f-menu">
            <span>Property</span>
            <span>Services</span>
            <span>Product</span>
            <span>About Us</span>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Footer;
