import React, { useState } from "react";
import styles from "./style.module.scss";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();
  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.mainContainer}>
        <h2 className={styles.heading}>
          <span className={styles.headingMain}>{t("nav.contact")}</span>
          <span className={styles.headingSub}>{t("contact.subTitle")}</span>
        </h2>
        <div className={styles.contactBoxContainer}>
          <div className={styles.boxContent}>
            <div className={styles.boxContentText}>
              <span className={styles.boxContentTextLabel}>Mobile: </span>{" "}
              0903-361-504
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
