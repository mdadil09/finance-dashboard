"use client";

import { DataContext } from "@/app/dashboard/layout";
import React, { useContext } from "react";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const LineChartLayout = () => {
  const { isResponsive } = useContext(DataContext);
  const data = [
    {
      name: "Jan",
      2024: 2,
      2023: 3,
    },
    {
      name: "Feb",
      2024: 5,
      2023: 6,
    },
    {
      name: "March",
      2024: 1,
      2023: 4,
    },
    {
      name: "Apr",
      2024: 8,
      2023: 14,
    },
    {
      name: "May",
      2024: 13,
      2023: 9,
    },
  ];

  return (
    <LineChart
      width={!isResponsive ? 580 : 800}
      height={250}
      data={data}
      margin={{ top: 40, right: 30, left: -20, bottom: 5 }}
    >
      <CartesianGrid vertical={false} />
      <XAxis dataKey="name" axisLine={false} tickLine={false} />
      <YAxis axisLine={false} tickLine={false} />
      <Tooltip />
      <Line type="monotone" dataKey="2024" stroke="#8884d8" />
      <Line type="monotone" dataKey="2023" stroke="#82ca9d" />
    </LineChart>
  );
};

export default LineChartLayout;
