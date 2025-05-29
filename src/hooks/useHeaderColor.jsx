import { useEffect, useState } from "react";
// Importa hooks do React para estado e efeitos colaterais

const useHeaderColor = () => {
  const [headerColor, setHeaderColor] = useState(false);
  // Estado para controlar a cor do cabeçalho (inicialmente false)

  // Hook useEffect para adicionar e limpar evento de scroll
  useEffect(() => {
    function handleScroll() {
      // Função chamada sempre que ocorre scroll na janela

      if (window.scrollY > 8) {
        // Se a rolagem vertical ultrapassar 8 pixels

        setHeaderColor("#302e2e");
        // Define a cor do cabeçalho para um tom escuro
      } else {
        setHeaderColor("none");
        // Caso contrário, remove a cor (sem sombra)
      }
    }

    window.addEventListener("scroll", handleScroll);
    // Adiciona o listener para o evento de scroll na janela

    return () => {
      window.removeEventListener("scroll", handleScroll);
      // Remove o listener ao desmontar o componente para evitar vazamento de memória
    };
  }, []);
  // Array vazio significa que o efeito roda apenas uma vez, no mount

  return headerColor;
  // Retorna o valor atual da cor do cabeçalho para uso no componente que chama este hook
};

export default useHeaderColor;
// Exporta o hook para ser utilizado em outros arquivos
