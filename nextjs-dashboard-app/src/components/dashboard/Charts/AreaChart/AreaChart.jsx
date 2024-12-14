"use client";

import { DataContext } from "@/app/dashboard/layout";
import useWindowDimensions from "@/hooks/useDimension";
import React, { useContext } from "react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const AreaChartLayout = () => {
  const { isResponsive, isThemes } = useContext(DataContext);

  const { width } = useWindowDimensions();
  const a = "m";
  const data = [
    {
      name: "April",
      pv: `${0.5}`,
      amt: 2290,
    },
    {
      name: "Feb",
      pv: 1,
      amt: 2400,
    },
    {
      name: "March",
      pv: `${3}`,
      amt: 2210,
    },
    {
      name: "April",
      pv: `${2}`,
      amt: 2290,
    },
  ];

  return (
    <>
      <div
        style={{
          marginTop: "20px",
          borderRadius: "8px",
        }}
      >
        <AreaChart
          width={isResponsive && width < 940 ? 755 : 550}
          height={100}
          data={data}
          margin={{ top: 10, right: 0, left: -30, bottom: 0 }}
        >
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="name" axisLine={false} tickLine={false} />
          <YAxis axisLine={false} tickLine={false} />
          <CartesianGrid vertical={false} />
          <Tooltip />
          {/* <Area
            type="monotone"
            dataKey="uv"
            stroke="#8884d8"
            fillOpacity={1}
            fill="url(#colorUv)"
          /> */}
          <Area
            type="monotone"
            dataKey="pv"
            stroke="#82ca9d"
            fillOpacity={1}
            fill="url(#colorPv)"
          />
        </AreaChart>
      </div>
    </>
  );
};

export default AreaChartLayout;
