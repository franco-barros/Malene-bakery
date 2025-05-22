"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import styles from "../../styles/Footer.module.css";
import {
  FaInstagram,
  FaTiktok,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaArrowUp,
} from "react-icons/fa";

interface FooterProps {
  className?: string;
}

const Footer: React.FC<FooterProps> = ({ className }) => {
  const handleScrollTop = () => {
    const hero = document.getElementById("hero");
    hero?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.footer
      id="footer"
      className={`${styles.footer} ${className || ""}`}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
    >
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

      <div className={styles.qrContainer}>
        <div className={styles.qrColumn}>
          <Image
            src="/image/maleneinstagram.png"
            alt="QR Instagram"
            width={120}
            height={120}
            className={styles.qrImage}
          />
          <p className={styles.qrLabel}>Síguenos en Instagram</p>
        </div>

        <button
          onClick={handleScrollTop}
          className={styles.backToTop}
          aria-label="Volver arriba"
        >
          <FaArrowUp />
        </button>
      </div>
    </motion.footer>
  );
};

export default Footer;
