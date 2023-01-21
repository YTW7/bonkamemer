
import React, { useState,useEffect,useMemo } from "react";
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";
import { ConnectionProvider, WalletProvider } from "@solana/wallet-adapter-react";
import {
  GlowWalletAdapter,
  PhantomWalletAdapter,
  SlopeWalletAdapter,
  SolflareWalletAdapter,
  TorusWalletAdapter,
} from "@solana/wallet-adapter-wallets";
import { clusterApiUrl } from "@solana/web3.js";

import "@solana/wallet-adapter-react-ui/styles.css";
import "../styles/globals.css";
import "../styles/App.css";
import { Abril_Fatface } from '@next/font/google'
const abril = Abril_Fatface({ weight: '400', subsets: ['latin'] });
import Navbar from "../components/Navbar";
const App = ({ Component, pageProps }) => {
 // Can be set to 'devnet', 'testnet', or 'mainnet-beta'
 const network = WalletAdapterNetwork.Devnet;

 // You can also provide a custom RPC endpoint
 const endpoint = useMemo(() => clusterApiUrl(network), [network]);

 // @solana/wallet-adapter-wallets includes all the adapters but supports tree shaking and lazy loading --
 // Only the wallets you configure here will be compiled into your application, and only the dependencies
 // of wallets that your users connect to will be loaded
 const wallets = useMemo(
   () => [
     new PhantomWalletAdapter(),
     new GlowWalletAdapter(),
     new SlopeWalletAdapter(),
     new SolflareWalletAdapter({ network }),
     new TorusWalletAdapter(),
   ],
   [network]
 );

 const [showChild, setShowChild] = useState(false);
 useEffect(() => {
   setShowChild(true);
 }, []);

 if (!showChild) {
   return null;
 }

 if (typeof window === 'undefined') {
   return <></>;
 } else {
  return (
    <div>
    <main className={abril.className}>
    <ConnectionProvider endpoint={endpoint}>
    <WalletProvider wallets={wallets} autoConnect>
        <WalletModalProvider>
    <Navbar/>
    <Component {...pageProps} />
    </WalletModalProvider>
    </WalletProvider>
    </ConnectionProvider>
    </main>
    </div>
  );
  };
}

export default App;
