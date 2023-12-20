import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function CurrencyBox(props) {
  return (
    <div className="bg-black p-4 rounded-lg w-full">
      <div className="flex gap-3">
        <img src={props.logo} alt="" className="w-10 h-10 rounded-lg" />
        <div>
          <h1 className="text-gray-100">{props.title}</h1>
          <h2 className="text-gray-400 text-xs">{props.subTitle}</h2>
        </div>
      </div>
      <div className="h-14 flex items-center justify-between gap-4">
        <h2 className="text-gray-100">{props.price}</h2>
        <ResponsiveContainer width="60%" height="100%">
          <AreaChart
            width={200}
            height={60}
            data={props.data}
            margin={{
              top: 10,
              right: 0,
              left: 0,
              bottom: 10,
            }}
          >
            <Area
              type="monotone"
              dataKey="uv"
              stroke={props.color}
              strokeWidth={2}
              fill="#"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
      <div className="flex justify-between items-center">
        <span className="text-gray-400 text-sm">PNL Daily</span>
        <span className="text-green-400 text-[11px] font-medium">+$189.91</span>
        <span className="text-green-400 bg-green-600 text-[11px] font-medium bg-opacity-20 rounded-full px-2 flex items-center">
          +24.68%
        </span>
      </div>
    </div>
  );
}
