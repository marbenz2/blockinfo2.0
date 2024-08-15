import { DAppKitProvider } from "@vechain/dapp-kit-react";

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { Toaster } from "@/components/ui/toaster";
import { NODE_URL } from "./config/index.tsx";
import { ThemeProvider } from "./components/theme-provider.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <DAppKitProvider
      // REQUIRED: The URL of the node you want to connect to
      nodeUrl={NODE_URL}
      // OPTIONAL: Required if you're not connecting to the main net
      genesis={import.meta.env.VITE_NETWORK}
      // OPTIONAL: Whether or not to persist state in local storage (account, wallet source)
      usePersistence={true}
      // OPTIONAL: A log level for console logs
      logLevel="DEBUG"
      // OPTIONAL: theme mode 'LIGHT' or 'DARK'
      themeMode="LIGHT"
    >
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <App />
        <Toaster />
      </ThemeProvider>
    </DAppKitProvider>
  </React.StrictMode>
);
