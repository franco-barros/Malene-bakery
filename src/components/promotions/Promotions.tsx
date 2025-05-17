"use client";
import React from "react";
import styles from "../../styles/Promotions.module.css";
import promotions from "../../data/promotionsData";

const Promotions: React.FC = () => {
  return (
    <section id="promotions" className={styles.promotions}>
      <h2 className={styles.heading}>Promociones Especiales</h2>
      <div className={styles.grid}>
        {promotions.map((promo) => (
          <div key={promo.title} className={styles.card}>
            <img src={promo.img} alt={promo.title} className={styles.image} />
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
