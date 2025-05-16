"use client";

import React from "react";
import styles from "../../styles/Courses.module.css";

const courses = [
  {
    name: "Decoración de Tortas",
    schedule: "Próximo: 12 de Junio",
  },
  {
    name: "Panificación Artesanal",
    schedule: "Próximo: 19 de Junio",
  },
  {
    name: "Postres Sin Horno",
    schedule: "Próximo: 26 de Junio",
  },
];

const Courses: React.FC = () => (
  <section id="courses" className={styles.courses}>
    <h2 className={styles.heading}>Talleres y Cursos</h2>
    <ul className={styles.list}>
      {courses.map((c, i) => (
        <li key={i} className={styles.item}>
          <h3 className={styles.name}>{c.name}</h3>
          <span className={styles.schedule}>{c.schedule}</span>
        </li>
      ))}
    </ul>
  </section>
);

export default Courses;
