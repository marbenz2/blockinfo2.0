import { ModeToggle } from "./mode-toggle";
import Wallet from "./Wallet";

export const Navigation = () => {
  return (
    <nav className="flex w-full justify-between items-center gap-4 py-4 px-4 border-b bg-background">
      <h1 className="text-2xl font-bold">Blockinfo</h1>
      <div className="flex gap-2">
        <Wallet />
        <ModeToggle />
      </div>
    </nav>
  );
};
