"use client";
import { motion } from "framer-motion";
import styles from "../../styles/About.module.css";

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
      <h2 className={styles.heading}>Sobre Nosotros</h2>
      <p>
        En <strong>Dulce Raíz</strong> nos dedicamos a crear pastelería
        artesanal con ingredientes naturales, cuidando cada detalle desde la
        receta hasta la presentación final.
      </p>
      <p>
        Nuestros productos, elaborados con recetas tradicionales y toques
        modernos, son ideales para celebraciones, momentos especiales o
        simplemente para disfrutar de algo dulce.
      </p>
      <p>
        Apostamos por lo casero, lo auténtico y lo hecho a mano. Cada torta,
        galleta o budín es preparado con dedicación en nuestro pequeño taller,
        donde la pasión por la repostería es el ingrediente principal.
      </p>
      <p>
        Te invitamos a descubrir el sabor de lo artesanal, donde cada bocado
        cuenta una historia.
      </p>
    </MotionSection>
  );
};

export default About;
