import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./style.module.scss";
import Button from "../PrimaryButton";
const Intro = () => {
  const navigate = useNavigate;
  return (
    <>
      <section id="home" className={styles.intro}>
        <div className={styles.contentWrapper}>
          <h2 className={styles.title}>HEY, I'M WENDY TSAI</h2>
          <div className={styles.subTitle}>
            <p className={styles.subTitleText}>
              A Frontend Developer building the Fronted of Websites and Web
              Applications with Vue.js & React.js
            </p>
          </div>
          <Button
            text="projects"
            width="200px"
            height="50px"
            onClick={() => {
              navigate("#projects");
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
