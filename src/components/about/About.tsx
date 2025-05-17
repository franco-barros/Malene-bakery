"use client";
import { motion } from "framer-motion";
import styles from "../../styles/About.module.css";
import Background from "../backgroundabout"; // fondo animado

const MotionSection = motion.section;

const About = () => {
  return (
    <MotionSection
      id="about"
      className={styles.about}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <Background />

      <div className={styles.card}>
        <h2 className={styles.heading}>Sobre Malene Pastelería</h2>
        <p>
          En <strong>Malene Pastelería</strong> nos dedicamos a crear productos
          artesanales con ingredientes de la mejor calidad, cuidando cada
          detalle desde la receta hasta la presentación final.
        </p>
        <p>
          Elaboramos tortas, galletas y postres tradicionales con un toque
          moderno y artesanal, ideales para celebraciones, momentos especiales o
          simplemente para darte un gusto dulce.
        </p>
        <p>
          Apostamos por lo casero, lo auténtico y lo hecho a mano. Cada producto
          es elaborado con dedicación en nuestro taller ubicado en San Juan,
          donde la pasión por la repostería es el ingrediente principal.
        </p>
        <p>
          Te invitamos a descubrir el sabor y la calidad de lo artesanal, donde
          cada bocado cuenta una historia única.
        </p>
      </div>
    </MotionSection>
  );
};

export default About;
