"use client";
import React from "react";
import Image from "next/image";
import styles from "../../styles/Team.module.css";

const members = [
  {
    name: "Malena Ruiz",
    role: "Fundadora & Pastelera",
    img: "/image/malene3.png",
  },
  { name: "Ana Torres", role: "Decoradora", img: "/image/malene3.png" },
  { name: "Luis Martínez", role: "Barista", img: "/image/malene3.png" },
];

const Team: React.FC = () => (
  <section id="team" className={styles.team}>
    <h2 className={styles.heading}>Nuestro Equipo</h2>
    <div className={styles.grid}>
      {members.map((m, i) => (
        <div key={i} className={styles.card}>
          <Image
            src={m.img}
            alt={m.name}
            width={200}
            height={200}
            className={styles.photo}
          />
          <h3 className={styles.name}>{m.name}</h3>
          <p className={styles.role}>{m.role}</p>
        </div>
      ))}
    </div>
  </section>
);

export default Team;
