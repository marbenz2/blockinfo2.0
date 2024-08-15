import { NftXMetadata } from "@/types/types";
import { create } from "zustand";

type NodeInfo = {
  xNode: boolean;
  setXNode: (xNode: boolean) => void;
  metadata: NftXMetadata | null;
  setMetadata: (metadata: NftXMetadata | null) => void;
  isLoading: boolean;
  setIsLoading: (loading: boolean) => void;
  errorMessage: string | null;
  setErrorMessage: (message: string | null) => void;
};

export const useNodeInfoStore = create<NodeInfo>((set) => ({
  xNode: false,
  setXNode: (xNode) => set({ xNode }),
  metadata: null,
  setMetadata: (metadata) => set({ metadata }),
  isLoading: false,
  setIsLoading: (loading) => set({ isLoading: loading }),
  errorMessage: null,
  setErrorMessage: (message) => set({ errorMessage: message }),
}));
