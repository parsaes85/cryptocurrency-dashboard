import React from "react";

import BalanceAreaChart from "../../Components/WalletComponents/BalanceAreaChart/BalanceAreaChart";
import Markets from "../../Components/WalletComponents/Markets/Markets";
import CardLists from "../../Components/WalletComponents/CardLists/CardLists";
import StatisticsNumbers from "../../Components/WalletComponents/StatisticsNumbers/StatisticsNumbers";
import StatisticsBarChart from "../../Components/WalletComponents/StatisticsBarChart/StatisticsBarChart";
import Limitation from "../../Components/WalletComponents/Limitation/Limitation";
import Currency from "../../Components/WalletComponents/Currency/Currency";
import Due from "../../Components/WalletComponents/Due/Due";

export default function Wallet() {
  return (
    <div className="space-y-4">
      <div className="grid lg:grid-cols-3 gap-4">
        <BalanceAreaChart />

        <Markets />
      </div>

      <div className="grid md:grid-cols-3 gap-4 items-start">
        <CardLists />

        <div className="w-full md:col-span-2 space-y-4">
          <StatisticsNumbers />

          <StatisticsBarChart />
        </div>
      </div>

      <div className="grid gap-4 grid-cols-3">
        <Limitation />
        <Currency />
        <Due />
      </div>
    </div>
  );
}
