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

import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";

const data = [
  {
    name: "Page A",
    uv: 0,
  },
  {
    name: "Page B",
    uv: 500,
  },
  {
    name: "Page C",
    uv: 600,
  },
  {
    name: "Page C",
    uv: 1000,
  },
  {
    name: "Page D",
    uv: 1700,
  },
  {
    name: "Page E",
    uv: 1890,
  },
  {
    name: "Page F",
    uv: 2900,
  },
  {
    name: "Page F",
    uv: 3400,
  },
  {
    name: "Page G",
    uv: 2700,
  },
];

export default function AssetsAreaChart() {
  return (
    <div className="col-span-2 bg-black pl-4 pt-4 rounded-lg">
      <h1 className="text-gray-100 font-medium text-xl">Assets</h1>
      <div className="mt-4">
        <h2 className="text-gray-400 text-xs">Your total balance</h2>
        <div className="flex items-center gap-2 mt-1">
          <h1 className="text-gray-100 text-2xl">$25,901.0</h1>
          <span className="text-green-400 bg-green-600 text-[11px] font-medium bg-opacity-20 rounded-full pr-2 pl-0.5 flex items-center">
            <ArrowDropUpIcon fontSize="small" /> 90%
          </span>
        </div>
      </div>
      <div className="h-[200px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            width={500}
            height={400}
            data={data}
            margin={{
              top: 10,
              right: 0,
              left: 0,
              bottom: 0,
            }}
          >
            <defs>
              <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="rgb(37 99 235)"
                  stopOpacity={0.6}
                />
                <stop offset="95%" stopColor="rgb(37 99 235)" stopOpacity={0} />
              </linearGradient>
            </defs>
            <Area
              type="monotone"
              dataKey="uv"
              stroke="#000"
              fillOpacity={1}
              fill="url(#colorUv)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
