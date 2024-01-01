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
import NotificationsIcon from "@mui/icons-material/Notifications";

const data = [
  {
    name: "Page A",
    uv: 0,
  },
  {
    name: "Page B",
    uv: 700,
  },
  {
    name: "Page C",
    uv: 400,
  },
  {
    name: "Page C",
    uv: 1200,
  },
  {
    name: "Page D",
    uv: 1500,
  },
  {
    name: "Page D",
    uv: 2500,
  },
  {
    name: "Page E",
    uv: 4000,
  },
  {
    name: "Page F",
    uv: 3800,
  },
  {
    name: "Page F",
    uv: 4000,
  },
  {
    name: "Page G",
    uv: 2700,
  },
];

export default function BalanceAreaChart() {
  return (
    <div className="bg-black pl-5 pt-6 pb-6 rounded-lg w-[430px] relative">
      <h1 className="text-gray-400 font-medium text-xs">Total Balance</h1>
      <span className="absolute text-gray-100 bg-bg-1 px-3 py-2 rounded-full right-4 top-6">
        <NotificationsIcon/>
      </span>

      <div className="flex items-center gap-2 mt-2">
        <h1 className="text-gray-100 text-3xl font-semibold">
          $31,082<span className="text-gray-400 text-lg">.20</span>
        </h1>
        <span className="text-black bg-[#07F8B5] text-sm font-semibold rounded-full pr-2 py-0.5 pl-0.5 flex items-center">
          <ArrowDropUpIcon fontSize="small" /> 81%
        </span>
      </div>

      <div className="h-[70px] flex items-end justify-between gap-6">
        <div className="text-sm flex gap-1">
          <span className="text-gray-100">$1,208.24</span>
          <span className="text-[#FF9B9B]">(Today)</span>
        </div>
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            width={500}
            height={400}
            data={data}
            margin={{
              top: 5,
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
                <stop
                  offset="100%"
                  stopColor="rgb(37 99 235)"
                  stopOpacity={0.1}
                />
              </linearGradient>
            </defs>
            <Area
              type="monotone"
              dataKey="uv"
              stroke="rgb(37 99 235"
              fillOpacity={1}
              fill="url(#colorUv)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
