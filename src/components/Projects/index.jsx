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
  const [openWiselletModal, setOpenWiselletModal] = useState(false);
  const [openOrderModal, setOpenOrderModal] = useState(false);
  const [openOrderBackModal, setOpenOrderBackModal] = useState(false);
  const [selectedModal, setSelectedModal] = useState("");
  return (
    <section id="projects" className={styles.projects}>
      <div className={styles.mainContainer}>
        <h2 className={styles.heading}>
          <span className={styles.headingMain}>{t("nav.projects")}</span>
          <span className={styles.headingSub}>{t("projects.subTitle")}</span>
        </h2>
        <div className={styles.projectsContent}>
          {/* ORDER */}
          <div className={styles.projectsRow}>
            <div className={styles.projectsRowImg}>
              <img
                className={styles.mobileImg}
                src={process.env.PUBLIC_URL + "/images/order_home.png"}
                alt="order"
              />
            </div>
            <div className={styles.projectsRowContent}>
              <h3 className={styles.projectsRowContentTitle}>
                {t("projects.order")}
              </h3>
              <p className={styles.projectsRowContentDesc}>
                {t("projects.orderDesc")}
              </p>
              <Button
                width="150px"
                height="50px"
                size="1.6rem"
                text={t("button.viewMore")}
                onClick={() => {
                  setOpenOrderModal(true);
                  setSelectedModal("order");
                }}
              />
            </div>
          </div>
          {/* ORDER BACK */}
          <div className={styles.projectsRow}>
            <div className={styles.projectsRowImg}>
              <img
                className={styles.desktopImg}
                src={process.env.PUBLIC_URL + "/images/order_back.png"}
                alt="order"
              />
            </div>
            <div className={styles.projectsRowContent}>
              <h3 className={styles.projectsRowContentTitle}>
                {t("projects.orderBack")}
              </h3>
              <p className={styles.projectsRowContentDesc}>
                {t("projects.orderBackDesc")}
              </p>
              <Button
                width="150px"
                height="50px"
                size="1.6rem"
                text={t("button.viewMore")}
                onClick={() => {
                  setOpenOrderBackModal(true);
                  setSelectedModal("orderBack");
                }}
              />
            </div>
          </div>
          {/* 2esim */}
          <div className={styles.projectsRow}>
            <div className={styles.projectsRowImg}>
              <img
                className={styles.desktopImg}
                src={process.env.PUBLIC_URL + "/images/2esim_home.png"}
                alt="2esim"
              />
            </div>
            <div className={styles.projectsRowContent}>
              <h3 className={styles.projectsRowContentTitle}>
                {t("projects.2esim")}
              </h3>
              <p className={styles.projectsRowContentDesc}>
                {t("projects.2esimDesc")}
              </p>
              <Button
                width="150px"
                height="50px"
                size="1.6rem"
                text={t("button.viewMore")}
                onClick={() => {
                  window.open("https://www.2esim.net");
                }}
              />
            </div>
          </div>
          {/* WISELLET */}
          <div className={styles.projectsRow}>
            <div className={styles.projectsRowImg}>
              <img
                className={styles.mobileImg}
                src={process.env.PUBLIC_URL + "/images/wisellet_home.jpg"}
                alt="wisellet"
              />
            </div>
            <div className={styles.projectsRowContent}>
              <h3 className={styles.projectsRowContentTitle}>
                {t("projects.wisellet")}
              </h3>
              <p className={styles.projectsRowContentDesc}>
                {t("projects.wiselletDesc")}
              </p>
              <Button
                width="150px"
                height="50px"
                size="1.6rem"
                text={t("button.viewMore")}
                onClick={() => {
                  setOpenWiselletModal(true);
                  setSelectedModal("wisellet");
                }}
              />
            </div>
          </div>
          {/* META */}
          <div className={styles.projectsRow}>
            <div className={styles.projectsRowImg}>
              <img
                className={styles.mobileImg}
                src={process.env.PUBLIC_URL + "/images/meta-home.jpg"}
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
                text={t("button.viewMore")}
                onClick={() => {
                  setOpenMetaModal(true);
                  setSelectedModal("meta");
                }}
              />
            </div>
          </div>
          {/* BLOCKCHAIN */}
          <div className={styles.projectsRow}>
            <div className={styles.projectsRowImg}>
              <img
                className={styles.mobileImg}
                src={process.env.PUBLIC_URL + "/images/block-chain.jpg"}
                alt="blockchain"
              />
            </div>
            <div className={styles.projectsRowContent}>
              <h3 className={styles.projectsRowContentTitle}>
                {t("projects.otherGames")}
              </h3>
              <p className={styles.projectsRowContentDesc}>
                {t("projects.otherGamesDesc")}
              </p>
              <Button
                width="150px"
                height="50px"
                size="1.6rem"
                text={t("button.viewMore")}
                onClick={() => {
                  setOpenOtherModal(true);
                  setSelectedModal("other");
                }}
              />
            </div>
          </div>
          {/* META-BACKSTAGE */}
          <div className={styles.projectsRow}>
            <div className={styles.projectsRowImg}>
              <img
                className={styles.desktopImg}
                src={process.env.PUBLIC_URL + "/images/backstage.jpg"}
                alt="backstage"
              />
            </div>
            <div className={styles.projectsRowContent}>
              <h3 className={styles.projectsRowContentTitle}>
                {t("projects.backstage")}
              </h3>
              <p className={styles.projectsRowContentDesc}>
                {t("projects.backstageDesc")}
              </p>
              <Button
                width="150px"
                height="50px"
                size="1.6rem"
                text={t("button.viewMore")}
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
        title={t("modal.scroll")}
        open={
          openMetaModal
            ? openMetaModal
            : openOtherModal
            ? openOtherModal
            : openBackstageModal
            ? openBackstageModal
            : openWiselletModal
            ? openWiselletModal
            : openOrderModal
            ? openOrderModal
            : openOrderBackModal
            ? openOrderBackModal
            : false
        }
        onClose={() => {
          setOpenMetaModal(false);
          setOpenOtherModal(false);
          setOpenBackstageModal(false);
          setOpenWiselletModal(false);
          setOpenOrderModal(false);
          setOpenOrderBackModal(false);
        }}
        selectedModal={selectedModal}
      />
    </section>
  );
};

export default Projects;
