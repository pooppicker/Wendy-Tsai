import React, { useState } from "react";
import styles from "./style.module.scss";
import Button from "../PrimaryButton";
const Projects = () => {
  return (
    <section id="projects" className={styles.projects}>
      <div className={styles.mainContainer}>
        <h2 className={styles.heading}>
          <span className={styles.headingMain}>Projects</span>
          <span className={styles.headingSub}>
            Here you will find some personal and clients project that I
            participate in and feel free to view more about the detail
          </span>
        </h2>
        <div className={styles.projectsContent}>
          <div className={styles.projectsRow}>
            <div className={styles.projectsRowImg}>
              <img
                className={styles.mobileImg}
                src="./images/meta-home.jpg"
                alt="meta"
              />
            </div>
            <div className={styles.projectsRowContent}>
              <h3 className={styles.projectsRowContentTitle}>Game Center</h3>
              <p className={styles.projectsRowContentDesc}>
                It is a platform where you can select different kind of games to
                bet
              </p>
              <Button
                width="150px"
                height="50px"
                size="1.6rem"
                text="view more"
                onClick={() => {
                  window.open("/project-1", "_blank");
                }}
              />
            </div>
          </div>
          <div className={styles.projectsRow}>
            <div className={styles.projectsRowImg}>
              <img
                className={styles.mobileImg}
                src="./images/block-chain.jpg"
                alt="meta"
              />
            </div>
            <div className={styles.projectsRowContent}>
              <h3 className={styles.projectsRowContentTitle}>Other Games</h3>
              <p className={styles.projectsRowContentDesc}>
                There are multiple games in Game Center
              </p>
              <Button
                width="150px"
                height="50px"
                size="1.6rem"
                text="view more"
                onClick={() => {
                  window.open("/project-2", "_blank");
                }}
              />
            </div>
          </div>
          <div className={styles.projectsRow}>
            <div className={styles.projectsRowImg}>
              <img
                className={styles.desktopImg}
                src="./images/backstage.jpg"
                alt="meta"
              />
            </div>
            <div className={styles.projectsRowContent}>
              <h3 className={styles.projectsRowContentTitle}>Backstage</h3>
              <p className={styles.projectsRowContentDesc}>
                Each games have individual backstage
              </p>
              <Button
                width="150px"
                height="50px"
                size="1.6rem"
                text="view more"
                onClick={() => {
                  window.open("/project-3", "_blank");
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
