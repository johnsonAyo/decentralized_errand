import "@/styles/globals.css";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import { useEffect, useState } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

import "../styles/globals.css";
import {
  PlatON,
  Optimism,
  Moonbeam,
  Moonriver,
  Avalanche,
  Polygon,
  BSC,
  Ethereum,
  EthereumGoerli,
  Solana,
  BSCTestnet,
  KCCTestnet,
} from "@particle-network/common";
import { evmWallets, solanaWallets } from "@particle-network/connect";
import { ModalProvider } from "@particle-network/connect-react-ui";
import { WalletEntryPosition } from "@particle-network/auth";
import "@particle-network/connect-react-ui/esm/index.css";

const colors = {
  brand: {
    900: "#1a365d",
    800: "#153e75",
    700: "#2a69ac",
  },
};

import { useRouter } from "next/router";

export const theme = extendTheme({ colors });

//const PROJECT_ID = process.env.NEXT_PUBLIC_PROJECT_ID

export default function App({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient());
  const Router = useRouter();

  return (
    <ModalProvider
      walletSort={["Particle Auth", "Wallet"]}
      particleAuthSort={[
        "email",
        "phone",
        "google",
        "apple",
        "facebook",
        "microsoft",
        "linkedin",
        "github",
        "discord",
      ]}
      options={{
        projectId: "36a6b978-bba6-4df2-995b-6a1b6c63595f",
        clientKey: "cZKsbhDLbhzsQ8XLDyNNh86gMIM2DNtqDndv3z7E",
        appId: "sIqnAdsoFxqCzRuLGVuRTwERESTLkQAc1tU3vMun",
        chains: [
          PlatON,
          Optimism,
          Moonbeam,
          Moonriver,
          Avalanche,
          Polygon,
          BSC,
          Ethereum,
          EthereumGoerli,
          Solana,
          BSCTestnet,
          KCCTestnet,
        ],
        particleWalletEntry: {
          displayWalletEntry: true,
          defaultWalletEntryPosition: WalletEntryPosition.BR,
          supportChains: [Ethereum, EthereumGoerli],
        },
        wallets: [...evmWallets({ qrcode: false }), ...solanaWallets()],
      }}
      language="en"
      theme={"light"}
    >
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </ModalProvider>
  );
}
