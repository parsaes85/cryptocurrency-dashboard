import React from "react";
import {
  BarChart,
  Bar,
  Rectangle,
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
    name: "Jul 18",
    uv: 19000,
    pv: 23000,
  },
  {
    name: "Jul 19",
    uv: 20000,
    pv: 17398,
  },
  {
    name: "Jul 20",
    uv: 20000,
    pv: 24000,
  },
  {
    name: "Jul 21",
    uv: 19080,
    pv: 14908,
  },
  {
    name: "Jul 22",
    uv: 11090,
    pv: 13800,
  },
  {
    name: "Jul 23",
    uv: 12390,
    pv: 13800,
  },
  {
    name: "Jul 24",
    uv: 16490,
    pv: 18300,
  },
];

export default function BitcoinBarChart() {
  return (
    <div className="lg:col-span-7 bg-black p-4 rounded-lg">
      <div className="flex flex-wrap gap-4 lg:gap-0 justify-between items-center">
        <div className="flex gap-10">
          <div>
            <h1 className="text-gray-100 text-xl font-medium">BTCUSDT</h1>
            <h3 className="text-gray-400 text-xs">Bitcoin</h3>
          </div>
          <div className="flex items-center gap-1">
            <div className="flex flex-col items-end gap-1">
              <h1 className="text-gray-100">$23,738</h1>
              <span className="text-green-400 bg-green-600 text-[11px] font-medium bg-opacity-20 rounded-full px-2">
                +23,6%
              </span>
            </div>
            <ArrowDropDownIcon className="text-gray-100" />
          </div>
        </div>
        <div className="text-gray-200 text-[10px] sm:text-[13px] font-medium flex gap-2">
          <span className="text-[#89B9FF] bg-[#082E66] bg-opacity-70 py-1 px-2 sm:px-3 rounded-lg">
            1H
          </span>
          <span className="bg-gray-600 bg-opacity-70 py-1 px-2 sm:px-3 rounded-lg">
            3H
          </span>
          <span className="bg-gray-600 bg-opacity-70 py-1 px-2 sm:px-3 rounded-lg">
            5H
          </span>
          <span className="bg-gray-600 bg-opacity-70 py-1 px-2 sm:px-3 rounded-lg">
            1D
          </span>
          <span className="bg-gray-600 bg-opacity-70 py-1 px-2 sm:px-3 rounded-lg">
            1W
          </span>
          <span className="bg-gray-600 bg-opacity-70 py-1 px-2 sm:px-3 rounded-lg">
            1M
          </span>
        </div>
      </div>
      <div className="mt-10 h-[200px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 10,
              left: 10,
              bottom: 5,
            }}
          >
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="pv" fill="#051C3D" barSize={8} />
            <Bar dataKey="uv" fill="#89B9FF" barSize={8} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
