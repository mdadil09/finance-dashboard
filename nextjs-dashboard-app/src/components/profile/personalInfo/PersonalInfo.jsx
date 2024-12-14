"use client";

import React, { useContext } from "react";
import styles from "./personal.module.css";
import { DataContext } from "@/app/dashboard/layout";

const PersonalInfo = ({ personalInfo }) => {
  const { isResponsive } = useContext(DataContext);

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h3>Personal Information</h3>
        {personalInfo.map((item, idx) => (
          <div className={styles.content} key={idx}>
            <div className={styles.text}>
              <h4>First Name</h4>
              <p>{item.firstName}</p>
            </div>
            <div className={styles.text}>
              <h4>Last Name</h4>
              <p>{item.lastName}</p>
            </div>
            <div className={styles.text}>
              <h4>Email Address</h4>
              <p>{item.email}</p>
            </div>
            <div className={styles.text}>
              <h4>Phone</h4>
              <p>{item.mobileNo}</p>
            </div>
            <div className={styles.text}>
              <h4>Date of Birth</h4>
              <p>{item.dob}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PersonalInfo;
