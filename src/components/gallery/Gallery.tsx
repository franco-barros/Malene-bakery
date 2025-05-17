"use client";
import React from "react";
import styles from "../../styles/gallery/Gallery.module.css";
import GalleryCarousel from "../gallerycarousel";
import galleryImages from "../../data/galleryData";

const Gallery: React.FC = () => (
  <section id="gallery" className={styles.gallery}>
    <h2 className={styles.heading}>Nuestro instagram</h2>
    <GalleryCarousel images={galleryImages} />
  </section>
);

export default Gallery;
