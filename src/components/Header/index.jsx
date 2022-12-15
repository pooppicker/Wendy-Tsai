import React, { useState, useEffect } from "react";
import styles from "./style.module.scss";
import "./styles.scss";
import { Button, Menu, Col, Row } from "antd";
import MenuIcon from "./icons/MenuIcon";
import { CloseOutlined } from "@ant-design/icons";
import { CSSTransition } from "react-transition-group";
const Header = () => {
  const [isOpen, setIsOpen] = useState();
  const [windowSize, setWindowSize] = useState(getWindowSize());
  function getWindowSize() {
    const { innerWidth } = window;
    return { innerWidth };
  }

  function navItems() {
    return (
      <>
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
      </>
    );
  }
  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }
    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <div className={styles.header}>
      <div className={`${styles.container} nav-bar`}>
        <div className={styles.logoGroup}>
          <img className={styles.selfPhoto} src="/images/avatar.jpg"></img>
          <span>WENDY TSAI</span>
        </div>
        <div className={styles.menu}>
          {windowSize.innerWidth >= 600 ? (
            ""
          ) : (
            <Button onClick={toggleCollapse} type="text">
              {isOpen ? (
                <CloseOutlined style={{ fontSize: "24px" }} />
              ) : (
                <MenuIcon></MenuIcon>
              )}
            </Button>
          )}
        </div>
      </div>
      {windowSize.innerWidth >= 600 ? (
        <div className={styles.menuListWebView}>{navItems()}</div>
      ) : (
        <div className={styles.menuList}>
          <CSSTransition in={isOpen} classNames="dropdown" timeout={200} unmountOnExit>
            {navItems}
          </CSSTransition>
        </div>
      )}
    </div>
  );
};

export default Header;
