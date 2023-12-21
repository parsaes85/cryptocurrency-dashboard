import React from "react";

export default function MarketsItem() {
  return (
    <div className="flex justify-between font-medium">
      <div className="flex gap-3 items-center">
        <h1 className="text-gray-100 text-xs sm:text-sm">BTCUSDT</h1>
        <h3 className="text-gray-400 text-[11px]">Bitcoin</h3>
      </div>
      <div className="flex gap-3 items-center">
        <span className="text-gray-300 text-[11px]">$23,495</span>
        <span className="text-green-400 bg-green-600 text-[11px] font-medium bg-opacity-20 rounded-full px-2">
          $23,495
        </span>
      </div>
    </div>
  );
}
