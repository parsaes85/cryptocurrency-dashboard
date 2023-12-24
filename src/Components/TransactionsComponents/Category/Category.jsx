import React, { useState } from "react";

import "./Category.css";

export default function Category() {
  const [category, setCategory] = useState("history");

  return (
    <div className="flex gap-6 text-gray-100 font-medium text-[11px] sm:text-sm [&>div]:cursor-pointer">
      <div className="relative">
        <span
          className={`${
            category === "history" && "transactions-category-active"
          }`}
          onClick={() => setCategory("history")}
        >
          History
        </span>
      </div>
      <div className="relative">
        <span
          className={`${
            category === "scheduled" && "transactions-category-active"
          }`}
          onClick={() => setCategory("scheduled")}
        >
          Scheduled
        </span>
      </div>
      <div className="relative">
        <span
          className={`${
            category === "requested" && "transactions-category-active"
          }`}
          onClick={() => setCategory("requested")}
        >
          Requested
        </span>
      </div>
    </div>
  );
}
