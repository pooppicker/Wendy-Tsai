import React, { useState } from "react";
import { Button, Modal, Carousel } from "antd";
import { imageSrc } from "./mock";
import styles from "./style.module.scss";
import "./style.scss";
const ProjectModal = ({ open, onClose, title, selectedModal }) => {
  return (
    <Modal
      width={selectedModal === "backStage" ? 1000 : 500}
      title={title}
      centered
      open={open}
      onCancel={onClose}
      footer=""
      className="modal-carousel"
    >
      <Carousel autoplay>
        {selectedModal === "meta"
          ? imageSrc?.meta?.map((i, index) => {
              return (
                <div key={"carousel" + index} className={styles.imgWrapper}>
                  <img className={styles.modalImg} src={i.src} alt="meta" />
                </div>
              );
            })
          : selectedModal === "other"
          ? imageSrc?.other.map((i, index) => {
              return (
                <div key={"carousel" + index} className={styles.imgWrapper}>
                  <img className={styles.modalImg} src={i.src} alt="other" />
                </div>
              );
            })
          : ""}
        {selectedModal === "backStage"
          ? imageSrc?.backstage.map((i, index) => {
              return (
                <div
                  key={"carousel" + index}
                  className={styles.imgWrapperDesktop}
                >
                  <img
                    className={styles.modalImgDesktop}
                    src={i.src}
                    alt="backstage"
                  />
                </div>
              );
            })
          : ""}
      </Carousel>
    </Modal>
  );
};

export default ProjectModal;
