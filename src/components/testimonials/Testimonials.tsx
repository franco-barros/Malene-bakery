"use client";
import React from "react";
import styles from "../../styles/Testimonials.module.css";

const testimonials = [
  {
    author: "María López",
    text: "¡Las tortas de Malene son una delicia! El servicio fue impecable.",
    rating: 5,
  },
  {
    author: "Carlos Pérez",
    text: "Me encantaron los macarons, suaves y llenos de sabor.",
    rating: 4,
  },
  {
    author: "Laura Gómez",
    text: "El catering dulce para mi evento fue un éxito total.",
    rating: 5,
  },
];

const Testimonials: React.FC = () => (
  <section id="testimonials" className={styles.testimonials}>
    <h2 className={styles.heading}>Lo que dicen nuestros clientes</h2>
    <div className={styles.grid}>
      {testimonials.map((t, i) => (
        <div key={i} className={styles.card}>
          <p className={styles.text}>{t.text}</p>
          <div className={styles.footer}>
            <span className={styles.author}>{t.author}</span>
            <span className={styles.rating}>{"★".repeat(t.rating)}</span>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Testimonials;
