import React from "react";

import DirectionsCarFilledIcon from "@mui/icons-material/DirectionsCarFilled";
import PaidIcon from '@mui/icons-material/Paid';
import FreeBreakfastIcon from '@mui/icons-material/FreeBreakfast';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';

import Category from "../../Components/TransactionsComponents/Category/Category";
import TransactionTr from "../../Components/TransactionsComponents/TransactionTr/TransactionTr";

export default function Transactions() {
  return (
    <div>
      <Category />

      <div className="bg-black py-4 px-6 mt-6 rounded-lg overflow-x-auto min-w-[750px]">
        <table className="w-full border-collapse">
          <tr className="text-gray-400 text-xs [&>th]:pb-4">
            <th className="text-left">Name/Business</th>
            <th className="text-left">Date/Time</th>
            <th className="text-left">Amount</th>
            <th className="text-left">Fee</th>
            <th className="text-left">Channel</th>
          </tr>

          <TransactionTr icon={<DirectionsCarFilledIcon/>} name="Car loans" business="Wildraw" date="Jan 29,2022" time="At 8:00 AM" amount="$13.10" fee="$1.1" channel="Offline"/>
          <TransactionTr icon={<PaidIcon/>} name="Bitcoin buy 1,000" business="Investment" date="Jan 29,2022" time="At 8:00 AM" amount="$24,800.15" fee="$0.0" channel="Internet"/>
          <TransactionTr icon={<FreeBreakfastIcon/>} name="Starbuck coffee" business="Relax and life" date="Jan 29,2022" time="At 8:00 AM" amount="$3.10" fee="$2.0" channel="Offline"/>
          <TransactionTr icon={<FacebookRoundedIcon/>} name="Facebook charge" business="Advertising" date="Jan 29,2022" time="At 8:00 AM" amount="$515.04" fee="4.2" channel="Internet"/>
          <TransactionTr icon={<PaidIcon/>} name="Bank of Merica" business="Fee charged" date="Jan 29,2022" time="At 8:00 AM" amount="$530.16" fee="1.2" channel="Bank"/>
        </table>
      </div>
    </div>
  );
}
