import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { AuthContextProvider } from "./context/AuthContext.jsx";
import {
  ThirdwebProvider,
  coinbaseWallet,
  metamaskWallet,
  rainbowWallet,
  trustWallet,
  walletConnect,
} from "@thirdweb-dev/react";
const activeChain = "mumbai";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThirdwebProvider
      clientId={import.meta.env.VITE_APP_CLIENT_ID}
      activeChain={activeChain}
      supportedWallets={[
        metamaskWallet(),
        coinbaseWallet(),
        walletConnect(),
        rainbowWallet(),
        trustWallet(),
      ]}
    >
      <AuthContextProvider>
        <App />
      </AuthContextProvider>
    </ThirdwebProvider>
  </React.StrictMode>
);
