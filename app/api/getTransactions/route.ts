// pages/api/get-transactions.ts
import type { NextApiRequest, NextApiResponse } from 'next';

export  async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const { address } = req.body;
  if (!address) {
    return res.status(400).json({ error: 'Address is required' });
  }

  const rpcUrl = "https://mainnet.helius-rpc.com/?api-key=56ad7ab1-3b24-442a-9141-0b362594dac9";

  const params = {
    jsonrpc: "2.0",
    id: 1,
    method: "getTransactions",
    params: [address, "json"], // Corrected params formatting
  };

  try {
    const response = await fetch(rpcUrl, {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
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
