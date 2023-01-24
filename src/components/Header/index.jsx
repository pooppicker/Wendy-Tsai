import React, { useState, useEffect } from "react";
import styles from "./style.module.scss";
import "./styles.scss";
import { Button, Menu, Col, Row } from "antd";
import MenuIcon from "./icons/MenuIcon";
import { CloseOutlined } from "@ant-design/icons";
import { CSSTransition } from "react-transition-group";
import { useTranslation } from "react-i18next";

const Header = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState();
  const [isSelected, setIsSelected] = useState();
  const [windowSize, setWindowSize] = useState(getWindowSize());
  function getWindowSize() {
    const { innerWidth } = window;
    return { innerWidth };
  }

  function navItems() {
    return (
      <>
        <ul
          onClick={() => {
            setIsOpen(false);
          }}
        >
          <li>
            <a href="#home">{t("nav.home")}</a>
          </li>
          <li>
            <a href="#about">{t("nav.about")}</a>
          </li>
          <li>
            <a href="#projects">{t("nav.projects")}</a>
          </li>
          <li>
            <a href="#contact">{t("nav.contact")}</a>
          </li>
        </ul>
      </>
    );
  }

  function toggleCollapse() {
    setIsOpen(!isOpen);
  }

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }
    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  useEffect(() => {
    console.log(isOpen);
  }, [isOpen]);

  return (
    <div className={styles.header}>
      <div className={`${styles.container} nav-bar`}>
        <div
          className={styles.logoGroup}
          onClick={(e) => {
            e.preventDefault();
            window.location.href = "#home";
          }}
        >
          <img className={styles.selfPhoto} src={process.env.PUBLIC_URL + "/images/avatar.jpg"} alt="avatar"></img>
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
          <CSSTransition
            in={isOpen}
            classNames="dropdown"
            timeout={200}
            unmountOnExit
          >
            {navItems}
          </CSSTransition>
        </div>
      )}
    </div>
  );
};

export default Header;
