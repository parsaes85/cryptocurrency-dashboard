import React from "react";

import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";
import DownloadForOfflineOutlinedIcon from "@mui/icons-material/DownloadForOfflineOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import ChangeCircleOutlinedIcon from "@mui/icons-material/ChangeCircleOutlined";
import LeaderboardOutlinedIcon from "@mui/icons-material/LeaderboardOutlined";

export default function Markets() {
  return (
    <div className="bg-black p-4 rounded-lg w-full lg:col-span-2">
      <h1 className="text-gray-100 font-medium">Markets</h1>

      <div className="mt-6 xs:mt-10 px-4 flex items-center justify-between flex-col xs:flex-row">
        <div className="flex flex-col items-center gap-1">
          <span className="text-[#89B9FF] bg-[#082E66] p-4 rounded-full">
            <DownloadForOfflineOutlinedIcon />
          </span>
          <p className="text-gray-400 text-sm">Deposit</p>
        </div>
        <span className="w-[2px] h-10 xs:h-20 bg-gray-800 content-none"></span>
        <div className="flex flex-col items-center gap-1">
          <span className="text-[#89B9FF] bg-[#082E66] p-4 rounded-full">
            <SendOutlinedIcon />
          </span>
          <p className="text-gray-400 text-sm">Send</p>
        </div>
        <span className="w-[2px] h-10 xs:h-20 bg-gray-800 content-none"></span>
        <div className="flex flex-col items-center gap-1">
          <span className="text-[#89B9FF] bg-[#082E66] p-4 rounded-full">
            <ChangeCircleOutlinedIcon />
          </span>
          <p className="text-gray-400 text-sm">Receive</p>
        </div>
        <span className="w-[2px] h-10 xs:h-20 bg-gray-800 content-none"></span>
        <div className="flex flex-col items-center gap-1">
          <span className="text-[#89B9FF] bg-[#082E66] p-4 rounded-full">
            <LeaderboardOutlinedIcon />
          </span>
          <p className="text-gray-400 text-sm">Checkout</p>
        </div>
        <span className="w-[2px] h-10 xs:h-20 bg-gray-800 content-none"></span>
        <div className="flex flex-col items-center gap-1">
          <span className="text-[#89B9FF] bg-[#082E66] p-4 rounded-full">
            <ShoppingCartOutlinedIcon />
          </span>
          <p className="text-gray-400 text-sm">Deposite</p>
        </div>
        <span className="w-[2px] h-10 xs:h-20 bg-gray-800 content-none"></span>
        <div className="flex flex-col items-center gap-1">
          <span className="text-[#89B9FF] bg-[#082E66] p-4 rounded-full">
            <MoreHorizOutlinedIcon />
          </span>
          <p className="text-gray-400 text-sm">More</p>
        </div>
      </div>
    </div>
  );
}
