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
                  你好！我是Wendy，我是一名熱愛寫程式的前端工程師，且擁有中、英、泰文的語文能力。
                  由於興趣十分廣泛，也熱愛挑戰新事物，自學過剪接影片、illustrator、photoshop和多項樂器。我對於藝術一直抱有熱情，對我而言，寫程式就是一種藝術的表現，因此報名了線上全端課程發現自己對程式的熱忱，且成功轉職為前端工程師。
                </p>
                <p className={styles.aboutContentDetailText}>
                  我具有良好的自學能力，在加入前公司後透過專案開發學習的經驗掌握了
                  React.js
                  框架。同時也很擅長跨部門合作，了解如何經由溝通協調，為公司產出良好的作品。
                  我認為一名優秀的工程師應具有不斷學習的精神，並能將所學應用到實踐中，同時還需擁有好的觀察力，以便打造出使用者友善的產品。我相信我具有這些特質，並且相信我可以成為貴公司的有力助手。
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
