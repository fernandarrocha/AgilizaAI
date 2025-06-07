import React from "react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Carlos Silva",
      company: "Tech Solutions",
      text: "Abri minha empresa em 3 dias sem precisar sair de casa. Incrível!",
      rating: "★★★★★",
    },
    {
      name: "Ana Paula",
      company: "Design Studio",
      text: "A IA me ajudou a escolher o melhor regime tributário. Economizei muito!",
      rating: "★★★★★",
    },
    {
      name: "Roberto Almeida",
      company: "Consultoria RMA",
      text: "O suporte especializado fez toda diferença quando tive dúvidas.",
      rating: "★★★★☆",
    },
  ];

  return (
    <section id="testimonials" className="testimonials">
      <div className="container">
        <h2>O que nossos clientes dizem</h2>
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <div className="testimonial-rating">{testimonial.rating}</div>
              <p className="testimonial-text">"{testimonial.text}"</p>
              <div className="testimonial-author">
                <strong>{testimonial.name}</strong>
                <span>{testimonial.company}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
