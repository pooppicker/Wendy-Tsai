import React, { Component } from "react";
import { Button } from "antd";
import styles from "./style.module.scss"
const PrimaryButton = ({ height, onClick, text, width, size }) => {
  return (
    <Button
      className={styles.mainButton}
      onClick={onClick}
      type="primary"
      style={{
        zIndex: 99,
        background: "#facf0f",
        color: "#333",
        width: `${width}`,
        height: `${height}`,
        textTransform: "uppercase",
        boxShadow: "0 5px 15px 0 rgb(0 0 0 / 15%)",
        transition: "width 3px",
        borderRadius: "5px",
        fontSize: `${size ? size : "2rem"}`,
        fontWeight: 700,
        letterSpacing: "1px",
        cursor: "pointer",
        alignItems: "center",
        // padding: "1.5rem 5rem"
      }}
    >
      {text}
    </Button>
  );
};

export default PrimaryButton;
