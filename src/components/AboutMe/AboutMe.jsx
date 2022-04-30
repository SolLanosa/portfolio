import React from "react";
import styles from "./AboutMe.module.scss";

export default function AboutMe() {
  return (
    <div id="aboutme-section" className={styles.aboutme}>
      <div className={styles.titleAboutMe}>
        <h2>ABOUT ME</h2>
      </div>
      <div className={styles.aboutBox}>
        <img src="/img/profilepic.jpg" alt="" />
        <p>
          I am looking for my first tech-work experience. I am a self-demanding
          and responsible person who likes challenges. My goal is to graduate in
          2022 as a lawyer and continue tertiary studies in computer science,
          while working on motivating experiences in the digital world. In
          between I continue traning myself doing courses and practice doing
          personal projects.
        </p>
      </div>
    </div>
  );
}
