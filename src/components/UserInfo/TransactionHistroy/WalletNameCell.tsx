import { useWalletName } from "@/hooks/use-wallet-name";
import { formatTxID } from "@/lib/utils";
import { SquareArrowOutUpRightIcon } from "lucide-react";

export const WalletNameCell = ({ txID }: { txID: string }) => {
  const { name } = useWalletName(txID);
  return (
    <div className="text-center">
      <a
        href={`https://explore.vechain.org/accounts/${txID}`}
        target="_blank"
        rel="noreferrer"
        className="flex gap-2 items-center underline decoration-dashed"
        title={txID}
      >
        <SquareArrowOutUpRightIcon size="14px" />
        {name || formatTxID(txID)}
      </a>
    </div>
  );
};
