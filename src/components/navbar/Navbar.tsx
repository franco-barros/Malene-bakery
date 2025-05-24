// src/components/layout/Navbar.tsx
"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "../../styles/Navbar.module.css";
import AnimatedMenuOverlay from "../animatedmenuoverlay";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const navLinks = [
    { href: "#hero", label: "Inicio" },
    { href: "#pricing", label: "Precios" },
    { href: "#top-desserts", label: "Más vendidos" },
    { href: "#about", label: "Nosotros" },
    { href: "#promotions", label: "Promos" },
    { href: "#courses", label: "Cursos" },
    { href: "#services", label: "Servicio" },
    { href: "#location", label: "Ubicación" },
    { href: "#footer", label: "Contacto" }, // o puedes usar "#whatsapp" si tenés un id ahí
  ];

  const scrollToSection = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);

      let currentSection = "";
      for (const { href } of navLinks) {
        const section = document.querySelector(href);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 80 && rect.bottom >= 80) {
            currentSection = href;
            break;
          }
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
  }, [isOpen]);

  return (
    <>
      <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}>
        <div className={styles.innerContainer}>
          <Link
            href="#hero"
            className={styles.logo}
            onClick={() => {
              scrollToSection("#hero");
              setIsOpen(false);
            }}
          >
            <Image
              src="/image/malene1.png"
              alt="Malene Logo"
              width={40}
              height={40}
              priority
            />
          </Link>

          <button
            className={styles.toggleButton}
            onClick={() => setIsOpen(true)}
            aria-label="Abrir menú"
          >
            <span className={styles.hamburgerIcon}>☰</span>
            <span className={styles.menuText}>Menú</span>
          </button>
        </div>
      </nav>

      {isOpen && (
        <AnimatedMenuOverlay
          onClose={() => setIsOpen(false)}
          scrollToSection={(id: string) => {
            scrollToSection(id);
            setIsOpen(false);
          }}
          navLinks={navLinks}
          activeSection={activeSection}
        />
      )}
    </>
  );
};

export default Navbar;
