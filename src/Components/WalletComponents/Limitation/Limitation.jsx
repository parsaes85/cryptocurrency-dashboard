import React from "react";

export default function Limitation() {
  return (
    <div className="bg-black rounded-lg p-4 md:col-span-4 lg:col-span-1">
      <h1 className="text-gray-100 font-medium">Limitation</h1>
      <div className="flex justify-between items-center border border-gray-500 rounded-lg p-4 mt-4">
        <div className="flex gap-2 items-center">
          <img src="images/loader.png" className="w-6 md:w-10 rotate-45" alt="" />
          <h2 className="text-gray-100 font-medium text-xs md:text-base">Monthly budget</h2>
        </div>
        <div className="flex flex-col items-end text-xs lg:text-sm">
          <p className="text-gray-200">$890.1</p>
          <p className="text-gray-400">from $2,500</p>
        </div>
      </div>
    </div>
  );
}
