// src/components/Pricing/Pricing.tsx
"use client";
import React from "react";
import styles from "../../styles/Pricing.module.css";

interface Item {
  name: string;
  detail?: string;
  price?: string;
}

interface Section {
  title: string;
  items: Item[];
}

const pricingSections: Section[] = [
  {
    title: "Tortas de Cumpleaños",
    items: [
      {
        name: "Precio por kg",
        detail: "Chocolate o merengue",
        price: "₲ 22.000",
      },
      { name: "Buttercream", price: "₲ 23.000" },
    ],
  },
  {
    title: "Otras Tortas",
    items: [
      { name: "Pistacho", detail: "Ganache y frutas", price: "₲ 25.000" },
      { name: "Carrot Cake", price: "₲ 20.000" },
      { name: "Matilda", price: "₲ 22.000" },
      { name: "Selva Negra", price: "₲ 22.000" },
    ],
  },
  {
    title: "Tamaños de Tortas",
    items: [
      { name: "Chicas", price: "₲ 38.500" },
      { name: "Medianas", price: "₲ 42.000" },
      { name: "Grandes", price: "₲ 45.000" },
    ],
  },
  {
    title: "Postres",
    items: [
      { name: "Porción chica", price: "₲ 40.000" },
      { name: "Porción mediana", price: "₲ 43.000" },
      { name: "Porción grande", price: "₲ 47.000" },
      { name: "Cheesecake", detail: "Clásica o Purple", price: "varía" },
      { name: "Tiramisú", price: "varía" },
      { name: "Chocotorta", price: "varía" },
    ],
  },
  {
    title: "Alfajores",
    items: [
      { name: "Pistacho", price: "₲ 3.500" },
      { name: "Chocolate", price: "₲ 2.800" },
      { name: "Macarons", price: "₲ 2.000" },
    ],
  },
  {
    title: "Cookies",
    items: [
      { name: "Clásica" },
      { name: "Flora" },
      { name: "Purple" },
      { name: "Bomba" },
      { name: "Pistacchio" },
    ],
  },
  {
    title: "Cajas Surtidas",
    items: [
      { name: "25 Mini Tartitas", price: "₲ 60.000" },
      { name: "50 Mini Cremas", price: "₲ 52.000" },
      { name: "25 Shots", price: "₲ 43.000" },
      { name: "50 Alfajores de Chocolate", price: "₲ 32.000" },
    ],
  },
];

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className={styles.pricing}>
      <h2 className={styles.heading}>Nuestros Precios</h2>
      <div className={styles.grid}>
        {pricingSections.map((section) => (
          <div key={section.title} className={styles.card}>
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
