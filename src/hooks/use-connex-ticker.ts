import { useConnex } from "@vechain/dapp-kit-react";
import { useEffect } from "react";
import { useBlockStatsStore } from "@/stores/block-stats";

export const useConnexTicker = () => {
  const connex = useConnex();
  const ticker = connex.thor.ticker();

  const {
    setTickerHead,
    setBlockInfo,
    setClausesNumbers,
    setIsLoading,
    setErrorMessage,
  } = useBlockStatsStore();

  useEffect(() => {
    setIsLoading(true);
  }, []);

  useEffect(() => {
    let isMounted = true;

    const fetchTicker = async () => {
      try {
        const head = await ticker.next();
        if (isMounted && head) {
          const blk = connex.thor.block(head.id);
          const block = await blk.get();
          if (block) {
            const transactions = block.transactions.map((tx) => {
              return connex.thor
                .transaction(tx)
                .get()
                .then((res) => res?.clauses.length || 0);
            });
            const clauses = await Promise.all(transactions);
            const totalClausesLength = clauses.reduce(
              (sum, length) => sum + length,
              0
            );
            setClausesNumbers(totalClausesLength);
          }
          setTickerHead(head);
          setBlockInfo(block);
          setIsLoading(false);
        }
      } catch (err) {
        if (isMounted) {
          if (typeof err === "string") {
            setErrorMessage(err);
          } else if (err instanceof Error) {
            setErrorMessage(err.message);
          }
          setIsLoading(false);
        }
      }
    };

    fetchTicker();

    return () => {
      isMounted = false;
    };
  }, [connex, ticker]);
};
