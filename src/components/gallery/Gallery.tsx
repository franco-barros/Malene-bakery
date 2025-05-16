"use client";
import React from "react";
import Image from "next/image";
import styles from "../../styles/Gallery.module.css";

const images = [
  "/image/malene6.png",
  "/image/malene7.png",
  "/image/malene2.png",
  "/image/malene2.png",
];

const Gallery: React.FC = () => (
  <section id="gallery" className={styles.gallery}>
    <h2 className={styles.heading}>Galería</h2>
    <div className={styles.grid}>
      {images.map((src, i) => (
        <div key={i} className={styles.card}>
          <Image
            src={src}
            alt={`Galería ${i + 1}`}
            fill
            className={styles.image}
          />
        </div>
      ))}
    </div>
  </section>
);

export default Gallery;
