"use client";

import React from "react";
import styles from "./week.module.css";
import Chart from "react-apexcharts";

const Week = () => {
  var options = {
    series: [83],
    chart: {
      height: 150,
      type: "radialBar",
    },
    plotOptions: {
      radialBar: {
        hollow: {
          size: "70%",
          background: "transparent",
          image: undefined,
        },
        track: {
          strokeWidth: "100%",
        },
      },
    },
    stroke: {
      lineCap: "round",
    },
    colors: ["#1ab7ea"],
    labels: ["Task finished"],
  };

  return (
    <div className={styles.week_container}>
      <div className={styles.week_card}>
        <div className={styles.progress}>
          <h3>Weekly progress</h3>
          <p>Start from</p>
          <p>May 22 - 29,2024</p>
        </div>
        <div id="chart">
          <Chart
            options={options}
            series={options.series}
            type="radialBar"
            height={195}
          />
        </div>
      </div>
    </div>
  );
};

export default Week;
