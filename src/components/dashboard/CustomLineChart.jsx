import React from "react";
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Area,
  AreaChart,
} from "recharts";

const data = [
  { name: "Jul", value: 150 },
  { name: "Aug", value: 680 },
  { name: "Sep", value: 300 },
  { name: "Oct", value: 550 },
  { name: "Nov", value: 100 },
  { name: "Dec", value: 600 },
  { name: "Jan", value: 430 },
];

const CustomLineChart = () => {
  return (
    <ResponsiveContainer width="100%">
      <AreaChart data={data}>
        <defs>
          <linearGradient id="colorBlue" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="rgba(0, 0, 255, 0.5)" />
            <stop offset="100%" stopColor="rgba(0, 0, 255, 0)" />
          </linearGradient>
        </defs>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis domain={[0, 800]} tickCount={5} />
        <Area
          type="monotone"
          dataKey="value"
          stroke="#0000FF"
          fill="url(#colorBlue)"
          strokeWidth={2}
        />

        <Tooltip />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default CustomLineChart;
