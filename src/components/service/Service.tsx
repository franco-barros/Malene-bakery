"use client";
import React from "react";
import styles from "../../styles/service/Services.module.css";
import ServiceCard from "./ServiceCard";
import { servicesData } from "../../data/serviceData";
import Background from "../backgroundabout";

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
      {/* Fondo animado */}
      <Background />

      <h2 className={styles.sectionTitle}>Nuestros Servicios</h2>
      <div className={styles.servicesContainer}>
        {servicesData.map((service, index) => {
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
              key={`${service.title}-${index}`}
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
