"use client";

import React, { useContext, useState } from "react";
import { DataContext } from "../layout";
import dynamic from "next/dynamic";
// import Insights from "@/components/statistics/Insights/Insights";
// import ComposedChartLayout from "@/components/dashboard/Charts/ComposedChart/ComposedChartLayout";
// import Metrics from "@/components/statistics/Metrics/Metrics";
// import AssetsAllocation from "@/components/statistics/assetsAllocation/AssetsAllocation";
import styles from "./page.module.css";

const Insights = dynamic(
  () => import("@/components/statistics/Insights/Insights"),
  { ssr: false }
);
const ComposedChartLayout = dynamic(
  () =>
    import("@/components/dashboard/Charts/ComposedChart/ComposedChartLayout"),
  { ssr: false }
);
const Metrics = dynamic(
  () => import("@/components/statistics/Metrics/Metrics"),
  { ssr: false }
);

const AssetsAllocation = dynamic(
  () => import("@/components/statistics/assetsAllocation/AssetsAllocation"),
  { ssr: false }
);

const Statistics = () => {
  const { isResponsive } = useContext(DataContext);
  return (
    <>
      <div className={styles.stats}>
        <div className={styles}>
          <ComposedChartLayout />
          <Metrics />
        </div>
        <div>
          <Insights />
          <AssetsAllocation />
        </div>
      </div>
    </>
  );
};

export default Statistics;
