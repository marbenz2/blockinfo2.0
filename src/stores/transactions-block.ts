import { create } from "zustand";

type TransactionBlock = {
  transactions: Connex.Thor.Block["transactions"];
  blockNumber: number;
  blockTimeStamp: number;
  blockID: string;
  blockGasUsed: number;
  clausesNumber?: number;
};

type TransactionsBlockState = {
  transactionsBlock: TransactionBlock[];
  setTransactionsBlock: (newBlock: TransactionBlock) => void;
};

export const useTransactionsBlocksStore = create<TransactionsBlockState>(
  (set) => ({
    transactionsBlock: [],
    setTransactionsBlock: (newBlock) => {
      set((state) => {
        const updatedTransactionsBlock = [newBlock, ...state.transactionsBlock];
        if (updatedTransactionsBlock.length > 10) {
          updatedTransactionsBlock.pop();
        }
        return { transactionsBlock: updatedTransactionsBlock };
      });
    },
  })
);
