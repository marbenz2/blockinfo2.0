import { create } from "zustand";

type UserInfo = {
  vthoBalanceUser: string | null;
  setVthoBalanceUser: (balanceUser: string | null) => void;
  vetBalanceUser: string | null;
  setVetBalanceUser: (balanceUser: string | null) => void;
  userTx: Connex.Thor.Filter.Row<"transfer", object>[];
  setUserTx: (
    transaction: Connex.Thor.Filter.Row<"transfer", object>[]
  ) => void;
  isLoading: boolean;
  setIsLoading: (loading: boolean) => void;
  errorMessage: string | null;
  setErrorMessage: (message: string | null) => void;
};

export const useUserInfoStore = create<UserInfo>((set) => ({
  vthoBalanceUser: null,
  setVthoBalanceUser: (vthoBalanceUser) => set({ vthoBalanceUser }),
  vetBalanceUser: null,
  setVetBalanceUser: (vetBalanceUser) => set({ vetBalanceUser }),
  userTx: [],
  setUserTx: (userTx) => set({ userTx }),
  isLoading: false,
  setIsLoading: (loading) => set({ isLoading: loading }),
  errorMessage: null,
  setErrorMessage: (message) => set({ errorMessage: message }),
}));
