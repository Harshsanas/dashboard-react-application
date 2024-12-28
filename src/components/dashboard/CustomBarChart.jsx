import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Sat", Deposit: 250, Withdraw: 490 },
  { name: "Sun", Deposit: 200, Withdraw: 300 },
  { name: "Mon", Deposit: 400, Withdraw: 100 },
  { name: "Tue", Deposit: 500, Withdraw: 400 },
  { name: "Wed", Deposit: 300, Withdraw: 200 },
  { name: "Thu", Deposit: 200, Withdraw: 100 },
  { name: "Fri", Deposit: 380, Withdraw: 410 },
];

const CustomBarChart = () => {
  return (
    <ResponsiveContainer width="100%">
      <BarChart
        data={data}
        margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
        barCategoryGap="30%"
        barGap={6}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" axisLine={false} tickLine={false} />
        <YAxis
          axisLine={false}
          tickLine={false}
          ticks={[0, 100, 200, 300, 400, 500]}
        />
        <Tooltip />
        <Legend
          layout="vertical"
          align="right"
          verticalAlign="top"
          iconType="circle"
          wrapperStyle={{ top: 10, right: 0 }}
        />

        <Bar
          dataKey="Withdraw"
          fill="black"
          radius={[15, 15, 15, 15]}
          barSize={15}
        />
        <Bar
          dataKey="Deposit"
          fill="blue"
          radius={[15, 15, 15, 15]}
          barSize={15}
        />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default CustomBarChart;
