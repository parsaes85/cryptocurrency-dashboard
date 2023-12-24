import React from "react";

import MoreVertIcon from "@mui/icons-material/MoreVert";
import DirectionsCarFilledIcon from "@mui/icons-material/DirectionsCarFilled";

export default function TransactionTr() {
  return (
    <tr className="text-gray-400 border-b border-b-gray-800 text-sm font-medium [&>td]:py-4">
      <td className="w-1/5 pl-10 relative">
        <span className="absolute -left-2 top-3.5 p-2 bg-bg-1 rounded-full">
          <DirectionsCarFilledIcon />
        </span>

        <h1>Car loans</h1>
        <h2 className="text-gray-500 text-xs">wildraw</h2>
      </td>
      <td className="w-1/5">
        <h1>Jan 29,2022</h1>
        <h2 className="text-gray-500 text-xs">At 8:00 AM</h2>
      </td>
      <td className="text-sky-600 font-semibold w-1/5">$13.10</td>
      <td className="w-1/5">$1.1</td>
      <td className="w-1/5">Offline</td>
      <td className=" text-gray-100 ">
        <MoreVertIcon />
      </td>
    </tr>
  );
}
