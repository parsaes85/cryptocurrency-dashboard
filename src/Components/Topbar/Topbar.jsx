import React, { useState } from "react";

import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useLocation } from "react-router-dom";

import NotificationsSidebar from "../NotificationsSidebar/NotificationsSidebar";

export default function Topbar() {
  const [isNotificationsSidebarOpen, setIsNotificationsSidebarOpen] =
    useState(false);

  const location = useLocation();
  const pathname = location.pathname.split("/")[1];

  return (
    <>
      <NotificationsSidebar
        isNotificationsSidebarOpen={isNotificationsSidebarOpen}
        setIsNotificationsSidebarOpen={setIsNotificationsSidebarOpen}
      />

      <div className="flex justify-between mb-6">
        <h1 className="text-gray-100 font-medium capitalize text-lg">
          {pathname ? pathname : "Home"}
        </h1>

        <div className="flex gap-2 sm:gap-8 items-center">
          <div className="flex gap-2 sm:gap-4 text-gray-100">
            <div className="bg-bg-2 rounded-full py-0.5 px-1 flex">
              <SearchIcon />
            </div>
            <div
              className="bg-bg-2 rounded-full py-0.5 px-1 flex cursor-pointer relative after:absolute after:top-1 after:right-1 after:w-3 after:h-3 after:rounded-full after:bg-[#FF9B9B] after:border-2 after:border-gray-500"
              onClick={() => setIsNotificationsSidebarOpen(true)}
            >
              <NotificationsNoneIcon />
            </div>
          </div>
          <div className="flex items-center bg-bg-2 rounded-full p-1">
            <img
              src="images/profile-1.jpg"
              alt=""
              className="w-6 rounded-full"
            />
            <h1 className="text-gray-100 text-[10px] sm:text-xs ml-2 mr-0.5">
              John Doe
            </h1>
            <KeyboardArrowDownIcon fontSize="small" className="text-zinc-700" />
          </div>
        </div>
      </div>
    </>
  );
}
