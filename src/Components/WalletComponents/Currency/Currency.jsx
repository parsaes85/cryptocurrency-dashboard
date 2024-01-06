import React from "react";

export default function Currency() {
  return (
    <div className="bg-black p-4 rounded-lg">
      <h1 className="text-gray-100 font-medium">Currency</h1>

      <div className="mt-5 space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src="images/uk-icon.png" className="rounded-full w-6" alt="" />
            <h1 className="text-gray-100 font-medium">USD</h1>
          </div>
          <div className="flex gap-1">
            <span className="text-gray-300">24,890.00</span>
            <span className="text-gray-400">USD</span>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src="images/eur-icon.png" className="rounded-full w-6" alt="" />
            <h1 className="text-gray-100 font-medium">EUR</h1>
          </div>
          <div className="flex gap-1">
            <span className="text-gray-300">31,320.00</span>
            <span className="text-gray-400">EUR</span>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src="images/ghana-icon.png" className="rounded-full w-6" alt="" />
            <h1 className="text-gray-100 font-medium">GBP</h1>
          </div>
          <div className="flex gap-1">
            <span className="text-gray-300">33,141.20</span>
            <span className="text-gray-400">GBP</span>
          </div>
        </div>
      </div>
    </div>
  );
}
