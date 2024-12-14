"use client";

import React from "react";
import styles from "./metrics.module.css";
import {
  ArrowUpRightIcon,
  EllipsisVerticalIcon,
} from "@heroicons/react/24/outline";
import { metricsData } from "@/config/metricsData";
import LineChartLayout from "@/components/dashboard/Charts/LineChart/LineChartLayout";

const Metrics = () => {
  const colors = ["#d7dcff", "#dbefff", "#daf4da", "#fffdda"];
  const colorText = ["#5733ff", "#33aaff", "#03c03c", "#5c4033"];
  return (
    <>
      <div className={styles.metrics_container}>
        <div className={styles.m_header}>
          <div>
            <h3>Metrics</h3>
            <p>This metrics will bring back bussiness,big leauge</p>
          </div>
          <div className={styles.h_right}>
            <EllipsisVerticalIcon
              style={{
                height: "1.5rem",
                width: "1.5rem",
                cursor: "pointer",
                color: "grey",
              }}
            />
          </div>
        </div>
        <div className={styles.m_card}>
          {metricsData.map((item, index) => (
            <div
              className={styles.card_content}
              key={index}
              style={{ backgroundColor: colors[index] }}
            >
              <div className={styles.card_header}>
                <div>{item.icon}</div>
                <div
                  style={{ color: "grey", fontSize: "14px", fontWeight: "500" }}
                >
                  {item.day}
                </div>
              </div>
              <div className={styles.card_body}>
                <p style={{ color: colorText[index] }}>{item.name}</p>
                <div className={styles.card_value}>
                  <div className={styles.value_one}>
                    <h3>{item.value}</h3>
                  </div>
                  <div className={styles.value_two}>
                    {item.percentageIcon} <p>{item.percentage}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className={styles.chart}>
          <h3>Client Retention</h3>
          <div className={styles.chart_heading}>
            <div className={styles.chart_left}>
              <h1>400</h1>
              <div className={styles.chart_text}>
                <ArrowUpRightIcon
                  style={{
                    height: "0.75rem",
                    width: "0.75rem",
                    cursor: "pointer",
                    color: "#008929",
                  }}
                  stroke-width="4"
                />{" "}
                <p>
                  <span style={{ color: "#008929", fontWeight: 500 }}>25%</span>{" "}
                  than last 30 days
                </p>
              </div>
            </div>
            <div className={styles.chart_right}>
              <div>
                <select>
                  <option value="">30 days</option>
                  <option value="">365 days</option>
                  <option value="">100 days</option>
                  <option value="">7 days</option>
                </select>
              </div>
              <div className={styles.legend}>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <div className={styles.earning}></div>{" "}
                  <div className={styles.earning_text}>2024</div>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginLeft: "10px",
                  }}
                >
                  <div className={styles.spending}></div>{" "}
                  <div className={styles.spending_text}>2023</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.chart_body}>
          <LineChartLayout />
        </div>
      </div>
    </>
  );
};

export default Metrics;
