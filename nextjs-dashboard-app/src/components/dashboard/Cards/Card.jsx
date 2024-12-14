"use client";

import React, { createContext } from "react";
import styles from "./card.module.css";
import { cardData } from "@/config/cardData";
import { DataContext } from "@/app/dashboard/layout";

const Card = ({ isResponsive }) => {
  const { isThemes } = createContext(DataContext);

  return (
    <div className={styles.card_container}>
      {cardData.map((item, index) => (
        <div
          className={
            !isResponsive ? styles.card_content : styles.card_content_full
          }
          key={index}
        >
          <div className={styles.card_heading}>
            {item.icon} <h3>{item.heading}</h3>
          </div>
          <div className={styles.card_body}>
            <div>{item.dataDollar}</div>{" "}
            <div
              className={styles.card_body_solid}
              style={{
                backgroundColor: item.isLoss ? "#EF0107" : "",
                color: item.isLoss ? "white" : "",
              }}
            >
              {item.dataIcon}
              <p>{item.dataPercentage}</p>
            </div>
          </div>
          <div className={styles.card_footer}>
            <span style={{ color: item.isLoss ? "#EF0107" : "#03c03c" }}>
              {item.revenue}
            </span>{" "}
            than last month
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
