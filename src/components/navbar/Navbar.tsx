"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import styles from "../../styles/Navbar.module.css";

const MOBILE_BREAKPOINT = 768;

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Detectar scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Detectar mobile vs desktop
  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // Bloquear scroll body cuando el menú está abierto
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
  }, [isOpen]);

  const navLinks = [
    { href: "#hero", label: "Inicio" },
    { href: "#about", label: "Acerca de" },
    { href: "#footer", label: "Contacto" },
  ];

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}>
      <div className={styles.innerContainer}>
        {/* Logo */}
        <Link
          href="#hero"
          className={styles.logo}
          onClick={() => setIsOpen(false)}
        >
          Malene Pastelería
        </Link>

        {/* Menú de escritorio */}
        <ul className={styles.desktopMenu}>
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <a href={href} className={styles.link}>
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* Toggle sólo en móvil */}
        {isMobile && (
          <button
            className={styles.toggleButton}
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
          >
            {isOpen ? "✖" : "☰"}
          </button>
        )}
      </div>

      {/* Menú móvil */}
      {isMobile && isOpen && (
        <div className={styles.mobileMenu}>
          <ul>
            {navLinks.map(({ href, label }) => (
              <li key={href}>
                <a
                  href={href}
                  className={styles.mobileLink}
                  onClick={() => setIsOpen(false)}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
