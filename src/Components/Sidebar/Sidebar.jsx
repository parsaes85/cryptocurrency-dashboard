import React from "react";
import { NavLink } from "react-router-dom";

import HomeIcon from "@mui/icons-material/Home";
import DonutSmallIcon from "@mui/icons-material/DonutSmall";
import BadgeIcon from "@mui/icons-material/Badge";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import LogoutIcon from '@mui/icons-material/Logout';

import "./Sidebar.css";

export default function Sidebar() {
  return (
    <div className="hidden sm:block">
      <div className="bg-black p-3 w-40 h-full relative">
        <div className="border-b border-b-gray-700 pb-3 flex items-center gap-2">
          <img src="images/logo.JPG" alt="" className="w-8"/>
          <h1 className="text-white font-semibold t">FinX</h1>
        </div>

        <div className="mt-10">
          <ul className="text-gray-300 text-[11px] font-semibold space-y-3">
            <li>
              <NavLink
                to="/"
                className="flex items-center gap-1 p-2 rounded-md"
              >
                <HomeIcon fontSize="small" />
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/transactions"
                className="flex items-center gap-1 p-2 rounded-md"
              >
                <DonutSmallIcon fontSize="small" />
                Transactions
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/portfolio"
                className="flex items-center gap-1 p-2 rounded-md"
              >
                <BadgeIcon fontSize="small" />
                Portfolio
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/wallet"
                className="flex items-center gap-1 p-2 rounded-md"
              >
                <AccountBalanceWalletIcon fontSize="small" />
                Wallet
              </NavLink>
            </li>
          </ul>
        </div>

        <div className="absolute w-4/5 bottom-3 border-t border-t-gray-700 pt-1">
            <ul className="text-gray-300 text-xs font-bold mt-auto space-y-1">
                <li className="flex items-center gap-1 p-2 rounded-md">
                    <HelpOutlineIcon fontSize="small" />
                    Help
                </li>
                <li className="flex items-center gap-1 p-2 rounded-md">
                    <LogoutIcon fontSize="small"/>
                    Log Out
                </li>
            </ul>
        </div>
      </div>
    </div>
  );
}
