"use client";

import { useState, useEffect } from "react";
import { Bar, BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, LineChart, ResponsiveContainer } from "recharts";

import {
  Card,
  CardContent,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

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

const chartConfig: ChartConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(120, 100%, 25%)", // Dark green color
},
};


export function Chartjs() {
  const [coinInfo, setCoinInfo] = useState<CoinGeckoResult>();
  const [priceHistory, setPriceHistory] = useState<{ date: string; price: number }[]>([]);
  const coinId = "solana";

  useEffect(() => {
    getPrice();
  }, []);

  function getPrice() {
    fetch(`https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=usd&days=30`)
      .then((res) => res.json())
      .then((info: any) => {
        const history = info.prices;

        // Assuming history data is an array of [timestamp, price] pairs
        const formattedHistory = history.map((entry: [number, number]) => ({
          date: new Date(entry[0]).toLocaleDateString(),
          price: entry[1],
        }));

        setPriceHistory(formattedHistory);

        setCoinInfo({
          coinInfo: {
            price: info.market_data?.current_price?.usd || 0,
            volume_24: info.market_data?.total_volume?.usd || 0,
            market_cap: info.market_data?.market_cap?.usd || 0,
            market_cap_rank: info.market_data?.market_cap_rank || 0,
            price_change_percentage_24h: info.market_data?.price_change_percentage_24h || 0,
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
    <Card className="border-none w-full ml-[-65px] mt-5 bg-transparent ">
      <CardContent>
        <ChartContainer config={chartConfig} >
       
            <BarChart data={priceHistory} className="ml-[-20px] bg-transparent">
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip content={<ChartTooltipContent hideLabel />} />
              <Legend />
              <Bar dataKey="price" fill="var(--color-desktop)" radius={8} />
            </BarChart>
  
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
