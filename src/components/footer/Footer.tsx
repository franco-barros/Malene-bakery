// src/components/Footer/Footer.tsx
"use client";
import { motion } from "framer-motion";
import styles from "../../styles/Footer.module.css";
import { FaInstagram, FaTiktok } from "react-icons/fa";

interface FooterProps {
  className?: string;
}

const Footer: React.FC<FooterProps> = ({ className }) => {
  return (
    <motion.footer
      id="footer"
      className={`${styles.footer} ${className || ""}`}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
    >
      <p className={styles.text}>
        &copy; {new Date().getFullYear()} Malene Pastelería. Todos los derechos
        reservados.
      </p>
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
    </motion.footer>
  );
};

export default Footer;
