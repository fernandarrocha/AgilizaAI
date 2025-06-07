import React from "react";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <h1>AgilizaAI</h1>
        </div>
        <nav className="nav">
          <ul>
            <li>
              <a href="#features">Recursos</a>
            </li>
            <li>
              <a href="#how-it-works">Como Funciona</a>
            </li>
            <li>
              <a href="#testimonials">Depoimentos</a>
            </li>
            <li>
              {/* O botão "Começar Agora" agora é um link */}
              <a
                href="https://abref-cil-seu-assistente-para-abrir-empresas--sourtrophy2640553.on.websim.com/" // Seu link externo
                target="_blank" // Abre em uma nova aba
                rel="noopener noreferrer" // Para segurança
                className="cta-button" // Mantém o estilo do botão
              >
                Começar Agora
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
