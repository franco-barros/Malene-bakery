"use client";

import React from "react";
import Image from "next/image";
import styles from "../../styles/Courses.module.css";
import courses from "../../data/coursesData";

const Courses: React.FC = () => (
  <section id="courses" className={styles.courses}>
    <h2 className={styles.heading}>Talleres y Cursos</h2>
    <ul className={styles.list}>
      {courses.map((c) => (
        <li key={c.name} className={styles.item}>
          <div className={styles.imageWrapper}>
            <Image
              src={c.img}
              alt={c.name}
              width={300}
              height={200}
              className={styles.image}
            />
          </div>
          <h3 className={styles.name}>{c.name}</h3>
          <span className={styles.schedule}>{c.schedule}</span>
        </li>
      ))}
    </ul>
  </section>
);

export default Courses;
