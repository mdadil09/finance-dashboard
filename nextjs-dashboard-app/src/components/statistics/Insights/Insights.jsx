"use client";

import React, { useState } from "react";
import styles from "./Insights.module.css";
import { FolderOpenIcon } from "@heroicons/react/24/solid";
import {
  EllipsisHorizontalIcon,
  EllipsisVerticalIcon,
} from "@heroicons/react/24/outline";
import AreaChartLayout from "@/components/dashboard/Charts/AreaChart/AreaChart";
import { insightData } from "@/config/insightData";

const Insights = () => {
  const [day, setDay] = useState(true);
  const [week, setWeek] = useState(false);
  const [month, setMonth] = useState(false);

  const toggleDayClick = () => {
    setDay(true);
    setMonth(false);
    setWeek(false);
  };

  const toggleMonthClick = () => {
    setDay(false);
    setMonth(true);
    setWeek(false);
  };

  const toggleWeekClick = () => {
    setDay(false);
    setMonth(false);
    setWeek(true);
  };
  return (
    <>
      <div className={styles.insight_container}>
        <div className={styles.insight_header}>
          <div className={styles.folderOpenIcon}>
            <FolderOpenIcon
              style={{
                height: "1.5rem",
                width: "1.5rem",
                cursor: "pointer",
                color: "#007fff",
              }}
            />
          </div>
          <div className={styles.insights_right}>
            <div
              className={styles.mark_completed}
              style={{
                boxShadow:
                  "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
                padding: "8px",
                borderRadius: "5px",
                marginRight: "8px",
                flex: "0 0 auto",
                cursor: "pointer",
              }}
            >
              Mark Completed
            </div>
            <div
              style={{
                boxShadow:
                  "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
                padding: "5px",
                borderRadius: "5px",
                flex: "0 0 auto",
              }}
            >
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
        </div>
        <div className={styles.insights_subHeader}>
          <h3>Revenue Make Big Good</h3>
          <p>This revenue will bring back bussiness,big leauge</p>
          <div className={styles.btns}>
            <button
              onClick={toggleDayClick}
              style={{
                backgroundColor: day ? "var(--btn-bg-one)" : "",
                borderRadius: "5px",
              }}
            >
              Day
            </button>
            <button
              onClick={toggleWeekClick}
              style={{
                backgroundColor: week ? "var(--btn-bg-one)" : "",
                borderRadius: "5px",
              }}
            >
              Week
            </button>
            <button
              onClick={toggleMonthClick}
              style={{
                backgroundColor: month ? "var(--btn-bg-one)" : "",
                borderRadius: "5px",
              }}
            >
              Month
            </button>
          </div>
        </div>
        <div className={styles.insight_chart}>
          <div className={styles.insight_chart_header}>
            <div className={styles.chart_header_left}>
              <div className={styles.total_balance}>
                <h3>Total Balance</h3>
                <div>i</div>
              </div>

              <div className={styles.total_money}>
                <div className={styles.money}>
                  <h1>2982</h1>
                </div>
                <div className={styles.percentage}>2.45%</div>
              </div>
            </div>
            <div className={styles.chart_header_right}>
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

          <div className={styles.insight_chart_body}>
            <AreaChartLayout />
          </div>
        </div>
        <div className={styles.insight_footer}>
          <h3>Insights</h3>
          <div className={styles.upper_data}>
            {insightData.map((item, index) => (
              <div className={styles.upper_data_content} key={index}>
                <div className={styles.name}>{item.name}</div>
                <div className={styles.value}>
                  <div className={styles.value_one}>{item.value}</div>
                  <div className={styles.value_two}>{item.percentage}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Insights;
