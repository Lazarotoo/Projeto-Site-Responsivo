import React from "react";
// Importa o arquivo CSS com estilos do componente
import "./Contact.css";
// Importa ícones do React Icons para usar nos botões de contato
import { MdCall } from "react-icons/md";
import { BsFillChatDotsFill } from "react-icons/bs";
import { HiChatBubbleBottomCenter } from "react-icons/hi2";

const Contact = () => {
  return (
    // Container principal com id para navegação e classe para estilização
    <div id="contact-us" className="c-wrapper">
      {/* Container interno com paddings, largura máxima e layout flex para centralizar */}
      <div className="paddings innerWidth flexCenter c-container">
        
        {/* Lado esquerdo do layout, coluna alinhada ao início */}
        <div className="flexColStart c-left">
          {/* Texto de destaque em laranja */}
          <span className="orangeText">Our Contact Us</span>
          {/* Título principal */}
          <span className="primaryText">Easy to contact us</span>
          {/* Texto secundário explicativo */}
          <span className="secondaryText">
            We always ready to help by providijng the best services for you. We
            beleive a good blace to live can make your life better{" "}
          </span>

          {/* Container vertical para os modos de contato */}
          <div className="flexColStart contactModes">
            
            {/* Primeira linha dos modos de contato */}
            <div className="flexStart row">
              
              {/* Primeira opção de contato: Call */}
              <div className="flexColCenter mode">
                {/* Linha horizontal com ícone e detalhes */}
                <div className="flexStart">
                  {/* Ícone centralizado */}
                  <div className="flexCenter icon">
                    <MdCall size={25} />
                  </div>
                  {/* Coluna com texto detalhado */}
                  <div className="flexColStart detail">
                    <span className="primaryText">Call</span>
                    <span className="secondaryText">021 123 145 14</span>
                  </div>
                </div>
                {/* Botão para ação "Call now" */}
                <div className="flexCenter button">Call now</div>
              </div>

              {/* Segunda opção de contato: Chat */}
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <BsFillChatDotsFill size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Chat</span>
                    <span className="secondaryText">021 123 145 14</span>
                  </div>
                </div>
                <div className="flexCenter button">Chat now</div>
              </div>
            </div>

            {/* Segunda linha dos modos de contato */}
            <div className="flexStart row">
              
              {/* Terceira opção: Video Call */}
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <BsFillChatDotsFill size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Video Call</span>
                    <span className="secondaryText">021 123 145 14</span>
                  </div>
                </div>
                <div className="flexCenter button">Video Call now</div>
              </div>

              {/* Quarta opção: Message */}
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <HiChatBubbleBottomCenter size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Message</span>
                    <span className="secondaryText">021 123 145 14</span>
                  </div>
                </div>
                <div className="flexCenter button">Message now</div>
              </div>
            </div>
          </div>
        </div>

        {/* Lado direito do layout, alinhado à direita */}
        <div className="flexEnd c-right">
          <div className="image-container">
            {/* Imagem ilustrativa da seção de contato */}
            <img src="./contact.jpg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
