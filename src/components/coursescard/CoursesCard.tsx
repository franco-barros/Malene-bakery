"use client";

import React from "react";
import Image from "next/image";
import styles from "../../styles/courses/CourseCard.module.css";
import { Course } from "../../data/coursesData";

interface CourseCardProps {
  course: Course;
  isMiddleCard?: boolean;
}

const CourseCard: React.FC<CourseCardProps> = ({ course, isMiddleCard }) => {
  return (
    <li className={`${styles.card} ${isMiddleCard ? styles.middle : ""}`}>
      <div className={styles.imageWrapper}>
        <Image
          src={course.img}
          alt={course.name}
          width={300}
          height={200}
          className={styles.image}
        />
        <div className={styles.overlay}>
          <p className={styles.description}>{course.description}</p>
        </div>
      </div>
      <h3 className={styles.name}>{course.name}</h3>
      <span className={styles.schedule}>{course.schedule}</span>
    </li>
  );
};

export default CourseCard;
