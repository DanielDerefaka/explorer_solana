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

  const rpcUrl = "https://mainnet-rpc.solana.fm/sk_live_4c355e62a3d14da89705630000421c21";
  const method = "getTransaction";

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
