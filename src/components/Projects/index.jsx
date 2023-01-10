import React, { useState } from "react";
import styles from "./style.module.scss";
import Button from "../PrimaryButton";
import ProjectModal from "../ProjectModal";
import { useTranslation } from "react-i18next";
const Projects = () => {
  const { t } = useTranslation();
  const [openMetaModal, setOpenMetaModal] = useState(false);
  const [openOtherModal, setOpenOtherModal] = useState(false);
  const [openBackstageModal, setOpenBackstageModal] = useState(false);
  const [selectedModal, setSelectedModal] = useState("");
  return (
    <section id="projects" className={styles.projects}>
      <div className={styles.mainContainer}>
        <h2 className={styles.heading}>
          <span className={styles.headingMain}>{t("nav.projects")}</span>
          <span className={styles.headingSub}>{t("projects.subTitle")}</span>
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
              <h3 className={styles.projectsRowContentTitle}>
                {t("projects.gameCenter")}
              </h3>
              <p className={styles.projectsRowContentDesc}>
                {t("projects.gameCenterDesc")}
              </p>
              <Button
                width="150px"
                height="50px"
                size="1.6rem"
                text="view more"
                onClick={() => {
                  setOpenMetaModal(true);
                  setSelectedModal("meta");
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
                  setOpenOtherModal(true);
                  setSelectedModal("other");
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
                {t("projects.backstageDesc")}
              </p>
              <Button
                width="150px"
                height="50px"
                size="1.6rem"
                text="view more"
                onClick={() => {
                  setOpenBackstageModal(true);
                  setSelectedModal("backStage");
                }}
              />
            </div>
          </div>
        </div>
      </div>
      <ProjectModal
        title="Scroll to view whole image"
        open={
          openMetaModal
            ? openMetaModal
            : openOtherModal
            ? openOtherModal
            : openBackstageModal
            ? openBackstageModal
            : false
        }
        onClose={() => {
          setOpenMetaModal(false);
          setOpenOtherModal(false);
          setOpenBackstageModal(false);
        }}
        selectedModal={selectedModal}
      />
    </section>
  );
};

export default Projects;
