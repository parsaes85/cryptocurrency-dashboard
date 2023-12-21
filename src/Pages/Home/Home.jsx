import React from "react";

import CurrencyBox from "../../Components/HomeComponents/CurrencyBox/CurrencyBox";
import AssetsAreaChart from "../../Components/HomeComponents/AssetsAreaChart/AssetsAreaChart";
import BitcoinBarChart from "../../Components/HomeComponents/BitcoinBarChart/BitcoinBarChart";
import MarketsItem from "../../Components/HomeComponents/MarketsItem/MarketsItem";

export default function Home() {
  return (
    <div>
      <div className="grid lg:grid-cols-5 gap-y-4 lg:gap-4 mb-4">
        <AssetsAreaChart />
        <div className="grid col-span-3 md:grid-cols-2 gap-4 w-full">
          <CurrencyBox
            logo="images/eth-logo.JPG"
            title="ETHUSDT"
            subTitle="Ethereum"
            price="$23,738"
            status="+$189.91"
            percent="+24.68%"
            data={[
              { uv: 100 },
              { uv: 10 },
              { uv: 200 },
              { uv: 210 },
              { uv: 360 },
              { uv: 200 },
              { uv: 300 },
            ]}
            color="#E685FF"
          />
          <CurrencyBox
            logo="images/sol-logo.JPG"
            title="SOLUSDT"
            subTitle="Solana"
            price="$23,738"
            status="+$189.91"
            percent="+24.68%"
            data={[
              { uv: 300 },
              { uv: 200 },
              { uv: 20 },
              { uv: 80 },
              { uv: 200 },
              { uv: 100 },
              { uv: 160 },
            ]}
            color="#FF9B9B"
          />
          <CurrencyBox
            logo="images/btc-logo.JPG"
            title="BTCUSDT"
            subTitle="Bitcoin"
            price="$23,738"
            status="+$189.91"
            percent="+24.68%"
            data={[
              { uv: 50 },
              { uv: 290 },
              { uv: 140 },
              { uv: 300 },
              { uv: 120 },
              { uv: 100 },
              { uv: 300 },
            ]}
            color="#FFB229"
          />
          <CurrencyBox
            logo="images/btc-logo-2.JPG"
            title="BTCUSDT"
            subTitle="Bitcoin"
            price="$721.6"
            status="+$189.91"
            percent="+24.68%"
            data={[
              { uv: 100 },
              { uv: 10 },
              { uv: 100 },
              { uv: 110 },
              { uv: 260 },
              { uv: 40 },
              { uv: 20 },
            ]}
            color="#6BBDFF"
          />
        </div>
      </div>
      <div className="grid lg:grid-cols-10 gap-4">
        <BitcoinBarChart />
        <div className="bg-black p-4 rounded-lg lg:col-span-3">
          <div className="flex justify-between items-center">
            <h1 className="text-gray-100 font-medium">Markets</h1>
            <div className="flex text-gray-200 text-[10px] sm:text-xs gap-2">
              <span className="bg-gray-100 text-blue-600 font-medium py-1 px-2 sm:px-3 rounded-lg">All</span>
              <span className="bg-gray-500 py-1 px-2 sm:px-3 rounded-lg">Meta</span>
              <span className="bg-gray-500 py-1 px-2 sm:px-3 rounded-lg">Gaming</span>
            </div>
          </div>
          <div className="mt-6 space-y-6">
            <MarketsItem />
            <MarketsItem />
            <MarketsItem />
            <MarketsItem />
            <MarketsItem />
          </div>
        </div>
      </div>
    </div>
  );
}
