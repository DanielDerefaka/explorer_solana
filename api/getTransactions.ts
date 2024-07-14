
// pages/api/get-transactions.ts
import { NextApiRequest, NextApiResponse } from 'next';

interface RpcParams {
  jsonrpc: string;
  id: number;
  method: string;
  params: Array<any>;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { address } = req.query;

  if (!address || typeof address !== 'string') {
    return res.status(400).json({ error: 'Address is required' });
  }

  const rpcUrl = "https://mainnet.helius-rpc.com/?api-key=56ad7ab1-3b24-442a-9141-0b362594dac9";
  const method = "getConfirmedSignaturesForAddress2";

  const params: RpcParams = {
    jsonrpc: "2.0",
    id: 1,
    method: method,
    params: [
      address,
      {
        limit: 10 // You can adjust the limit as needed
      }
    ]
  };

  try {
    const response = await fetch(rpcUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(params),
    });

    const data = await response.json();

    if (data.error) {
      return res.status(500).json({ error: data.error.message });
    }

    res.status(200).json(data.result);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
}
