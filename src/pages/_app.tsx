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
//import "@particle-network/connect-react-ui/esm/index.css";

export default function App({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <ModalProvider
      walletSort={["Particle Auth", "Wallet"]}
      particleAuthSort={[
        "email",
        "phone",
        "google",
        "apple",
        "discord"
      ]}
      options={{
        projectId: "f8dc7e0f-ea6a-469c-8a41-c572ba65e0d2",
        clientKey: "c4mrm5RvfG8T7zsqOqZJtU78rd5M821fe2vMVhy2",
        appId: "24b042dd-86d6-4507-a55c-fdd7981f0ae5",
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
          BSCTestnet,
          KCCTestnet,
        ],
        particleWalletEntry: {
          displayWalletEntry: true,
          defaultWalletEntryPosition: WalletEntryPosition.BR,
          supportChains: [Ethereum, EthereumGoerli],
        },
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
