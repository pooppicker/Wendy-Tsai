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
          <img className={styles.selfPhoto} src="https://lh3.googleusercontent.com/9j1T04UYSrCJu7joGoYIuSBLBYP4aXRQVi-Xe4dwuWDufUR7fTVPb9_1dE3ycm3RH4JWwtw2EBp6RBhgpYZDJXGwcsEQ2eq0NIihVy24oybWNB5fOGs389q1_fnQmTvaRiPujGkTFsT99cC84knpbONARk2PqHg0up2IquhAlVSgHYDttu_40tn7EiwCIHRiVXTcPVroXnG4ObpxcZOuWtvCQTx9x4aYsXdh_jR5ziGT72FUmTPje2W9OBjZK9nytnZ-notoSS74uGQvKzH0WmxZzcXv_Gd4rawP-h4mPuadwzA4JYFnG9jtMacOAkYQCi4a4IrAVcUe59uOC2U-eV6dLd64dkvZDI_MVatmFFSM5Hz_awSMfLJ1tSPZzf0bY6P9_rKl-oeOSQIhod7ZpOx5AxQP5HrtgfI-eT3AYAsdXGD2-YtD3_wWpRNUwOYYibzHwQBq2B4zhP2Y8OQ54P2MlVXRxOUvtUzIGaDgYDw7_DiNsW2WNUwztxAoo_3ciyJM9tDfRQQypL8G6V3vkB3SW0eUBRrg37LGHyABVcWUjlk0rV1BhJ6JGdhTIziTiGO4rdv04YVk7vrNkzbp9RvgMUwg1a4zuv4Fg9wtmU_X-1UllJ7uW0YLUVGmckDaubaA58LOgZsVZSjth51t6Iw7_8PGldLkTqR0xzBBBcwdW1cZQV_im5f2j1va5h80xfeioe-R0iqWJCVFAHg6nxTqF_i6FBZFUTLG5LD8M39nVFEhKLEktirK6ZSnG1SfPBhUyL_YDPvJe9fqLCPMBltnd1D_cUGuK2hJC4FtZAg_L7QAS5du3T4pS3brIQ6LsXOf-p1ujBLG9e4BaTadX59dDEXWV6GY3Nv2lNEsLQZsLryssqv4oYHZyHVzTEP0Y72e-ryb7Lp2XzjHCvZMZ4qfW-Jn-apFEk7yzAZ7_GL5dtXWDUp5GTckb4e3-1MEguC72IzCZ7bBkmgbHUg=w1040-h1528-no?authuser=0"></img>
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
