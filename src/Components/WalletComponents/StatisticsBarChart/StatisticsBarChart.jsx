import React from "react";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const data = [
  {
    name: "0",
    uv: 230,
    pv: 160,
  },
  {
    uv: 250,
    pv: 200,
  },
  {
    uv: 250,
    pv: 140,
  },
  {
    uv: 250,
    pv: 200,
  },
  {
    uv: 250,
    pv: 230,
  },
  {
    name: "100",
    uv: 270,
    pv: 240,
  },
  {
    uv: 270,
    pv: 260,
  },
  {
    uv: 270,
    pv: 280,
  },
  {
    uv: 270,
    pv: 300,
  },
  {
    uv: 270,
    pv: 340,
  },
  {
    name: "600",
    uv: 290,
    pv: 360,
  },
  {
    uv: 290,
    pv: 220,
  },
  {
    uv: 290,
    pv: 380,
  },
  {
    uv: 290,
    pv: 280,
  },
  {
    uv: 290,
    pv: 250,
  },
  {
    name: "700",
    uv: 300,
    pv: 290,
  },
  {
    uv: 300,
    pv: 260,
  },
  {
    uv: 300,
    pv: 360,
  },
  {
    uv: 300,
    pv: 380,
  },
  {
    uv: 300,
    pv: 400,
  },
  {
    name: "800",
    uv: 310,
    pv: 470,
  },
  {
    uv: 310,
    pv: 240,
  },
  {
    uv: 310,
    pv: 480,
  },
  {
    uv: 310,
    pv: 390,
  },
  {
    uv: 310,
    pv: 190,
  },
  {
    name: "900",
    uv: 280,
    pv: 170,
  },
  {
    uv: 280,
    pv: 210,
  },
  {
    uv: 280,
    pv: 280,
  },
  {
    uv: 280,
    pv: 330,
  },
  {
    uv: 280,
    pv: 240,
  },
];

export default function StatisticsBarChart() {
  return (
    <div className="bg-black rounded-lg p-4">
      <div className="flex justify-between items-start xs:items-center gap-2 flex-col xs:flex-row">
        <div className="flex gap-4 items-center">
          <h1 className="text-gray-100 font-medium">Statistics</h1>
          <div className="text-gray-200 text-[9px] xs:text-[10px] sm:text-xs font-medium flex gap-2">
            <span className="text-[#89B9FF] bg-[#082E66] bg-opacity-70 py-1 px-2 sm:px-3 rounded-lg">
              All
            </span>
            <span className="bg-gray-600 bg-opacity-70 py-1 px-2 sm:px-3 rounded-lg">
              Money in
            </span>
            <span className="bg-gray-600 bg-opacity-70 py-1 px-2 sm:px-3 rounded-lg">
              Money out
            </span>
          </div>
        </div>

        <span className="bg-bg-1 text-gray-200 py-1 px-2 sm:px-3 rounded-lg text-[10px] sm:text-xs font-medium flex items-center">
          This week <ArrowDropDownIcon fontSize="" className="text-lg -mr-1" />
        </span>
      </div>

      <div className="h-[260px] mt-6">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 20,
              right: 0,
              left: -20,
              bottom: 0,
            }}
            barCategoryGap="2%"
          >
            <CartesianGrid strokeDasharray="" strokeOpacity={0.3} />
            <XAxis dataKey="name" strokeOpacity={0} />
            <YAxis strokeOpacity={0} />
            <Bar dataKey="pv" stackId="a" fill="#FF9B9B" />
            <Bar dataKey="uv" stackId="a" fill="#6BBDFF" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
