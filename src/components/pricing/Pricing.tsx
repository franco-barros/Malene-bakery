"use client";

import React from "react";
import Image from "next/image";
import styles from "../../styles/Pricing.module.css";
import pricingSections from "../../data/pricingData";

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className={styles.pricing}>
      <h2 className={styles.heading}>Nuestros Precios</h2>
      <div className={styles.grid}>
        {pricingSections.map((section) => (
          <div key={section.title} className={styles.card}>
            {section.image && (
              <div className={styles.imageWrapper}>
                <Image
                  src={section.image}
                  alt={section.title}
                  fill
                  className={styles.image}
                  sizes="(max-width: 768px) 100vw, 300px"
                />
              </div>
            )}
            <h3 className={styles.title}>{section.title}</h3>
            <ul className={styles.list}>
              {section.items.map((item, idx) => (
                <li key={idx} className={styles.item}>
                  <span className={styles.name}>{item.name}</span>
                  {item.detail && (
                    <span className={styles.detail}>{item.detail}</span>
                  )}
                  {item.price && (
                    <span className={styles.price}>{item.price}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Pricing;
