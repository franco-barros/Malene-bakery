"use client";
import React from "react";
import {
  FaInstagram,
  FaTiktok,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaArrowUp,
} from "react-icons/fa";
import styles from "../../styles/Footer.module.css";

interface FooterProps {
  className?: string;
}

const Footer: React.FC<FooterProps> = ({ className }) => {
  const handleScrollTop = () => {
    const hero = document.getElementById("hero");
    hero?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer id="footer" className={`${styles.footer} ${className || ""}`}>
      <div className={styles.info}>
        <p className={styles.text}>
          &copy; {new Date().getFullYear()} Malene Pastelería. Todos los
          derechos reservados.
        </p>
        <p className={styles.contact}>
          <FaPhoneAlt className={styles.icon} /> +54 9 11 2345-6789
        </p>
        <p className={styles.contact}>
          <FaMapMarkerAlt className={styles.icon} /> Av. de Mayo 1234, CABA,
          Argentina
        </p>
      </div>

      <div className={styles.iconContainer}>
        <a
          href="https://www.instagram.com/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className={styles.iconLink}
        >
          <FaInstagram />
        </a>
        <a
          href="https://www.tiktok.com/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="TikTok"
          className={styles.iconLink}
        >
          <FaTiktok />
        </a>
      </div>

      <button
        onClick={handleScrollTop}
        className={styles.backToTop}
        aria-label="Volver arriba"
      >
        <FaArrowUp />
      </button>
    </footer>
  );
};

export default Footer;
