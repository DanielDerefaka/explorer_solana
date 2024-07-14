import { Connection, clusterApiUrl } from "@solana/web3.js";
import { useEffect, useState } from "react";

import { useAtom } from "jotai";
import { queryAtom } from "@/components/state/StateValue";

// import { Table, Tbody, Tr, Td, Heading, VStack } from "@chakra-ui/react";

export type Confirmations = number | "max";
export type Timestamp = number | "unavailable";

export type Data = {
  signature: string;
  info: {
    slot: number;
    timestamp: Timestamp;
    confirmations: Confirmations;
    confirmationStatus: "processed" | "confirmed" | "finalized" | undefined;
    result: {
      err: string | {} | null;
    };
  } | null;
};

export default function TxDetailsCard() {
  const [query] = useAtom(queryAtom);
  const [txData, setTxData] = useState<Data>();

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    const url = clusterApiUrl("devnet").replace("api", "explorer-api");
    const connection = new Connection(url, "finalized");

    let data;
    try {
      if (query.searchValue !== undefined) {
        const { value } = await connection.getSignatureStatus(
          query.searchValue,
          {
            searchTransactionHistory: true,
          }
        );

        let info = null;
        if (value !== null) {
          let confirmations: Confirmations;
          if (typeof value.confirmations === "number") {
            confirmations = value.confirmations;
          } else {
            confirmations = "max";
          }

          let blockTime = null;
          try {
            blockTime = await connection.getBlockTime(value.slot);
          } catch (error) {
            console.log(error);
          }
          let timestamp: Timestamp =
            blockTime !== null ? blockTime : "unavailable";

          info = {
            slot: value.slot,
            timestamp,
            confirmations,
            confirmationStatus: value.confirmationStatus,
            result: { err: value.err },
          };
        }
        console.log("info", info);
        data = { signature: query.searchValue, info };
        setTxData(data);
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
    {txData?.info?.confirmations}
    </>
  );
}
