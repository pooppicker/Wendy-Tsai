import React, { useState } from "react";
import styles from "./style.module.scss";
import Button from "../PrimaryButton";
const Intro = () => {
  return (
    <>
      <section id="home" className={styles.intro}>
        <div className={styles.contentWrapper}>
          <h2 className={styles.title}>HEY, I'M WENDY TSAI</h2>
          <div className={styles.subTitle}>
            <p className={styles.subTitleText}>
              A Frontend Developer building the Frontend of Websites and Web
              Applications with Vue and React
            </p>
          </div>
          <Button
            text="projects"
            width="200px"
            height="50px"
            onClick={(e) => {
              e.preventDefault();
              window.location.href = "#projects";
            }}
          />
        </div>
        <div className={styles.scrollAnimation}>
          <div className={styles.mouse}></div>
        </div>
      </section>
    </>
  );
};

export default Intro;
