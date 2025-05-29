import { HiShieldCheck } from "react-icons/hi";
// Importa o ícone HiShieldCheck do react-icons para uso visual

import { MdCancel, MdAnalytics } from "react-icons/md";
// Importa os ícones MdCancel e MdAnalytics do react-icons para uso visual

const data = [
  {
    icon: <HiShieldCheck />,
    // Ícone representando um escudo com check, para visualização no item

    heading: "Best interest rates on the market",
    // Título do primeiro item de dados

    detail:
      "Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat occaecat ut occaecat consequat est minim minim esse tempor laborum consequat esse adipisicing eu reprehenderit enim.",
    // Descrição detalhada do primeiro item
  },
  {
    icon: <MdCancel />,
    // Ícone representando cancelamento ou erro

    heading: "Prevent unstable prices",
    // Título do segundo item de dados

    detail:
      "Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat occaecat ut occaecat consequat est minim minim esse tempor laborum consequat esse adipisicing eu reprehenderit enim.",
    // Descrição detalhada do segundo item
  },
  {
    icon: <MdAnalytics />,
    // Ícone representando análise ou gráficos

    heading: "Best price on the market",
    // Título do terceiro item de dados

    detail:
      "Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat occaecat ut occaecat consequat est minim minim esse tempor laborum consequat esse adipisicing eu reprehenderit enim.",
    // Descrição detalhada do terceiro item
  },
];

export default data;
// Exporta o array para ser usado em outros componentes
