import React, { useState } from "react";
import styles from "./style.module.scss";
import Button from "../PrimaryButton";
import { useTranslation } from "react-i18next";
const About = () => {
  const { t } = useTranslation();
  const skillItems = [
    {
      skill: "HTML",
    },
    {
      skill: "CSS",
    },
    {
      skill: "JavaScript",
    },
    {
      skill: "TypeScript",
    },
    {
      skill: "React",
    },
    {
      skill: "Vue",
    },
    {
      skill: "SASS",
    },
    {
      skill: "GIT",
    },
    {
      skill: "Github",
    },
    {
      skill: "Gitlab",
    },
    {
      skill: "Responsive Design",
    },
    {
      skill: "Ant Design",
    },
    {
      skill: "Material UI",
    },
  ];
  return (
    <>
      <section id="about" className={styles.about}>
        <div className={styles.mainContainer}>
          <h2 className={styles.heading}>
            <span className={styles.headingMain}>{t("about.title")}</span>
            <span className={styles.headingSub}>{t("about.subTitle")}</span>
          </h2>
          <div className={styles.aboutContent}>
            <div className={styles.aboutContentMain}>
              <h3 className={styles.aboutContentTitle}>
                {t("about.contentTitle")}
              </h3>
              <div className={styles.aboutContentDetail}>
                <p className={styles.aboutContentDetailText} dangerouslySetInnerHTML={{__html: t("about.content1")}}> 
      
                </p>
                <p className={styles.aboutContentDetailText} dangerouslySetInnerHTML={{__html: t("about.content2")}}>
                </p>
              </div>
              <Button
                text={t('nav.contact')}
                width="125px"
                height="45px"
                size="1.6rem"
                onClick={(e) => {
                  e.preventDefault();
                  window.location.href = "#contact";
                }}
              />
            </div>
            <div className={styles.aboutContentSkills}>
              <h3 className={styles.aboutContentTitle}>{t("skills.title")}</h3>
              <div className={styles.skills}>
                {skillItems.map((i) => {
                  return <div className={styles.skillsSkill}>{i.skill}</div>;
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
