"use client";

import React from "react";
import Image from "next/image";
import styles from "../../styles/team/TeamCard.module.css";

interface Member {
  name: string;
  role: string;
  img: string;
  phrase: string;
  description: string;
}

const TeamCard: React.FC<{ member: Member }> = ({ member }) => (
  <div className={styles.card}>
    <Image
      src={member.img}
      alt={member.name}
      width={160}
      height={160}
      className={styles.photo}
    />
    <h3 className={styles.name}>{member.name}</h3>
    <p className={styles.role}>{member.role}</p>
    <div className={styles.text}>
      <span className={styles.phrase}>{member.phrase}</span>
      <span className={styles.description}>{member.description}</span>
    </div>
  </div>
);

export default TeamCard;
