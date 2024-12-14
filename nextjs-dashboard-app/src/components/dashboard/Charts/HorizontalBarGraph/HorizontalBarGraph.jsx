"use client";

import { DataContext } from "@/app/dashboard/layout";
import useWindowDimensions from "@/hooks/useDimension";
import React, { useContext } from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  LabelList,
  Legend,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const CustomizedLabel = (props) => {
  const { x, y, value } = props;
  return (
    <text x={x} y={y} dy={-10} textAnchor="middle" fill="#666">
      {value}
    </text>
  );
};

const renderCustomizedLabel = (props) => {
  const { x, y, width, height, value } = props;

  const fireOffset = value.toString().length < 5;
  const offset = fireOffset ? -47 : 5;
  return (
    <text
      x={x + width - offset}
      y={y + height - 3}
      fill={fireOffset ? "#285A64" : "#fff"}
      textAnchor="end"
      fontSize={12}
      fontWeight={700}
    >
      ${value}k
    </text>
  );
};

const HorizontalBarGraph = () => {
  const { isResponsive } = useContext(DataContext);
  const { width } = useWindowDimensions();

  const data = [
    { name: "Cash", value: 17 },
    { name: "Equity", value: 14.1 },
    { name: "Debt", value: 12 },
    { name: "Other", value: 5.7 },
  ];

  const specificBarIndex = data[0].value;
  const color = ["#007fff", "lightgray", "lightgray", "lightgray"];
  return (
    <BarChart
      width={isResponsive && width < 940 ? 755 : 600}
      height={190}
      data={data}
      layout="vertical"
      barCategoryGap={0}
      barGap={1}
      margin={{ top: 20, right: 30, left: 0, bottom: 5 }}
    >
      <CartesianGrid strokeDasharray="3 3" horizontal={false} />
      <XAxis type="number" tickLine={false} axisLine={false} />
      <YAxis type="category" dataKey="name" axisLine={false} tickLine={false} />
      <Tooltip />

      <Bar dataKey="value" barSize={15}>
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={color[index]} />
        ))}
        <LabelList
          dataKey="value"
          content={renderCustomizedLabel}
          position="insideRight"
        />
      </Bar>
    </BarChart>
  );
};

export default HorizontalBarGraph;
