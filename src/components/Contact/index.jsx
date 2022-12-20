import React, { useState } from "react";
import styles from "./style.module.scss";
const Contact = () => {
  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.mainContainer}>
        <h2 className={styles.heading}>
          <span className={styles.headingMain}>Contact</span>
          <span className={styles.headingSub}>
            Feel free to contact me by calling or via email and I will get back
            to you as soon as possible
          </span>
        </h2>
        <div className={styles.contactBoxContainer}>
          <div className={styles.boxContent}>
            <div className={styles.boxContentText}>
              <span className={styles.boxContentTextLabel}>Mobile: </span>{" "}
              090-336-1504
            </div>
            <div className={styles.boxContentText}>
              <span className={styles.boxContentTextLabel}>E-mail: </span>{" "}
              tacoz520@gmail.com
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
