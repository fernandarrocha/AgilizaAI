import React from "react";

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <h1>Descomplique a abertura da sua empresa com a nossa IA</h1>
          <p>
            A maneira mais fácil e rápida de abrir seu negócio, com orientação
            personalizada em cada etapa.
          </p>
          <div className="hero-buttons">
            {/* Botão "Experimente Grátis" (já é um link externo) */}
            <a
              href="https://abref-cil-seu-assistente-para-abrir-empresas--sourtrophy2640553.on.websim.com/" // Seu link externo
              target="_blank" // Abre o link em uma nova aba
              rel="noopener noreferrer" // Medida de segurança e boa prática
              className="primary-button" // Mantém o estilo do botão
            >
              Experimente Grátis
            </a>
            {/* O botão "Assista ao Vídeo" agora é um link externo também */}
            <a
              href="https://youtu.be/rmkVOJe5m6M?si=2kcqjbrZfRyAxfP4" // O link do vídeo
              target="_blank" // Abre o link em uma nova aba
              rel="noopener noreferrer" // Medida de segurança e boa prática
              className="secondary-button" // Mantém o estilo do botão
            >
              Assista ao Vídeo
            </a>
          </div>
        </div>
        <div className="hero-image">
          <img
            src="/logo-agilizaai.png"
            alt="Logo AgilizaAI"
            className="hero-logo"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
