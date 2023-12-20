import React from "react";

import CurrencyBox from "../../Components/HomeComponents/CurrencyBox/CurrencyBox";
import AssetsAreaChart from "../../Components/HomeComponents/AssetsAreaChart/AssetsAreaChart";

export default function Home() {
  return (
    <div>
      <div className="grid grid-cols-5 gap-4">
        <AssetsAreaChart />
        <div className="grid col-span-3 grid-cols-2 gap-4 w-full">
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
      <div></div>
    </div>
  );
}
