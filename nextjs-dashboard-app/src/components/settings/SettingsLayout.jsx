"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import styles from "./settings.module.css";
import SkeletonLoader from "./skeleton/SkeletonLoader";
import SkeletonDark from "./skeletonDark/SkeletonDark";
import SkeletonSystemDefault from "./skeletonSystemDefault/SkeletonSystemDefault";
import { useTheme } from "next-themes";
import { DataContext } from "@/app/dashboard/layout";

const SettingsLayout = () => {
  const [noti, setNoti] = useState(false);
  const [pref, setPref] = useState(true);
  const {
    isResponsive,
    isClicked,
    dark,
    isSystem,
    handleLightTheme,
    handleDarkTheme,
    handleSystemTheme,
  } = useContext(DataContext);

  const handleButtonClick = () => {
    setNoti(true);
  };

  return (
    <div className={styles.container}>
      <div className={!isResponsive ? styles.card : styles.card_big}>
        <h1>Settings</h1>
        <div className={styles.heading}>
          <button
            style={{
              borderBottom: pref ? "3px solid #2196f3" : "3px solid lightgray",
            }}
          >
            Preferences
          </button>
          <button
            style={{
              borderBottom: noti ? "3px solid #2196f3" : "3px solid lightgray",
            }}
          >
            Notification
          </button>
        </div>
        <div className={styles.card_body}>
          <div className={styles.mode}>
            <h3>Theme</h3>
            <div className={styles.skeleton}>
              <SkeletonLoader
                isClicked={isClicked}
                handleLightTheme={handleLightTheme}
              />
              <SkeletonDark dark={dark} handleDarkTheme={handleDarkTheme} />
              <SkeletonSystemDefault
                isSystem={isSystem}
                handleSystemTheme={handleSystemTheme}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsLayout;
