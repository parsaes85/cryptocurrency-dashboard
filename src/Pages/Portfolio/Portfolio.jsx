import React from "react";

import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import TranslateIcon from "@mui/icons-material/Translate";
import PsychologyAltOutlinedIcon from '@mui/icons-material/PsychologyAltOutlined';
import SmsOutlinedIcon from '@mui/icons-material/SmsOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import GppGoodOutlinedIcon from '@mui/icons-material/GppGoodOutlined';

export default function Portfolio() {
  return (
    <div className="p-4 w-full sm:w-[500px] m-auto space-y-4 mt-16">
      <div className="bg-black px-4 py-5 rounded-lg relative flex flex-col justify-center items-center text-center">
        <div className="relative">
          <img
            src="images/profile-1.jpg"
            alt=""
            className="rounded-full -mt-12 xs:-mt-16 w-16 xs:w-28 mb-2"
          />
          <div className="text-gray-100 absolute right-1 bottom-1 rounded-full bg-bg-1 px-1 xs:p-1.5 xs:px-1.5 cursor-pointer">
            <DriveFileRenameOutlineIcon fontSize="" className="xs:text-xl" />
          </div>
        </div>
        <div>
          <h1 className="text-gray-100 xs:text-lg">John Doe</h1>
          <p className="text-gray-500 text-[10px] xs:text-xs font-medium">
            Johndoe@gmail.com | +01 234 567 89
          </p>
        </div>
      </div>

      <div className="bg-black px-4 py-5 rounded-lg font-light text-xs xs:text-sm text-gray-100 space-y-3">
        <div className="flex gap-3 items-center cursor-pointer">
          <NewspaperIcon fontSize="" className="text-lg xs:text-xl"/>
          Edit profile information
        </div>
        <div className="flex items-center justify-between">
          <div className="flex gap-3 items-center cursor-pointer">
            <NotificationsNoneIcon fontSize="" className="text-lg xs:text-xl"/>
            Notification
          </div>
          <div className="text-[#89B9FF]">ON</div>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex gap-3 items-center cursor-pointer">
            <TranslateIcon fontSize="" className="text-lg xs:text-xl"/>
            Language
          </div>
          <div className="text-[#89B9FF]">English</div>
        </div>
      </div>

      <div className="bg-black px-4 py-5 rounded-lg font-light text-xs xs:text-sm text-gray-100 space-y-3">
        <div className="flex gap-3 items-center cursor-pointer">
          <GppGoodOutlinedIcon fontSize="" className="text-lg xs:text-xl"/>
          Security
        </div>
        <div className="flex items-center justify-between">
          <div className="flex gap-3 items-center cursor-pointer">
            <DarkModeOutlinedIcon fontSize="" className="text-lg xs:text-xl"/>
            Theme
          </div>
          <div className="text-[#89B9FF]">Light mode</div>
        </div>
      </div>

      <div className="bg-black px-4 py-5 rounded-lg font-light text-xs xs:text-sm text-gray-100 space-y-3">
        <div className="flex gap-3 items-center cursor-pointer">
          <PsychologyAltOutlinedIcon fontSize="" className="text-lg xs:text-xl"/>
          Help & Support
        </div>
        <div className="flex gap-3 items-center cursor-pointer">
          <SmsOutlinedIcon fontSize="" className="text-lg xs:text-xl"/>
          Contact us
        </div>
        <div className="flex gap-3 items-center cursor-pointer">
          <LockOutlinedIcon fontSize="" className="text-lg xs:text-xl"/>
          Privacy policy
        </div>
      </div>
    </div>
  );
}
