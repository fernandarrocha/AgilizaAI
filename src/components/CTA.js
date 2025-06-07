import React from "react";

const CTA = () => {
  return (
    <section className="cta">
      <div className="container">
        <h2>Pronto para abrir sua empresa sem complicação?</h2>
        <p>Experimente gratuitamente e veja como é fácil.</p>
        {/* O botão agora é um link <a> com as classes CSS do botão */}
        <a
          href="https://abref-cil-seu-assistente-para-abrir-empresas--sourtrophy2640553.on.websim.com/" // O link que você forneceu
          target="_blank" // Abre o link em uma nova aba
          rel="noopener noreferrer" // Importante para segurança ao abrir em nova aba
          className="cta-button" // Mantém o estilo CSS do botão
        >
          Comece Agora - Grátis
        </a>
      </div>
    </section>
  );
};

export default CTA;
