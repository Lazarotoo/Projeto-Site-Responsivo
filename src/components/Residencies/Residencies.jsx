import React from "react";
// Importa o React para criar componentes funcionais

import data from "../../utils/slider.json";
// Importa os dados do slider a partir de um arquivo JSON com as residências

import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
// Importa componentes do Swiper para criar o carrossel (slider)

import "swiper/css";
// Importa o CSS padrão do Swiper para o estilo do slider

import "./Residencies.css";
// Importa o CSS customizado para estilizar este componente

import { sliderSettings } from "../../utils/common";
// Importa as configurações personalizadas do slider (quantidade de slides, espaçamento, etc)

const Residencies = () => {
  return (
    <div id="residencies" className="r-wrapper">
      {/* Container principal da seção residencies */}
      <div className="paddings innerWidth r-container">
        {/* Container interno com padding e largura limitada */}

        <div className="flexColStart r-head">
          {/* Cabeçalho da seção alinhado em coluna e com início flexível */}
          <span className="orangeText">Best Choices</span>
          {/* Texto pequeno destacado em laranja */}
          <span className="primaryText">Popular Residencies</span>
          {/* Texto principal do cabeçalho */}
        </div>

        <Swiper {...sliderSettings}>
          {/* Componente Swiper, com as configurações passadas via spread operator */}

          <SlideNextButton />
          {/* Botões personalizados para controlar o slider */}

          {data.map((card, i) => (
            <SwiperSlide key={i}>
              {/* Cada slide mapeado do array de residências */}

              <div className="flexColStart r-card">
                {/* Cartão do imóvel com layout em coluna */}
                <img src={card.image} alt="home" />
                {/* Imagem da residência */}

                <span className="secondaryText r-price">
                  {/* Preço destacado */}
                  <span style={{ color: "orange" }}>$</span>
                  {/* Sinal de dólar em laranja */}
                  <span>{card.price}</span>
                  {/* Valor do preço */}
                </span>

                <span className="primaryText">{card.name}</span>
                {/* Nome da residência */}
                <span className="secondaryText">{card.detail}</span>
                {/* Descrição curta */}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Residencies;
// Exporta o componente para ser usado em outros arquivos

// Componente interno para os botões next/prev do slider
const SlideNextButton = () => {
  const swiper = useSwiper();
  // Hook para acessar o controle do swiper

  return (
    <div className="flexCenter r-buttons">
      {/* Container flex para centralizar os botões */}

      <button onClick={() => swiper.slidePrev()} className="r-prevButton">
        &lt;
      </button>
      {/* Botão para ir ao slide anterior */}

      <button onClick={() => swiper.slideNext()} className="r-nextButton">
        &gt;
      </button>
      {/* Botão para ir ao slide seguinte */}
    </div>
  );
};
