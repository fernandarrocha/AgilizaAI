import React from "react";

const Features = () => {
  const features = [
    {
      icon: "⏱️",
      title: "Processo Rápido",
      description: "Reduza o tempo de abertura de semanas para horas.",
    },
    {
      icon: "🤖",
      title: "Assistente por IA",
      description: "Nossa IA guia você em cada etapa do processo.",
    },
    {
      icon: "📑",
      title: "Documentação Automática",
      description: "Gere todos os documentos necessários automaticamente.",
    },
    {
      icon: "💼",
      title: "Consultoria Especializada",
      description: "Acesso a especialistas quando precisar.",
    },
  ];

  return (
    <section id="features" className="features">
      <div className="container">
        <h2>Recursos que Facilitam sua Vida</h2>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
