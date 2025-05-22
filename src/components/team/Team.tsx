// components/team/Team.tsx
"use client";

import React from "react";
import styles from "../../styles/team/Team.module.css";
import teamMembers from "../../data/teamData";
import TeamCard from "../teamcard/TeamCard";

const Team: React.FC = () => (
  <section id="team" className={styles.team}>
    <h2 className={styles.heading}>Nuestro Equipo</h2>
    <div className={styles.grid}>
      {teamMembers.map((m) => (
        <TeamCard key={m.name} member={m} />
      ))}
    </div>
  </section>
);

export default Team;
