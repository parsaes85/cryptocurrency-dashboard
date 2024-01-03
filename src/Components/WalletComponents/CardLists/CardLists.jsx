import React from "react";

import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";

export default function CardLists() {
  return (
    <div className="bg-black rounded-lg p-4">
      <div className="flex justify-between text-gray-100 font-medium">
        <h1>Card Lists</h1>
        <SettingsOutlinedIcon />
      </div>

      <div className="flex justify-center mt-4">
        <img src="images/cards.JPG" alt="" />
      </div>
    </div>
  );
}
