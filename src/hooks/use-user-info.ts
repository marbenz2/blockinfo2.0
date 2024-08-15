import { useUserInfoStore } from "@/stores/user-info";
import { useConnex, useWallet } from "@vechain/dapp-kit-react";
import { useEffect } from "react";

export const useUserInfo = () => {
  const connex = useConnex();
  const { account } = useWallet();
  const {
    setVthoBalanceUser,
    setVetBalanceUser,
    setUserTx,
    setIsLoading,
    setErrorMessage,
  } = useUserInfoStore();

  useEffect(() => {
    setIsLoading(true);
  }, []);

  useEffect(() => {
    if (!connex || !account) {
      return;
    }

    let isMounted = true;

    const fetchUserBalance = async () => {
      try {
        const { energy, balance } = await connex.thor.account(account).get();
        if (isMounted) {
          if (energy) {
            setVthoBalanceUser(energy);
          }
          if (balance) {
            setVetBalanceUser(balance);
          }
          setIsLoading(false);
        }
      } catch (err) {
        if (isMounted) {
          if (typeof err === "string") {
            setErrorMessage(err ?? "Could not load user balance.");
          } else if (err instanceof Error) {
            setErrorMessage(err.message);
          }
        }
      }
    };

    const fetchUserTransactions = async () => {
      try {
        if (isMounted && account) {
          const filter = connex.thor
            .filter("transfer", [
              {
                sender: account,
              },
              { recipient: account },
            ])
            .order("desc");
          filter.apply(0, 256).then((logs) => {
            setUserTx(logs);
          });
        }
      } catch (err) {
        if (isMounted) {
          if (typeof err === "string") {
            setErrorMessage(err ?? "Could not load user transactions.");
          } else if (err instanceof Error) {
            setErrorMessage(err.message);
          }
        }
      }
    };

    fetchUserBalance();
    fetchUserTransactions();

    return () => {
      isMounted = false;
    };
  }, [connex, account]);
};
