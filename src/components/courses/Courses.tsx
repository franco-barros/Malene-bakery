"use client";

import React from "react";
import styles from "../../styles/courses/Courses.module.css";
import courses from "../../data/coursesData";
import CourseCard from "../coursescard";

const Courses: React.FC = () => (
  <section id="courses" className={styles.courses}>
    <h2 className={styles.heading}>Talleres y Cursos</h2>
    <ul className={styles.list}>
      {courses.slice(0, 3).map((course, index) => (
        <CourseCard
          key={course.name}
          course={course}
          isMiddleCard={index === 1}
        />
      ))}
    </ul>
  </section>
);

export default Courses;
