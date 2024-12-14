"use client";

import { CheckIcon } from "@heroicons/react/24/outline";

import React from "react";
import styles from "./skeletonSystemDefault.module.css";
import { useTheme } from "next-themes";

const SkeletonSystemDefault = ({ isSystem, handleSystemTheme }) => {
  const { theme } = useTheme();

  return (
    <div className={styles.mainC}>
      <div
        className={styles.skeletonContainer}
        onClick={handleSystemTheme}
        style={{ border: theme === "system" ? "3px solid #3B71CA" : "" }}
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
            color: !isSystem ? "var(--text-color)" : "#2196f3",
            marginRight: "5px",
          }}
          strokeWidth={4}
        />{" "}
        <div style={{ color: !isSystem ? "var(--text-color)" : "#2196f3" }}>
          System Default
        </div>
      </div>
    </div>
  );
};

export default SkeletonSystemDefault;
