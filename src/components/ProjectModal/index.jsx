import React, { useState } from "react";
import { Button, Modal, Carousel } from "antd";
import { imageSrc } from "./mock";
import styles from "./style.module.scss";
import "./style.scss";
const ProjectModal = ({ open, onClose, title, selectedModal }) => {
  const renderCarouselItems = () => {
    switch (selectedModal) {
      case "order":
        return imageSrc?.order?.map((i, index) => (
          <div key={`carousel-order-${index}`} className={styles.imgWrapper}>
            <img
              className={styles.modalImg}
              src={process.env.PUBLIC_URL + i.src}
              alt="order"
            />
          </div>
        ));

      case "orderBack":
        return imageSrc?.orderBack?.map((i, index) => (
          <div
            key={`carousel-orderBack-${index}`}
            className={styles.imgWrapper}
          >
            <img
              className={styles.modalImgDesktop}
              src={process.env.PUBLIC_URL + i.src}
              alt="orderBack"
            />
          </div>
        ));

      case "wisellet":
        return imageSrc?.wisellet?.map((i, index) => (
          <div key={`carousel-wisellet-${index}`} className={styles.imgWrapper}>
            <img
              className={styles.modalImg}
              src={process.env.PUBLIC_URL + i.src}
              alt="wisellet"
            />
          </div>
        ));

      case "meta":
        return imageSrc?.meta?.map((i, index) => (
          <div key={`carousel-meta-${index}`} className={styles.imgWrapper}>
            <img
              className={styles.modalImg}
              src={process.env.PUBLIC_URL + i.src}
              alt="meta"
            />
          </div>
        ));

      case "other":
        return imageSrc?.other.map((i, index) => (
          <div key={`carousel-other-${index}`} className={styles.imgWrapper}>
            <img
              className={styles.modalImg}
              src={process.env.PUBLIC_URL + i.src}
              alt="other"
            />
          </div>
        ));

      case "backStage":
        return imageSrc?.backstage.map((i, index) => (
          <div
            key={`carousel-backstage-${index}`}
            className={styles.imgWrapperDesktop}
          >
            <img
              className={styles.modalImgDesktop}
              src={process.env.PUBLIC_URL + i.src}
              alt="backstage"
            />
          </div>
        ));

      default:
        return null;
    }
  };

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
      <Carousel autoplay>{renderCarouselItems()}</Carousel>
    </Modal>
  );
};

export default ProjectModal;
