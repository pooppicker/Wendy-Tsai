import React, { useState } from "react";
import styles from "./style.module.scss";
import Button from "../PrimaryButton";
const About = () => {
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
  ];
  return (
    <>
      <section id="about" className={styles.about}>
        <div className={styles.mainContainer}>
          <h2 className={styles.heading}>
            <span className={styles.headingMain}>About Me</span>
            <span className={styles.headingSub}>
              Here you will find more information about me, what I do, and my
              current skills mostly in terms of programming and technology
            </span>
          </h2>
          <div className={styles.aboutContent}>
            <div className={styles.aboutContentMain}>
              <h3 className={styles.aboutContentTitle}>Get to know me!</h3>
              <div className={styles.aboutContentDetail}>
                <p className={styles.aboutContentDetailText}>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Laborum, odio! Consectetur ducimus doloribus ab perspiciatis
                  tempore quidem beatae! Laboriosam, beatae eius harum eum quae
                  cupiditate quas. Laborum sapiente unde aliquam!
                </p>
                <p className={styles.aboutContentDetailText}>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Laborum, odio! Consectetur ducimus doloribus ab perspiciatis
                  tempore quidem beatae! Laboriosam, beatae eius harum eum quae
                  cupiditate quas. Laborum sapiente unde aliquam!
                </p>
              </div>
              <Button
                text="contact"
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
              <h3 className={styles.aboutContentTitle}>My Skills</h3>
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
