import React, { useState } from "react";
import styles from "./style.module.scss";
import "./styles.scss";
import { Button, Menu, Col, Row } from "antd";
import MenuIcon from "./icons/MenuIcon";
import { CloseOutlined } from "@ant-design/icons";
import { CSSTransition } from "react-transition-group";
const Header = () => {
  const [isOpen, setIsOpen] = useState();

  function getItem(label, key, children) {
    return {
      key,
      children,
      label,
    };
  }

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className={`${styles.container} nav-bar`}>
        <div className={styles.logoGroup}>
          <img className={styles.selfPhoto} src="/images/avatar.jpg"></img>
          <span>WENDY TSAI</span>
        </div>
        <div className={styles.menu}>
          <Button onClick={toggleCollapse} type="text">
            {isOpen ? (
              <CloseOutlined style={{ fontSize: "15px" }} />
            ) : (
              <MenuIcon></MenuIcon>
            )}
          </Button>
        </div>
      </div>
      <div className={styles.menuList}>
        <CSSTransition in={isOpen} classNames="dropdown" unmountOnExit>
          <ul>
            <li>
              <a href="#home">HOME</a>
            </li>
            <li>
              <a href="#about">ABOUT</a>
            </li>
            <li>
              <a href="#projects">PROJECTS</a>
            </li>
            <li>
              <a href="#contact">CONTACT</a>
            </li>
          </ul>
        </CSSTransition>
      </div>
    </>
  );
};

export default Header;
