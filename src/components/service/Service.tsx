"use client";
import React from "react";
import styles from "../../styles/service/Services.module.css";
import ServiceCard from "./ServiceCard";

// Datos de servicios para Malene Pastelería
const servicesData = [
  {
    title: "Tortas Personalizadas",
    description: "Diseñadas a tu medida para todo tipo de celebraciones.",
    features: ["Diseños únicos", "Sabores a medida"],
    cta: "Encargar ahora",
  },
  {
    title: "Repostería Gourmet",
    description: "Macarons, mini postres y galletas artesanales.",
    features: ["Ingredientes premium", "Presentación elegante"],
    cta: "Ver nuestros postres",
  },
  {
    title: "Catering Dulce",
    description: "Mesas de postres para eventos y reuniones especiales.",
    features: ["Montaje profesional", "Variedad de opciones"],
    cta: "Solicitar presupuesto",
  },
];

const Services: React.FC = () => {
  const handleScrollTo = (id: string) => {
    const section = document.getElementById(id);
    section?.scrollIntoView({ behavior: "smooth" });
  };

  const handleWhatsApp = () => {
    window.open("https://wa.me/5492645878987", "_blank");
  };

  return (
    <section id="services" className={styles.servicesSection}>
      <h2 className={styles.sectionTitle}>Nuestros Servicios</h2>
      <div className={styles.servicesContainer}>
        {servicesData.map((service) => {
          let onClick: () => void = () => {};

          if (
            service.cta.includes("Encargar") ||
            service.cta.includes("Solicitar")
          ) {
            onClick = handleWhatsApp;
          } else if (service.cta.includes("Ver")) {
            onClick = () => handleScrollTo("top-desserts");
          }

          return (
            <ServiceCard
              key={service.title}
              title={service.title}
              description={service.description}
              features={service.features}
              cta={service.cta}
              onClick={onClick}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Services;
