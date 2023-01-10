import React, { useState } from "react";
import styles from "./style.module.scss";
import Button from "../PrimaryButton";
import { useTranslation } from "react-i18next";
const Intro = () => {
  const { t } = useTranslation();
  return (
    <>
      <section id="home" className={styles.intro}>
        <div className={styles.contentWrapper}>
          <h2 className={styles.title}>{t("intro.title")}</h2>
          <div className={styles.subTitle}>
            <p className={styles.subTitleText}>{t("intro.subTitle")}</p>
          </div>
          <Button
            text={t("nav.projects")}
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
