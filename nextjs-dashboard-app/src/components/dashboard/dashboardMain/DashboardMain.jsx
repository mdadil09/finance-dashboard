"use client";

import React from "react";
import styles from "./dashboard.module.css";
import Card from "../Cards/Card";
import CardBarChart from "../Charts/BarChart/Chart";
import PieChartMain from "../Charts/PieChart/PieChartMain";
import LatestTransaction from "../LatestTransaction/LatestTransaction";

const DashboardMain = ({ isResponsive }) => {
  return (
    <React.Fragment>
      <Card isResponsive={isResponsive} />
      <div className={styles.dash_main}>
        <CardBarChart isResponsive={isResponsive} />
        <PieChartMain isResponsive={isResponsive} />
      </div>
      <LatestTransaction />
    </React.Fragment>
  );
};

export default DashboardMain;
