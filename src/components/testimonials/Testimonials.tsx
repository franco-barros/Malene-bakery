"use client";

import React from "react";
import styles from "../../styles/testimonials/Testimonials.module.css";
import TestimonialsCarousel from "../testimonialscarousel";

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className={styles.testimonials}>
      <h2 className={styles.heading}>Lo que dicen nuestros clientes</h2>
      <TestimonialsCarousel />
    </section>
  );
};

export default Testimonials;
