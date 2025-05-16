"use client";

import React from "react";
import Image from "next/image";
import styles from "../../styles/TopDesserts.module.css";

const desserts = [
  {
    name: "Tarta de Frutillas",
    img: "/image/malene4.png",
  },
  {
    name: "Brownie de Chocolate",
    img: "/image/malene5.png",
  },
  {
    name: "Cheesecake",
    img: "/image/malene6.png",
  },
];

const TopDesserts: React.FC = () => (
  <section id="top-desserts" className={styles.topDesserts}>
    <h2 className={styles.heading}>Nuestros Mejores Postres</h2>
    <div className={styles.grid}>
      {desserts.map((d, i) => (
        <div key={i} className={styles.card}>
          <Image
            src={d.img}
            alt={d.name}
            width={300}
            height={200}
            className={styles.image}
          />
          <h3 className={styles.name}>{d.name}</h3>
        </div>
      ))}
    </div>
  </section>
);

export default TopDesserts;
