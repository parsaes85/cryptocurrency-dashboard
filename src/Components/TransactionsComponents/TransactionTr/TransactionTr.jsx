import React from "react";

import MoreVertIcon from "@mui/icons-material/MoreVert";

export default function TransactionTr(props) {
  return (
    <tr className="text-gray-400 border-b border-b-gray-800 text-sm font-medium [&>td]:py-4">
      <td className="w-1/5 pl-10 relative">
        <span className="absolute -left-2 top-3.5 p-2 bg-bg-1 rounded-full">
          {props.icon}
        </span>

        <h1>{props.name}</h1>
        <h2 className="text-gray-500 text-xs">{props.business}</h2>
      </td>
      <td className="w-1/5">
        <h1>{props.date}</h1>
        <h2 className="text-gray-500 text-xs">{props.time}</h2>
      </td>
      <td className="text-sky-600 font-semibold w-1/5">{props.amount}</td>
      <td className="w-1/5">{props.fee}</td>
      <td className="w-1/5">{props.channel}</td>
      <td className=" text-gray-100 ">
        <MoreVertIcon />
      </td>
    </tr>
  );
}
