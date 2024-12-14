"use client";

import React from "react";
import styles from "./primaryAddress.module.css";

const PrimaryAddress = ({ employeeInfo }) => {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h3>Primary Address</h3>
        {employeeInfo.map((emp) =>
          emp.address.map((item, idx) => (
            <div className={styles.content} key={idx}>
              <div className={styles.text}>
                <h4>Address</h4>
                <p>{item.homeAddress}</p>
              </div>
              <div className={styles.text}>
                <h4>City/State</h4>
                <p>
                  {item.city},{item.state}
                </p>
              </div>
              <div className={styles.text}>
                <h4>Postal Code</h4>
                <p>{item.postalCode}</p>
              </div>
              <div className={styles.text}>
                <h4>Country</h4>
                <p>{item.country}</p>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default PrimaryAddress;
