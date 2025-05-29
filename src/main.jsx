import React from "react"; // importa a biblioteca React para usar JSX e componentes
import ReactDOM from "react-dom/client"; // importa o método para renderizar no DOM
import "./index.css"; // importa o arquivo CSS global
import App from "./App"; // importa o componente principal da aplicação

// Cria a raiz da aplicação React no elemento HTML com id "root" e renderiza o componente <App /> dentro do modo estrito
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
