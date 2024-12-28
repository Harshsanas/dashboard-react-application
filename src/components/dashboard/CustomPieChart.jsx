import React from "react";
import { PieChart, Pie, Cell } from "recharts";

const data = [
  { name: "Bill Expense", value: 15, color: "#FF8300" },
  { name: "Entertainment", value: 30, color: "#3B4D8A" },
  { name: "Investment", value: 20, color: "#1C90F3" },
  { name: "Others", value: 35, color: "#333333" },
];

const CustomPieChart = () => {
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index,
  }) => {
    const RADIAN = Math.PI / 180;
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <>
        <text
          x={x}
          y={y - 15}
          fill="white"
          textAnchor={x > cx ? "start" : "end"}
          dominantBaseline="central"
          fontSize={18}
          fontWeight={700}
        >
          {`${Math.round(percent * 100)}%`}
        </text>
        <text
          x={x}
          y={y + 10}
          fill="white"
          textAnchor={x > cx ? "start" : "end"}
          dominantBaseline="central"
          fontSize={15}
          fontWeight={700}
        >
          {data[index].name}
        </text>
      </>
    );
  };

  return (
    <div>
      <PieChart width={400} height={370}>
        <Pie
          data={data}
          dataKey="value" 
          innerRadius={0} 
          outerRadius={180} 
          paddingAngle={10}
          startAngle={0}
          endAngle={360}
          labelLine={false} 
          label={renderCustomizedLabel} 
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
        </Pie>
      </PieChart>
    </div>
  );
};

export default CustomPieChart;
