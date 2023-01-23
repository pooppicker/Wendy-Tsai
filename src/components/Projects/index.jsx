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
                src="https://lh3.googleusercontent.com/RqLXvDLIXIBY4l4U9AbH99eVm3B5kopE_1np22MAeCSBypvDxMdaw7ovZGXhxOG4ywXgUAQwi9RKBHUBYLU6ABtk0hFULhnIdIfaDZVyM3RD6bKh9gfFikAFD1EaiStB5Fwu2ZT0U8eUodB8CwwwoaHOviH3g-0QNhZKwZv4b0HVah44cCeklnsWlGR4c41ppj5v9qxJKQVuERWW6GxxBCiq2j-qk28GGw-EadNMdoabvHPaN2bZ69cbtii-vzoS9Cw1t4DD0ypcFLY6zZ5PtOJdJo0LQ9d2h4Rc_xyJDv9fSYx9e5v4q6OOI29ZrBfCF1z2_Y-P92VNDRTa9aqiIVEUJ-haZkRyANm3KNmEC2XTDEVVJTUrxPen04fWsAoogWZA_0O-FKgdF6ks9HJRuwvtQFGKl3A3tsbHjV1PmF1pD7hkNMJHAZkpYUGEyFN94zAKFNZm2TVSfzoUHFilG1_GHlnrD8lmnV106wBmWGwehkyMg8bkzJytz8GQPbKg3kfCpHqNLqyBHdG4NRrKlOBCRKlS5LMswgalrSze5dCq8xh7HuJhLEtZCb0vvAhvU7jA6YDJTVLlNYhJ9ZBxH1Yg231j-aZZUwyUsaJfuByGVdpGkKKE4GZMqTIRApJ6XYJq3tQbfu7dDjTQora9foUbcyHNSEDofoJDgkpRo0ELlfE2SQf33uellnmcs_6d9L7pyv37SgHbhPqpEl5-qVljS3ZOU7sr6JdWT7JLhnJTvtHEJ7yu6w8u9DUyKxJbteIlGlhE7Zm8rfHp8S8DHd0bjljnJkLiGyzlhlitQ_E4BWNOGzP3KzMnvEjFVCOFO8yrVMfS3qe2DMi9kS-ceWFJF1aiEb5G6o6DpDOBtSbRkQant0CQ1dZP0Sonpy_VPY5UyY7T3XbHy4B_bknZaLDhBqQ7YMbRPnXLuantux9q6krY4NXzIEpI4ulXQlipq7IyumEBwjMVroFdtU8=w758-h1530-no?authuser=0"
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
                text={t('button.viewMore')}
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
                src="https://lh3.googleusercontent.com/W3AjVPd9dPGhSVoOVYKspgw1dQLzCY8filZSM_sPQicwoimSl_5wY6XdYat5944GYz-9vInzq-BIgpKItXKBmRbcE_KlSg01fqlXxQV5kWJS_8lkx3X5UpppS8-6NilNQz0inU3kVJVVpJ1qqrT7BXTNYUO5mw1K5RLBGspEBKhe0qglXwkRKQ4YCaUCo9uqU55gx0p4lxD16Jm-uhP2rcHQcCQdorYLeDNyT56Dx1ZWFzaq5T44qQ_lLq0zjQNfgTM0dYUYdr64blgSPe14QmuG8PEpTJtnhDseOgH_25xu15g4RIfQHWSF6U0QlclroJQxLXBX7x6N_NLKtOwVildcFS8jyvL3e9McsOVTomV3GOYlT9UJ_hGwncnTNO5uZjx8XtGml76YEse9tpAXegJo39_j2Ks2H50rnevsV92-dHqKKkLOP9BXC3IXoh4aipMlJJKVSssoRWmfiHfFKRR63eHNV4EPKnWQolYDwgowbYAxQH-x_KaN266r0AGaxYxxBoVg1zImmch8jk02NvL2kp9oRGR67ltgcMOsdJPVBibx-fuBU2YSHT1Uvrfgv4u-HA9EdeLUlU0wrkdRywAybvpgm9Dgvy8bfwieDuTb4YlIfrWUh644HuDuaAfriWg5ijGk4OIFV9QCQC8OsLYTaY3QKwyywA9xW2mpreHLoCtb1QK0HQOV5VVYHSAM0MI2gNsapPqfXf0UZemoogNya3THmil2iThnU7Fr2OOq-01qp-0rv3pXzpZYyPpLszJCixNXtEO1L3Vxm5toXt3AudOsQu2eaRtujPWjP7P5dGBDN_0oLpAqXWTp6nK7SvCLfPAWyv0floWoiduzCSUkvwoGlNoj9E9mAyB8OgA2RKF60PbajHfmahjpeVbTye9wABisKF06jHbD-notbyYDeq9g2WXYZ3n88ZPoRAfn3EUmTzEyrMcL53_by5xTCInIPm_pAFAAS7Tz9cQ=w760-h1528-no?authuser=0"
                alt="blockchain"
              />
            </div>
            <div className={styles.projectsRowContent}>
              <h3 className={styles.projectsRowContentTitle}>{t('projects.otherGames')}</h3>
              <p className={styles.projectsRowContentDesc}>
                {t('projects.otherGamesDesc')}
              </p>
              <Button
                width="150px"
                height="50px"
                size="1.6rem"
                text={t('button.viewMore')}
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
                src="https://lh3.googleusercontent.com/xsmcVq7P4T6NcjaryUUjkF43ejHMKYetcvCUEhaaL-lVdVLX9shIvV12M4xCyFhwRZu2qI1o-LFE-03hKkvktMJTJ8ZdPMZkdmEewacaDWWNOSl9JLHkmoxT1x47khZpdutBHOQDLO49hpTkhaMPWkFT8EmBc54-8YnTtd2oYVk6GTYCoq3iTiWNcN_RsHg8Lf7vRVhWNhxoKk36or0eRdua4MZbRlzpdBIcivwmczPX7jBPHdVsSeL5I9o4eW8dycss1uXylXa8qhhzlHhSw3O8Fu4zNHoZTQZqUZBppDmVZi_tAhIcydCrTcMalqQj4bOtUQKC6hvAFvr8nadqUqiQkVNGhAOTzDLy2WesgqQy4KdDLdojCXN5vcGfbBqYOOFX6zvw5UQcySlRMdVO7P41HZzq1tlpplx2AITeV25y9pekUncpEM5hJaAR42qsTbRzuegi1qXuhGuiZ4R5kJVc_BKT5EnMqAnyLmseCpd5aCv2dk7SFt7d91YEHqxnN1sdMCiCH-U4lCQkgWBrImZFRhwYO1Fzt01UNTCRzpdiEs9WTdaoATUtWnY462XnpBzlvzgpNSU7iW5UsxalHCUx67IzsSGaWnEUIwL2nRq9ciPfIGV9r8kIq7aB_doBxAEOwP8x_wFUpayheZhQEwwEssetxw9eZj8HtZHbD9UB2TMZfbw5hktaxaD36XuiRetm01KZGHuWWWwjnexeD3TimvElx2wGrYTwfIY_Yxuy623LQNRnNVsD6XvYa8ME28bojOOt622qTJJL347hY0X0bIuanSG_gSglBnYY2MGpuSNaCjnIlZ26XnaF9z5gTzrjp37MWLlIjN4kzA1g1p7Gf1ScsN-lzN4BetIrsNgQlSkkmMnQyHtY3GTTsZ9_1Mgq3e9yL84AWsl899nGDVFt8gEerDNJnkMitkGONhHSS-JKA5o1bYPR7OZP_ImamMjrFprrCQLg2UcTisM=w2538-h1468-no?authuser=0"
                alt="backstage"
              />
            </div>
            <div className={styles.projectsRowContent}>
              <h3 className={styles.projectsRowContentTitle}>{t('projects.backstage')}</h3>
              <p className={styles.projectsRowContentDesc}>
                {t("projects.backstageDesc")}
              </p>
              <Button
                width="150px"
                height="50px"
                size="1.6rem"
                text={t('button.viewMore')}
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
        title={t('modal.scroll')}
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
