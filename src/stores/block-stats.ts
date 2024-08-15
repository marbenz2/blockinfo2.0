import { create } from "zustand";

type BlockStats = {
  tickerHead: Connex.Thor.Status["head"] | null;
  setTickerHead: (head: Connex.Thor.Status["head"] | null) => void;
  blockInfo: Connex.Thor.Block | null;
  setBlockInfo: (block: Connex.Thor.Block | null) => void;
  clausesNumbers: number | null;
  setClausesNumbers: (clauses: number) => void;
  isLoading: boolean;
  setIsLoading: (loading: boolean) => void;
  errorMessage: string | null;
  setErrorMessage: (message: string | null) => void;
};

export const useBlockStatsStore = create<BlockStats>((set) => ({
  tickerHead: null,
  setTickerHead: (head) => set({ tickerHead: head }),
  blockInfo: null,
  setBlockInfo: (block) => set({ blockInfo: block }),
  clausesNumbers: null,
  setClausesNumbers: (clauses) => set({ clausesNumbers: clauses }),
  isLoading: false,
  setIsLoading: (loading) => set({ isLoading: loading }),
  errorMessage: null,
  setErrorMessage: (message) => set({ errorMessage: message }),
}));
