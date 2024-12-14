"use client";

import { DataContext } from "@/app/dashboard/layout";
import React, { useContext } from "react";
import {
  Area,
  Bar,
  ComposedChart,
  Legend,
  Line,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import styles from "./composedChart.module.css";

const ComposedChartLayout = () => {
  const { isResponsive } = useContext(DataContext);
  const data = [
    {
      name: "Jan",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Feb",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "March",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "April",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "May",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "June",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "July",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

  return (
    <div
      style={{
        boxShadow:
          "0 10px 15px rgba(0, 0, 0, 0.25), 0 4px 6px rgba(0, 0, 0, 0.1)",
        backgroundColor: "var(--card-bg)",
        marginRight: "2%",
        padding: "20px",
        borderRadius: "8px",
        // width: !isResponsive ? "65%" : "70%",
      }}
    >
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
      <ComposedChart width={!isResponsive ? 580 : 800} height={250} data={data}>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        {/* <Legend verticalAlign="top" align="right" /> */}
        {/* <CartesianGrid stroke="#f5f5f5" /> */}
        <Area type="monotone" dataKey="amt" fill="#87CEFA" stroke="#87CEFA" />
        <Bar dataKey="pv" barSize={20} fill="#007fff" radius={[8, 8, 0, 0]} />
        <Line type="monotone" dataKey="uv" stroke="#ff7300" />
      </ComposedChart>
    </div>
  );
};

export default ComposedChartLayout;
