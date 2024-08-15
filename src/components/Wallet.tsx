import { useWalletModal, useWallet } from "@vechain/dapp-kit-react";
import { useWalletName } from "@/hooks/use-wallet-name";
import { Button } from "@/components/ui/button";
import { cn, formatTxID } from "@/lib/utils";
import { WalletIcon } from "lucide-react";

export default function Wallet({ className }: { className?: string }) {
  const { account } = useWallet();

  if (account) return <DisconnectButton className={className} />;
  return <ConnectButton className={className} />;
}

export function DisconnectButton({ className }: { className?: string }) {
  const modal = useWalletModal();
  const wallet = useWallet();
  const { name } = useWalletName(wallet.account);

  return (
    <Button
      onClick={modal.open}
      className={cn("w-full max-w-fit gap-2", className)}
    >
      <WalletIcon />
      {name
        ? name.length <= 8
          ? name.replace(".vet", " .vet")
          : name
        : formatTxID(wallet.account!)}
    </Button>
  );
}

export function ConnectButton({ className }: { className?: string }) {
  const modal = useWalletModal();
  return (
    <Button
      onClick={modal.open}
      className={cn("w-full max-w-fit gap-2", className)}
    >
      <WalletIcon />
      Connect
    </Button>
  );
}
