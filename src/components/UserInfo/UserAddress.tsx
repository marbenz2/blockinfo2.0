import { useWalletName } from "@/hooks/use-wallet-name";
import { useWallet } from "@vechain/dapp-kit-react";
import { Skeleton } from "../ui/skeleton";
import { CopyIcon } from "lucide-react";
import { copyToClipboard, formatTxID } from "@/lib/utils";
import { useToast } from "../ui/use-toast";

const UserAddress = () => {
  const wallet = useWallet();
  const { name } = useWalletName(wallet.account);
  const { toast } = useToast();

  const handleCopyClick = () => {
    if (wallet.account) {
      copyToClipboard(wallet.account);
      toast({
        title: "Copied",
        description:
          "Wallet address " +
          formatTxID(wallet.account) +
          " copied to clipboard",
        variant: "success",
      });
    }
  };

  return (
    <>
      {!wallet.account && <p>Please Log In</p>}
      {wallet.account && (
        <>
          {name ? (
            <p>{name}</p>
          ) : (
            <Skeleton className="w-[150px] h-[20px] rounded-full bg-black" />
          )}
          <p className="flex items-center gap-2 text-muted-foreground text-sm font-normal">
            <CopyIcon
              className="cursor-pointer"
              size={12}
              onClick={handleCopyClick}
            />
            ({wallet.account})
          </p>
        </>
      )}
    </>
  );
};

export default UserAddress;
