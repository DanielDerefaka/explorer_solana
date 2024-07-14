"use client";
import { useState, useEffect } from "react";
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
  } from "recharts";
import { Chartjs } from "./Chartjs";
import Link from "next/link";

interface CoinGeckoResult {
  coinInfo?: CoinInfoResult;
  status: CoingeckoStatus;
}

interface CoinInfoResult {
  price: number;
  volume_24: number;
  market_cap: number;
  market_cap_rank: number;
  price_change_percentage_24h: number;
  last_updated: Date;
}

enum CoingeckoStatus {
  Success = "success",
  FetchFailed = "fetchFailed",
}

function abbreviatedNumber(number: number): string {
  return number.toLocaleString();
}

const FirstLay = () => {
  const [coinInfo, setCoinInfo] = useState<CoinGeckoResult>();
  const coinId = "solana";

  useEffect(() => {
    getPrice();
  }, []);

  function getPrice() {
    fetch(`https://api.coingecko.com/api/v3/coins/${coinId}`)
      .then((res) => res.json())
      .then((info: any) => {
        setCoinInfo({
          coinInfo: {
            price: info.market_data.current_price.usd,
            volume_24: info.market_data.total_volume.usd,
            market_cap: info.market_data.market_cap.usd,
            market_cap_rank: info.market_data.market_cap_rank,
            price_change_percentage_24h:
              info.market_data.price_change_percentage_24h,
            last_updated: new Date(info.last_updated),
          },
          status: CoingeckoStatus.Success,
        });
      })
      .catch((error) => {
        setCoinInfo({
          status: CoingeckoStatus.FetchFailed,
        });
        console.error("Error fetching coin data:", error);
      });
  }

  return (
    <>
      {coinInfo?.coinInfo && (
        <>
        <p className="text-sm font-bold">SOL Price</p>
          <span className="text-[40px] font-bold">
            {" "}
            ${coinInfo.coinInfo.price.toFixed(2)}{" "}
          </span>

          {coinInfo.coinInfo.price_change_percentage_24h > 0 && (
            <span className="text-green-600">
              &uarr; {coinInfo.coinInfo.price_change_percentage_24h.toFixed(2)}%
            </span>
          )}


          <Chartjs/>
          <Link
           href="">
          </Link>
          
        </>
      )}
    </>
  );
};

export default FirstLay;
