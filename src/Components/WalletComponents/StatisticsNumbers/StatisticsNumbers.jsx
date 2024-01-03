import React from "react";

import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

export default function StatisticsNumbers() {
  return (
    <div className="bg-black p-6 rounded-lg flex justify-between ">
      <div className="text-gray-100 flex w-[130px] text-sm lg:text-base border-r border-r-zinc-700">
        <div>
          Last <br /> 30 days
        </div>
        <ArrowDropDownIcon fontSize="" className="text-2xl lg:text-4xl -mt-1" />
      </div>
      <div className="flex justify-between xs:w-full pl-6 flex-col xs:flex-row gap-4">
        <div>
          <h2 className="text-gray-400 text-xs lg:text-sm">Transactions</h2>
          <h1 className="text-gray-100 lg:text-2xl font-medium">54</h1>
        </div>
        <div>
          <h2 className="text-gray-400 text-xs lg:text-sm">Total spent</h2>
          <h1 className="text-gray-100 lg:text-2xl font-medium">$10,890.5</h1>
        </div>
        <div>
          <h2 className="text-gray-400 text-xs lg:text-sm">Total cashback</h2>
          <h1 className="text-gray-100 lg:text-2xl font-medium">$20,120.2</h1>
        </div>
      </div>
    </div>
  );
}
