import React, { useState } from "react";
import "./Header.css";
import { BiMenuAltRight } from "react-icons/bi"; // Ícone do menu hamburguer
import { getMenuStyles } from "../../utils/common"; // Função que retorna estilos dinâmicos para o menu
import useHeaderColor from "../../hooks/useHeaderColor"; // Hook customizado que controla a cor do header com base no scroll
import OutsideClickHandler from "react-outside-click-handler"; // Componente para detectar clique fora do menu e fechar

const Header = () => {
  // Estado que controla se o menu está aberto (true) ou fechado (false)
  const [menuOpened, setMenuOpened] = useState(false);

  // Cor do header, obtida pelo hook que reage ao scroll da página
  const headerColor = useHeaderColor();

  return (
    // Container principal do header, com estilo de background dinâmico
    <section className="h-wrapper" style={{ background: headerColor }}>
      {/* Container interno centralizado, com espaçamentos definidos */}
      <div className="flexCenter innerWidth paddings h-container">
        {/* Logo da aplicação */}
        <img src="./logo.png" alt="logo" width={100} />

        {/* Componente que detecta clique fora para fechar o menu */}
        <OutsideClickHandler
          onOutsideClick={() => {
            // Fecha o menu ao clicar fora dele
            setMenuOpened(false);
          }}
        >
          {/* Menu de navegação principal */}
          <div
            className="flexCenter h-menu"
            // Aplica estilos dinâmicos para mostrar/ocultar o menu baseado no estado
            style={getMenuStyles(menuOpened)}
          >
            {/* Links de navegação */}
            <a href="#residencies">Residencies</a>
            <a href="#value">Our Value</a>
            <a href="#contact-us">Contact Us</a>
            <a href="#get-started">Get Started</a>
            {/* Botão com link para contato por email */}
            <button className="button">
              <a href="mailto:zainkeepscode@gmail.com">Contact</a>
            </button>
          </div>
        </OutsideClickHandler>

        {/* Ícone do menu (hamburguer) visível em telas médias e pequenas */}
        <div
          className="menu-icon"
          // Alterna o estado do menu aberto/fechado ao clicar no ícone
          onClick={() => setMenuOpened((prev) => !prev)}
        >
          <BiMenuAltRight size={30} />
        </div>
      </div>
    </section>
  );
};

export default Header;
