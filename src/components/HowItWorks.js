import React from "react";

const HowItWorks = () => {
  const steps = [
    {
      number: "1",
      title: "Cadastro Simples",
      description: "Informe alguns dados básicos sobre você e seu negócio.",
    },
    {
      number: "2",
      title: "Análise da IA",
      description: "Nossa IA avalia o melhor tipo de empresa para seu caso.",
    },
    {
      number: "3",
      title: "Geração de Documentos",
      description: "Receba todos os documentos prontos para assinar.",
    },
    {
      number: "4",
      title: "Acompanhamento",
      description: "Acompanhe o andamento do processo em tempo real.",
    },
  ];

  return (
    <section id="how-it-works" className="how-it-works">
      <div className="container">
        <h2>Como Funciona</h2>
        <div className="steps">
          {steps.map((step, index) => (
            <div key={index} className="step">
              <div className="step-number">{step.number}</div>
              <div className="step-content">
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
