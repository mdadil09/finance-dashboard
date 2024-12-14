"use client";

import React from "react";
import styles from "./skeletonDark.module.css";
import { CheckIcon } from "@heroicons/react/24/outline";
import { useTheme } from "next-themes";

const SkeletonDark = ({ dark, handleDarkTheme }) => {
  const { theme } = useTheme();

  return (
    <div className={styles.mainC}>
      <div
        className={styles.skeletonContainer}
        onClick={handleDarkTheme}
        style={{ border: theme === "dark" ? "3px solid #3B71CA" : "" }}
      >
        <div className={styles.hBox}>
          <div className={styles.skeletonHeader}></div>
        </div>
        <div className={styles.skeletonList}>
          <div
            className={styles.sBox}
            style={{
              borderTopLeftRadius: "5px",
              borderTopRightRadius: "5px",
              marginBottom: "5px",
            }}
          >
            <div className={styles.smallSkl}></div>
            <div className={styles.skeletonItem}></div>
          </div>
          <div className={styles.sBox} style={{ marginBottom: "5px" }}>
            <div className={styles.smallSkl}></div>
            <div className={styles.skeletonItem}></div>
          </div>
          <div className={styles.sBox}>
            <div className={styles.smallSkl}></div>
            <div className={styles.skeletonItem}></div>
          </div>
        </div>
      </div>
      <div className={styles.darkText}>
        {" "}
        <CheckIcon
          style={{
            height: "1rem",
            width: "1rem",
            color: !dark ? "var(--text-color)" : "#2196f3",
            marginRight: "5px",
          }}
          strokeWidth={4}
        />{" "}
        <div style={{ color: !dark ? "var(--text-color)" : "#2196f3" }}>
          Dark
        </div>
      </div>
    </div>
  );
};

export default SkeletonDark;
