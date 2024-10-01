import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import {
  WalletDisconnectButton,
  WalletModalProvider,
  WalletMultiButton,
} from "@solana/wallet-adapter-react-ui";
import { UnsafeBurnerWalletAdapter } from "@solana/wallet-adapter-wallets";
import { clusterApiUrl } from "@solana/web3.js";
import React, { FC, useMemo } from "react";
import {ShowBalance}  from "./ShowBalance";
import Airdrop from "./Airdrop";

// Default styles that can be overridden by your app
import "@solana/wallet-adapter-react-ui/styles.css";
import "./App.css";
import { SendTokens } from "./SendTokens";

function App() {
  return (
    <div id="main-div">
      <ConnectionProvider
        endpoint={
          "https://solana-devnet.g.alchemy.com/v2/K-dyWLoE75nGD_Z3Cv2Bg0tvUY67mYUw"
        }
      >
        <WalletProvider wallets={[]} autoConnect>
          <h1 id="heading"> Solana Wallet-Adaptor </h1>
          <WalletModalProvider>
            <p>Connect your wallet and request SOL airdrop</p>
            <WalletMultiButton className="wallet-button"  />
            <br></br>
            <br></br>
            <WalletDisconnectButton className="wallet-button" />
            <Airdrop />
            <ShowBalance />
            <SendTokens />
          </WalletModalProvider>
        </WalletProvider>
      </ConnectionProvider>
    </div>
  );
}

export default App;
