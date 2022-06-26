import React from "react";
import { ReactSVG } from "react-svg";
import logo from "../../img/header_logo.svg";
import Nav from "./Nav/Nav";
import Input from "./Input/Input";

import styles from "./header.module.css";

const arr = [
  "Discover",
  "Collection",
  "Launchpad",
  "Activity",
  "Community",
  "How it works",
];

function Header(params) {
  return (
    <header className={styles.header}>
      <div className={`container ${styles.header_container}`}>
        <a href="./">
          <ReactSVG src={logo} />
        </a>
        <Nav arr={arr} />
        <Input />
      </div>
    </header>
  );
}

export default Header;
