import { DAppKitProvider } from "@vechain/dapp-kit-react";
import { useTheme } from "./theme-provider";
import { NODE_URL } from "@/config";

export function DappKitContainer({ children }: { children: React.ReactNode }) {
  const { theme } = useTheme();

  return (
    <DAppKitProvider
      nodeUrl={NODE_URL}
      genesis={import.meta.env.VITE_NETWORK}
      usePersistence={true}
      themeMode={theme === "dark" ? "DARK" : "LIGHT"}
    >
      {children}
    </DAppKitProvider>
  );
}
