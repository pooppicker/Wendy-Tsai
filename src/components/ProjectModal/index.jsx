import React, { useState } from "react";
import { Button, Modal, Carousel } from "antd";
import mockdata from "./mock";
const ProjectModal = ({ open, onClose, title, selectedModal }) => {
  console.log(selectedModal);
  return (
    <Modal title={title} centered open={open} onCancel={onClose}>
      <Carousel autoplay>
        {selectedModal === "meta"
          ? mockdata.imageSrc.meta.map((i) => {
              return (
                <div>
                  <img src={i.src} alt="meta" />
                </div>
              );
            })
          : selectedModal === "other"
          ? mockdata.imageSrc.other.map((i) => {
              return (
                <div>
                  <img src={i.src} alt="other" />
                </div>
              );
            })
          : ""}
        {selectedModal === "backStage"
          ? mockdata.imageSrc.backstage.map((i) => {
              return (
                <div>
                  <img src={i.src} alt="backstage" />
                </div>
              );
            })
          : ""}
      </Carousel>
    </Modal>
  );
};

export default ProjectModal;
