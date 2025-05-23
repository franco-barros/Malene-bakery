"use client";
import React from "react";
import styles from "../../styles/Location.module.css";

const Location: React.FC = () => {
  return (
    <section id="location" className={styles.location}>
      <h2 className={styles.heading}>¿Dónde Estamos?</h2>
      <p className={styles.description}>
        Nos encontrás en el corazón de San Juan, ¡te esperamos con lo más rico!
      </p>
      <div className={styles.mapWrapper}>
        <iframe
          title="Ubicación Malena Pastelería"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2693.6780574017993!2d-68.53458819704693!3d-31.53754398546937!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x96813f26ecf6ea4f%3A0x4e935b46413e9d4f!2sSan%20Juan%2C%20Argentina!5e0!3m2!1ses!2sar!4v1715980000000!5m2!1ses!2sar"
          width="100%"
          height="350"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </section>
  );
};

export default Location;
