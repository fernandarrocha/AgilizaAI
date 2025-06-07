import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <h3>AgilizaAI</h3>
            <p>Descomplicando a abertura de empresas com IA</p>
          </div>
          <div className="footer-links">
            <div className="links-column">
              <h4>Produto</h4>
              <ul>
                <li>
                  <a href="/">Recursos</a>
                </li>
                <li>
                  <a href="/">Planos</a>
                </li>
                <li>
                  <a href="/">FAQ</a>
                </li>
              </ul>
            </div>
            <div className="links-column">
              <h4>Empresa</h4>
              <ul>
                <li>
                  <a href="/">Sobre Nós</a>
                </li>
                <li>
                  <a href="/">Blog</a>
                </li>
                <li>
                  <a href="/">Contato</a>
                </li>
              </ul>
            </div>
            <div className="links-column">
              <h4>Legal</h4>
              <ul>
                <li>
                  <a href="/">Termos</a>
                </li>
                <li>
                  <a href="/">Privacidade</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2025 AgilizaAI. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
