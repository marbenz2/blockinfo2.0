import { useWalletName } from "@/hooks/use-wallet-name";
import { formatTxID } from "@/lib/utils";

export const WalletNameCell = ({ txID }: { txID: string }) => {
  const { name } = useWalletName(txID);
  return (
    <div className="text-center">
      <a
        href={`https://explore.vechain.org/accounts/${txID}`}
        target="_blank"
        rel="noreferrer"
        className="underline decoration-dashed"
        title={txID}
      >
        {name || formatTxID(txID)}
      </a>
    </div>
  );
};
