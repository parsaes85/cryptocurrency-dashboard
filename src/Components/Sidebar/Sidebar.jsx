import React from "react";
import { NavLink } from "react-router-dom";

import HomeIcon from "@mui/icons-material/Home";
import DonutSmallIcon from "@mui/icons-material/DonutSmall";
import BadgeIcon from "@mui/icons-material/Badge";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import LogoutIcon from "@mui/icons-material/Logout";
import ChangeCircleIcon from "@mui/icons-material/ChangeCircle";

import "./Sidebar.css";

export default function Sidebar() {
  return (
    <>
      <div className="hidden sm:block">
        <div className="bg-black p-3 w-40 h-full relative">
          <div className="border-b border-b-gray-700 pb-3 flex items-center gap-2">
            <img src="images/logo.JPG" alt="" className="w-8" />
            <h1 className="text-white font-semibold t">FinX</h1>
          </div>

          <div className="mt-10">
            <ul className="text-gray-300 text-[11px] font-semibold space-y-3">
              <li>
                <NavLink
                  to="/"
                  className="flex items-center gap-2 p-2 rounded-md"
                >
                  <HomeIcon fontSize="small" />
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/transactions"
                  className="flex items-center gap-2 p-2 rounded-md"
                >
                  <DonutSmallIcon fontSize="small" />
                  Transactions
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/portfolio"
                  className="flex items-center gap-2 p-2 rounded-md"
                >
                  <BadgeIcon fontSize="small" />
                  Portfolio
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/wallet"
                  className="flex items-center gap-2 p-2 rounded-md"
                >
                  <AccountBalanceWalletIcon fontSize="small" />
                  Wallet
                </NavLink>
              </li>
            </ul>
          </div>

          <div className="absolute w-4/5 bottom-3 border-t border-t-gray-700 pt-1">
            <ul className="text-gray-300 text-xs font-bold mt-auto space-y-1">
              <li className="flex items-center gap-2 p-2 rounded-md">
                <HelpOutlineIcon fontSize="small" />
                Help
              </li>
              <li className="flex items-center gap-2 p-2 rounded-md">
                <LogoutIcon fontSize="small" />
                Log Out
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="sm:hidden">
        <div className="bg-bg-1 z-50 py-2 px-6 fixed bottom-0 left-0 w-full shadow-3xl">
          <ul className="text-gray-100 text-[10px] flex justify-between">
            <li>
              <NavLink to="/" className="flex flex-col items-center">
                <HomeIcon />
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/transactions"
                className="flex flex-col items-center"
              >
                <DonutSmallIcon />
                Transactions
              </NavLink>
            </li>
            <li>
              <span className="bg-bg-1 px-4 py-4 rounded-full shadow-3xl">
                <ChangeCircleIcon />
              </span>
            </li>
            <li>
              <NavLink to="/wallet" className="flex flex-col items-center">
                <AccountBalanceWalletIcon />
                Wallet
              </NavLink>
            </li>
            <li>
              <NavLink to="/portfolio" className="flex flex-col items-center">
                <BadgeIcon />
                Portfolio
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
