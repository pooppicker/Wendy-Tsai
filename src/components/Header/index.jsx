import React from "react";
import styles from "./style.module.scss";
import { Button, Menu } from "antd";
import MenuIcon from "./icons/MenuIcon";
import CloseOutlined from "@ant-design/icons"
const Header = () => {
  const menuList = [
    {
      key: "1",
      label: "HOME",
    },
    {
      key: "2",
      label: "ABOUT",
    },
    {
      key: "3",
      label: "PROJECTS",
    },
    {
      key: "4",
      label: "CONTACT",
    },
  ];

  return (
    <>
      <div className={styles.container}>
        <div className={styles.logoGroup}>
          <img className={styles.selfPhoto} src="/logo192.png"></img>
        </div>
        <div className={styles.menu}>
          <MenuIcon></MenuIcon>
          <CloseOutlined />
          <Menu items={menuList}></Menu>
        </div>
      </div>
    </>
  );
};

export default Header;
