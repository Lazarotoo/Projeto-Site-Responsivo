import React, { useState } from "react";
// Importa React e o hook useState para gerenciar estado interno dos componentes

import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
  AccordionItemState,
} from "react-accessible-accordion";
// Importa componentes do pacote react-accessible-accordion para criar acordeão acessível

import "react-accessible-accordion/dist/fancy-example.css";
// Importa estilos padrão para o acordeão

import {
  MdOutlineArrowDropDown,
  MdOutlineArrowDropDownCircle,
} from "react-icons/md";
// Importa ícones do Material Design para setas dropdown

import data from "../../utils/accordion.jsx";
// Importa os dados do acordeão (conteúdo das seções) do arquivo accordion.jsx

import "./Value.css";
// Importa o CSS customizado para este componente

const Value = () => {
  return (
    <section id="value" className="v-wrapper">
      {/* Seção principal com id "value" e classe para estilização */}

      <div className="paddings innerWidth flexCenter v-container">
        {/* Container interno com padding, largura limitada, alinhamento flexível e classe v-container */}

        {/* left side */}
        <div className="v-left">
          {/* Lado esquerdo da seção */}

          <div className="image-container">
            {/* Container para a imagem */}

            <img src="./value.png" alt="" />
            {/* Imagem ilustrativa da seção */}
          </div>
        </div>

        {/* right */}
        <div className="flexColStart v-right">
          {/* Lado direito com layout coluna e alinhamento ao início */}

          <span className="orangeText">Our Value</span>
          {/* Texto pequeno destacado em laranja */}

          <span className="primaryText">Value We Give to You</span>
          {/* Texto principal com destaque */}

          <span className="secondaryText">
            We always ready to help by providijng the best services for you.
            <br />
            We beleive a good blace to live can make your life better
          </span>
          {/* Texto secundário explicativo com quebra de linha */}

          <Accordion
            className="accordion"
            allowMultipleExpanded={false}
            preExpanded={[0]}
          >
            {/* Componente Accordion com classe, permitindo somente um item expandido e o primeiro aberto inicialmente */}

            {data.map((item, i) => {
              const [className, setClassName] = useState(null);
              // Estado local para controlar a classe CSS do item (expandido ou recolhido)

              return (
                <AccordionItem className={`accordionItem ${className}`} uuid={i} key={i}>
                  {/* Cada item do acordeão recebe uma classe dinâmica e um uuid para controle */}

                  <AccordionItemHeading>
                    {/* Cabeçalho clicável do item */}

                    <AccordionItemButton className="flexCenter accordionButton ">
                      {/* Botão do cabeçalho com alinhamento flexível */}

                      {/* just for getting state of item */}
                      <AccordionItemState>
                        {/* Componente que permite acessar o estado (expandido ou não) do item */}

                        {({ expanded }) =>
                          expanded
                            ? setClassName("expanded")
                            : setClassName("collapsed")
                          /* Atualiza a classe do item conforme seu estado */
                        }
                      </AccordionItemState>

                      <div className="flexCenter icon">{item.icon}</div>
                      {/* Exibe o ícone do item com alinhamento flex */}

                      <span className="primaryText">
                        {item.heading}
                      </span>
                      {/* Título principal do item */}

                      <div className="flexCenter icon">
                        <MdOutlineArrowDropDown size={20} />
                        {/* Ícone de seta para indicar que é um dropdown */}
                      </div>
                    </AccordionItemButton>
                  </AccordionItemHeading>

                  <AccordionItemPanel>
                    {/* Painel que aparece ao expandir o item */}

                    <p className="secondaryText">{item.detail}</p>
                    {/* Detalhes do item em texto secundário */}
                  </AccordionItemPanel>
                </AccordionItem>
              );
            })}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default Value;
// Exporta o componente Value para uso em outros módulos
