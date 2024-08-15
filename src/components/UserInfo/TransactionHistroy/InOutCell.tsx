import { useWallet } from "@vechain/dapp-kit-react";
import { ArrowDown, ArrowUp } from "lucide-react";

export const InOutCell = ({ txID }: { txID: string }) => {
  const { account } = useWallet();

  return (
    <div className="flex w-full justify-center">
      {account === txID ? (
        <ArrowUp size={16} className="text-red-500" />
      ) : (
        <ArrowDown size={16} className="text-green-500" />
      )}
    </div>
  );
};
