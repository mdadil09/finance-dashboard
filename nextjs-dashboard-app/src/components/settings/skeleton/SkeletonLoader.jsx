"use client";

import React, { useState } from "react";
import styles from "./skeletonLoader.module.css";
import { CheckBadgeIcon, CheckIcon } from "@heroicons/react/24/outline";
import { useTheme } from "next-themes";

const SkeletonLoader = ({ isClicked, handleLightTheme }) => {
  const { theme } = useTheme();
  return (
    <div className={styles.mainC}>
      <div
        className={styles.skeletonContainer}
        onClick={handleLightTheme}
        style={{ border: theme === "light" ? "3px solid #3B71CA" : "" }}
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
        <CheckIcon
          style={{
            height: "1rem",
            width: "1rem",
            color: !isClicked ? "var(--text-color)" : "#2196f3",
            marginRight: "5px",
          }}
          strokeWidth={4}
        />{" "}
        <div style={{ color: !isClicked ? "var(--text-color)" : "#2196f3" }}>
          Light
        </div>
      </div>
    </div>
  );
};

export default SkeletonLoader;
