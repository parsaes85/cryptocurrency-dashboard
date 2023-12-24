import React from "react";

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

          <TransactionTr />
          <TransactionTr />
          <TransactionTr />
        </table>
      </div>
    </div>
  );
}
