// src/components/Promotions/Promotions.tsx
"use client";
import React from "react";
import styles from "../../styles/Promotions.module.css";

interface Promotion {
  title: string;
  desc: string;
  prices: Record<string, string>;
}

const promotions: Promotion[] = [
  {
    title: "Box Clásico",
    desc: "Torta 2 kg + 10 minitartitas + 10 alfajores",
    prices: {
      Chico: "₲ 60 000",
      Mediano: "₲ 87 000",
      Grande: "₲ 130 000",
    },
  },
  {
    title: "Box Premium",
    desc: "Torta 3 kg + 20 minitartitas + 20 alfajores",
    prices: {
      Chico: "₲ 70 000",
      Mediano: "₲ 96 000",
      Grande: "₲ 160 000",
    },
  },
  {
    title: "Promos de Eventos",
    desc: "Descuentos por compras de cajas de minitartitas o alfajores",
    prices: {
      "3 cajas": "10 % OFF",
      "4 cajas": "15 % OFF",
      "5 cajas": "20 % OFF",
    },
  },
];

const Promotions: React.FC = () => {
  return (
    <section id="promotions" className={styles.promotions}>
      <h2 className={styles.heading}>Promociones Especiales</h2>
      <div className={styles.grid}>
        {promotions.map((promo) => (
          <div key={promo.title} className={styles.card}>
            <h3 className={styles.title}>{promo.title}</h3>
            <p className={styles.desc}>{promo.desc}</p>
            <ul className={styles.priceList}>
              {Object.entries(promo.prices).map(([label, price]) => (
                <li key={label} className={styles.priceItem}>
                  <span className={styles.size}>{label}</span>
                  <span className={styles.price}>{price}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Promotions;
