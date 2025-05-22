"use client";
import React from "react";
import styles from "../../styles/Promotions.module.css";
import promotions from "../../data/promotionsData";
import HoverSlider from "../hoverslider";

const Promotions: React.FC = () => {
  return (
    <section id="promotions" className={styles.promotions}>
      <h2 className={styles.heading}>Promociones Especiales</h2>
      <div className={styles.grid}>
        {promotions.map((promo) => (
          <div key={promo.title} className={styles.card}>
            <div className={styles.imageWrapper}>
              {Array.isArray(promo.img) ? (
                <HoverSlider
                  images={promo.img}
                  alt={promo.title}
                  width={400}
                  height={180}
                />
              ) : (
                <img
                  src={promo.img}
                  alt={promo.title}
                  className={styles.image}
                />
              )}
            </div>
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
