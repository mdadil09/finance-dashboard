"use client";

import React, { useState } from "react";
import styles from "./inboxMessages.module.css";
import { inboxData } from "@/config/inboxData";

const InboxMessages = ({ handleClick }) => {
  return (
    <div className={styles.ibM_container}>
      <div className={styles.ibM_content}>
        {inboxData.map((item, index) => (
          <div
            className={styles.ibM_card}
            key={index}
            style={{
              boxShadow:
                "0 10px 15px rgba(0, 0, 0, 0.25), 0 4px 6px rgba(0, 0, 0, 0.1)",
              backgroundColor: "var(--card-bg)",
              marginTop: "20px",
              padding: "10px",
              borderRadius: "8px",
              // width: !isResponsive ? "65%" : "70%",
            }}
            onClick={handleClick}
          >
            <div className={styles.card_heading}>
              <div className={styles.logo}>
                <img src={item.data.companyLogo} alt="" />
              </div>
              <div className={styles.paymentType}>{item.data.paymentType}</div>
            </div>
            <div className={styles.card_sub_heading}>
              <div className={styles.sub_heading_text}>
                {item.data.paymentType === "Payments"
                  ? "Invoice"
                  : item.data.paymentType === "Plan"
                  ? "Plan"
                  : "Subscribe"}{" "}
                - {item.data.month}
              </div>
              <div className={styles.sub_heading_text}>{item.data.date}</div>
            </div>
            <div className={styles.messages}>
              <p>{item.data.message}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InboxMessages;
