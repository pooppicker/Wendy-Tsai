import React, { Component } from "react";
import { Button } from "antd";
const PrimaryButton = ({ height, onClick, text, width }) => {
  return (
    <Button
      onClick={onClick}
      type="primary"
      style={{
        zIndex: 999,
        background: "#facf0f",
        color: "#333",
        width: `${width}`,
        height: `${height}`,
        textTransform: "uppercase",
        boxShadow: "0 5px 15px 0 rgb(0 0 0 / 15%)",
        transition: "width 3px",
        borderRadius: "5px",
        fontWeight: 700,
        letterSpacing: "1px",
        cursor: "pointer",
      }}
    >
      {text}
    </Button>
  );
};

export default PrimaryButton;
