"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import styles from "../../styles/HoverSlider.module.css";

interface HoverSliderProps {
  images: string[]; // lista de rutas de imagen
  alt: string;
  width: number;
  height: number;
  interval?: number; // opcional, tiempo entre imágenes
}

const HoverSlider: React.FC<HoverSliderProps> = ({
  images,
  alt,
  width,
  height,
  interval = 1000,
}) => {
  const [index, setIndex] = useState(0);
  const [hovering, setHovering] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (hovering) {
      intervalRef.current = setInterval(() => {
        setIndex((prev) => (prev + 1) % images.length);
      }, interval);
    } else {
      clearInterval(intervalRef.current!);
      intervalRef.current = null;
    }

    return () => clearInterval(intervalRef.current!);
  }, [hovering, images.length, interval]);

  return (
    <div
      className={styles.wrapper}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
    >
      <Image
        src={images[index]}
        alt={alt}
        width={width}
        height={height}
        className={styles.image}
      />
    </div>
  );
};

export default HoverSlider;
