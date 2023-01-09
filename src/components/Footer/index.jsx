import React, { useState } from "react";
import styles from "./style.module.scss";
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.mainContainer}>
        <Link className={styles.lang}>
          <div>English</div>
          <div>｜繁體中文</div>
        </Link>
        <div className={styles.mainFooterUpper}>
          <div className={styles.mainFooterRow1}>
            <h2 className={styles.heading}>Social</h2>
            <div className={styles.footerSocialCont}>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/in/wendy-tsai-712632147"
              >
                <img
                  className={styles.mainFooterIcon}
                  src="https://d33wubrfki0l68.cloudfront.net/7f29579dde49e02480372aa49f7189c5536b0118/34b92/assets/png/linkedin-ico.png"
                  alt="Wendy Tsai Linkedin Profile"
                />
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/pooppicker"
              >
                <img
                  className={styles.mainFooterIcon}
                  src="https://d33wubrfki0l68.cloudfront.net/5557d5a11584d7201a38ee1a95200f57a4cc0f88/15085/assets/png/github-ico.png"
                  alt="Wendy Tsai github"
                />
              </a>
            </div>
          </div>
          <div className={styles.mainFooterRow2}>
            <h2 className={styles.heading}>Wendy Tsai</h2>
            <p className={styles.footerShortDesc}>
              A Frontend Developer building the Frontend of Websites and Web
              Applications with Vue and React
            </p>
          </div>
        </div>
        <div className={styles.mainFooterLower}>
          © Copyright 2022. Made by
          <a href="#home" target="_blank">
            Wendy Tsai
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
