import React from "react"; // Importa o React para criar o componente
import './Companies.css'   // Importa o arquivo de estilos CSS específico para este componente

const Companies = () => {
  return (
    // Seção principal que envolve o componente, com a classe 'c-wrapper' para estilização externa
    <section className="c-wrapper">
      {/* Container centralizado com padding e largura interna, alinhamento flexível e classe específica 'c-container' */}
      <div className="paddings innerWidth flexCenter c-container">
        {/* Imagens das empresas/parceiras exibidas lado a lado */}
        <img src="./prologis.png" alt="" />
        <img src="./tower.png" alt="" />
        <img src="./equinix.png" alt="" />
        <img src="./realty.png" alt="" />
      </div>
    </section>
  );
};

export default Companies; // Exporta o componente para uso em outras partes da aplicação
