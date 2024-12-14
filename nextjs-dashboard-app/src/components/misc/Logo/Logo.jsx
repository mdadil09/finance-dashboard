"use client";

import React from "react";
import styles from "./logo.module.css";

const Logo = ({ isNavLogo }) => {
  return (
    <div className={!isNavLogo ? styles.sidebar_logo : styles.sidebar_logo_nav}>
      <h3
        style={{
          color: "var(--text-color)",
          margin: 0,
          border: "1px solid #1cac78",
          borderRadius: "8px",
        }}
      >
        <span className={!isNavLogo ? styles.logoOne : styles.logoOne_nav}>
          N&N
        </span>
        <span className={!isNavLogo ? styles.logoTwo : styles.logoTwo_nav}>
          Finance
        </span>
      </h3>
    </div>
  );
};

export default Logo;
