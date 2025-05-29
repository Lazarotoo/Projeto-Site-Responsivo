import "./App.css";
// Importa o arquivo CSS com estilos globais para o componente App

import Companies from "./components/Companies/Companies";
// Importa o componente Companies que exibe logos ou informações de empresas parceiras

import Contact from "./components/Contact/Contact";
// Importa o componente Contact com formulário ou informações para contato

import Footer from "./components/Footer/Footer";
// Importa o componente Footer com rodapé do site

import GetStarted from "./components/GetStarted/GetStarted";
// Importa o componente GetStarted, provavelmente uma chamada para ação (CTA)

import Header from "./components/Header/Header";
// Importa o componente Header, normalmente barra de navegação ou topo do site

import Hero from "./components/Hero/Hero";
// Importa o componente Hero, seção principal de destaque na página inicial

import Residencies from "./components/Residencies/Residencies";
// Importa o componente Residencies que exibe o slider de residências populares

import Value from "./components/Value/Value";
// Importa o componente Value que mostra os valores e benefícios oferecidos

function App() {
  return (
    <div className="App">
      {/* Container principal da aplicação */}
      <div>
        {/* Container que inclui o gradiente branco e as seções iniciais */}
        <div className="white-gradient" />
        {/* Elemento para efeito visual de gradiente branco com blur */}
        <Header />
        {/* Componente de cabeçalho com navegação */}
        <Hero />
        {/* Seção principal de destaque (banner, chamada principal) */}
      </div>
      <Companies />
      {/* Exibe as empresas parceiras */}
      <Residencies />
      {/* Exibe o slider de residências */}
      <Value />
      {/* Exibe os valores e benefícios */}
      <Contact />
      {/* Seção de contato */}
      <GetStarted />
      {/* Seção de chamada para ação para iniciar algo */}
      <Footer />
      {/* Rodapé da página */}
    </div>
  );
}

export default App;
// Exporta o componente App para ser usado como raiz da aplicação
