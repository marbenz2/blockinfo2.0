import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "./components/theme-provider.tsx";
import { DappKitContainer } from "./components/DappKitContainer.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <DappKitContainer>
        <App />
        <Toaster />
      </DappKitContainer>
    </ThemeProvider>
  </React.StrictMode>
);
