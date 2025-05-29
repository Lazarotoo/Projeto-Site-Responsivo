// Função que retorna os estilos para o menu baseado no estado de abertura e largura da tela
export const getMenuStyles = (menuOpened) => {
  // Verifica se a largura da tela é menor ou igual a 800 pixels (tipicamente mobile/tablet)
  if (document.documentElement.clientWidth <= 800) {
    // Se o menu NÃO estiver aberto, move ele para fora da tela pela direita (-100%)
    // Se estiver aberto, não retorna nada (menu visível normalmente)
    return { right: !menuOpened && "-100%" };
  }
};

// Configurações padrão do slider (carrossel)
export const sliderSettings = {
  slidesPerView: 1, // Número de slides visíveis por vez
  spaceBetween: 50, // Espaçamento em pixels entre os slides
  breakpoints: {
    // Definições para diferentes larguras de tela (responsividade)
    480: {
      slidesPerView: 1, // Até 480px mostra 1 slide
    },
    600: {
      slidesPerView: 2 // A partir de 600px mostra 2 slides
    },
    750: {
      slidesPerView: 3 // A partir de 750px mostra 3 slides
    },
    1100: {
      slidesPerView: 4, // A partir de 1100px mostra 4 slides
    },
  },
};
