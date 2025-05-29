import "./Hero.css"; // Importa o arquivo CSS externo com os estilos da Hero
import { HiLocationMarker } from "react-icons/hi"; // Importa o ícone do marcador de localização
import CountUp from "react-countup"; // Importa componente para animação de contagem numérica
import { motion } from "framer-motion"; // Importa biblioteca para animações no React

const Hero = () => {
  return (
    // Seção principal do componente Hero
    <section className="hero-wrapper">
      {/* Container principal com padding, largura interna e flexbox centralizado */}
      <div className="paddings innerWidth flexCenter hero-container">

        {/* Lado esquerdo do hero com layout de coluna e alinhamento flex-start */}
        <div className="flexColStart hero-left">

          {/* Título principal com posicionamento relativo para z-index */}
          <div className="hero-title">

            {/* Círculo laranja posicionado atrás do título */}
            <div className="orange-circle" />

            {/* Título animado usando framer-motion */}
            <motion.h1
              initial={{ y: "2rem", opacity: 0 }} // Estado inicial: deslocado para baixo e transparente
              animate={{ y: 0, opacity: 1 }} // Estado animado: posição normal e totalmente opaco
              transition={{
                duration: 2, // Duração da animação de 2 segundos
                type: "ease-in", // Tipo de transição suave
              }}
            >
              Discover <br />
              Most Suitable
              <br /> Property
            </motion.h1>
          </div>

          {/* Descrição secundária abaixo do título */}
          <div className="flexColStart secondaryText flexhero-des">
            <span>Find a variety of properties that suit you very easilty</span>
            <span>Forget all difficulties in finding a residence for you</span>
          </div>

          {/* Barra de busca com input, ícone e botão */}
          <div className="flexCenter search-bar">

            {/* Ícone de localização azul */}
            <HiLocationMarker color="var(--blue)" size={25} />

            {/* Campo de texto para busca */}
            <input type="text" />

            {/* Botão de busca */}
            <button className="button">Search</button>
          </div>

          {/* Estatísticas com contadores animados */}
          <div className="flexCenter stats">

            {/* Estatística 1: Produtos premium */}
            <div className="flexColCenter stat">
              <span>
                {/* Contagem animada de 8800 até 9000 em 4 segundos */}
                <CountUp start={8800} end={9000} duration={4} /> <span>+</span>
              </span>
              <span className="secondaryText">Premium Product</span>
            </div>

            {/* Estatística 2: Clientes satisfeitos */}
            <div className="flexColCenter stat">
              <span>
                {/* Contagem animada de 1950 até 2000 em 4 segundos */}
                <CountUp start={1950} end={2000} duration={4} /> <span>+</span>
              </span>
              <span className="secondaryText">Happy Customer</span>
            </div>

            {/* Estatística 3: Prêmios ganhos */}
            <div className="flexColCenter stat">
              <span>
                {/* Contagem animada de 0 até 28 (padrão é start=0) */}
                <CountUp end={28} /> <span>+</span>
              </span>
              <span className="secondaryText">Awards Winning</span>
            </div>
          </div>
        </div>

        {/* Lado direito com imagem */}
        <div className="flexCenter hero-right">

          {/* Contêiner da imagem com animação de entrada da direita */}
          <motion.div
            initial={{ x: "7rem", opacity: 0 }} // Estado inicial: deslocado para a direita e transparente
            animate={{ x: 0, opacity: 1 }} // Estado animado: posição normal e opaco
            transition={{
              duration: 2, // Duração da animação 2 segundos
              type: "ease-in", // Transição suave
            }}
            className="image-container"
          >
            {/* Imagem principal do hero */}
            <img src="./hero-image.png" alt="houses" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero; // Exporta o componente para ser usado em outras partes do app
