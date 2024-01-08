import React, { useEffect } from "react";

import CloseIcon from "@mui/icons-material/Close";
import SearchIcon from "@mui/icons-material/Search";

export default function NotificationsSidebar({
  isNotificationsSidebarOpen,
  setIsNotificationsSidebarOpen,
}) {
  useEffect(() => {
    const closeNotificationsSidebar = (e) => {
      if (e.target.id === "notifications-sidebar-parent") {
        setIsNotificationsSidebarOpen(false);
      }
    };
    document.addEventListener("click", closeNotificationsSidebar);

    return () => {
      document.removeEventListener("click", closeNotificationsSidebar)
    }
  }, []);

  return (
    <div
      id="notifications-sidebar-parent"
      className={`fixed ${
        isNotificationsSidebarOpen
          ? "right-0 opacity-100 visible"
          : "-right-96 opacity-0 invisible"
      }  top-0 bg-black bg-opacity-70 w-full h-full z-50 transition-all`}
    >
      <div className="bg-bg-1 w-64 xs:w-96 h-full ml-auto px-4 py-6 overflow-y-auto">
        <div className="flex justify-between items-center text-gray-100">
          <span
            className="cursor-pointer"
            onClick={() => setIsNotificationsSidebarOpen(false)}
          >
            <CloseIcon />
          </span>
          <h1 className="font-medium text-lg">Notifications</h1>
          <span>
            <SearchIcon />
          </span>
        </div>

        <div className="mt-10">
          <h2 className="text-gray-200 font-medium text-sm">Today</h2>

          <div className="mt-5 space-y-5">
            <div className="flex items-start gap-4">
              <img
                src="images/profile-2.jpg"
                alt=""
                className="rounded-full w-9 xs:w-12"
              />
              <div className="border-b border-b-gray-500">
                <div>
                  <p className="text-gray-300 text-[11px] xs:text-[13px]">
                    You recieved a payment of{" "}
                    <span className="text-blue-400">$780.1</span> from{" "}
                    <span className="text-gray-200 font-medium">
                      Justin Westervelt
                    </span>
                  </p>
                  <p className="text-[11px] xs:text-[13px] text-gray-400 py-1">9:01am</p>
                </div>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <img
                src="images/profile-1.jpg"
                alt=""
                className="rounded-full w-9 xs:w-12 "
              />
              <div className="border-b border-b-gray-500 flex items-start justify-between gap-4">
                <div>
                  <p className="text-gray-300 text-[11px] xs:text-[13px]">
                    <span className="text-gray-200 font-medium">
                      Lindsey Culhane
                    </span>{" "}
                    requested a payment of{" "}
                    <span className="text-blue-400">$780.1</span>
                  </p>
                  <p className="text-[11px] xs:text-[13px] text-gray-400 py-1">9:01am</p>
                </div>
                <button className="bg-[#6BBDFF] px-2 text-sm py-1 rounded-lg font-medium tracking-tighter mt-2">
                  PAY
                </button>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <img
                src="images/profile-1.jpg"
                alt=""
                className="rounded-full w-9 xs:w-12 "
              />
              <div className="border-b border-b-gray-500 flex items-start justify-between gap-4">
                <div>
                  <p className="text-gray-300 text-[11px] xs:text-[13px]">
                    <span className="text-gray-200 font-medium">
                      Lindsey Culhane
                    </span>{" "}
                    requested a payment of{" "}
                    <span className="text-blue-400">$780.1</span>
                  </p>
                  <p className="text-[11px] xs:text-[13px] text-gray-400 py-1">9:01am</p>
                </div>
                <button className="bg-[#6BBDFF] px-2 text-sm py-1 rounded-lg font-medium tracking-tighter mt-2">
                  PAY
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10">
          <h2 className="text-gray-200 font-medium text-sm">Yesterday</h2>

          <div className="mt-5 space-y-5">
            <div className="flex items-start gap-4">
              <img
                src="images/profile-2.jpg"
                alt=""
                className="rounded-full w-9 xs:w-12 "
              />
              <div className="border-b border-b-gray-500">
                <div>
                  <p className="text-gray-300 text-[11px] xs:text-[13px]">
                    You recieved a payment of{" "}
                    <span className="text-blue-400">$780.1</span> from{" "}
                    <span className="text-gray-200 font-medium">
                      Justin Westervelt
                    </span>
                  </p>
                  <p className="text-[11px] xs:text-[13px] text-gray-400 py-1">9:01am</p>
                </div>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <img
                src="images/profile-1.jpg"
                alt=""
                className="rounded-full w-9 xs:w-12 "
              />
              <div className="border-b border-b-gray-500 flex items-start justify-between gap-4">
                <div>
                  <p className="text-gray-300 text-[11px] xs:text-[13px]">
                    <span className="text-gray-200 font-medium">
                      Lindsey Culhane
                    </span>{" "}
                    requested a payment of{" "}
                    <span className="text-blue-400">$780.1</span>
                  </p>
                  <p className="text-[11px] xs:text-[13px] text-gray-400 py-1">9:01am</p>
                </div>
                <button className="bg-[#6BBDFF] px-2 text-sm py-1 rounded-lg font-medium tracking-tighter mt-2">
                  PAY
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
