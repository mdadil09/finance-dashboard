"use client";

import React, { createContext, useContext } from "react";
import styles from "./chart.module.css";
import {
  Bar,
  BarChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import useWindowDimensions from "@/hooks/useDimension";
import { DataContext } from "@/app/dashboard/layout";

export default function CardBarChart({ isResponsive }) {
  const { width } = useWindowDimensions();

  const data = [
    {
      name: "Jan",
      Spending: 4000,
      Earning: 2400,
    },
    {
      name: "Feb",
      Spending: 3000,
      Earning: 1398,
    },
    {
      name: "Mar",
      Spending: 2000,
      Earning: 9800,
    },
    {
      name: "Apr",
      Spending: 2780,
      Earning: 3908,
    },
    {
      name: "May",
      Spending: 1890,
      Earning: 4800,
    },
    {
      name: "Jun",
      Spending: 2390,
      Earning: 3800,
    },
    {
      name: "Jul",
      Spending: 3490,
      Earning: 4300,
    },
  ];
  return (
    <>
      <div className={styles.bar_chart}>
        <div className={styles.headers}>
          <div className={styles.headers_text}>
            <h4>Statistic</h4>
          </div>
          <div className={styles.headers_btn}>
            <div style={{ display: "flex", alignItems: "center" }}>
              <div className={styles.earning}></div>{" "}
              <div className={styles.earning_text}>Earnings</div>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginLeft: "10px",
              }}
            >
              <div className={styles.spending}></div>{" "}
              <div className={styles.spending_text}>Spendings</div>
            </div>
            <div>
              <select className={styles.headers_select}>
                <option value="">Monthly</option>
                <option value="">Yearly</option>
              </select>
            </div>
          </div>
        </div>
        <BarChart
          width={
            !isResponsive
              ? 780
              : isResponsive && width > 940
              ? 1000
              : isResponsive && width < 940
              ? 600
              : ""
          }
          height={isResponsive && width < 940 ? 450 : 300}
          data={data}
          barCategoryGap={10}
        >
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar
            dataKey="Spending"
            fill="#007fff"
            radius={[8, 8, 0, 0]}
            barSize={25}
          />
          <Bar
            dataKey="Earning"
            fill="#87CEFA"
            radius={[8, 8, 0, 0]}
            barSize={25}
          />
        </BarChart>
      </div>
    </>
  );
}
