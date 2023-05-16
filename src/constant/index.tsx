import { ParticleNetwork, WalletEntryPosition } from "@particle-network/auth";
import { ParticleProvider } from "@particle-network/provider";
import { ethers } from "ethers";


export const tokenAddress = "0x45F0Ff65a3b0DBdA1732Cb5ECd50b356f55c56B4";
export const tokenAccount = "0x5043C9fF4E701D365A324386A5101C6a3f088B0A";

const particle = new ParticleNetwork({
    projectId: "f8dc7e0f-ea6a-469c-8a41-c572ba65e0d2",
    clientKey: "c4mrm5RvfG8T7zsqOqZJtU78rd5M821fe2vMVhy2",
    appId: "24b042dd-86d6-4507-a55c-fdd7981f0ae5",
    chainName: "BSC", //optional: current chain name, default Ethereum.
    chainId: 97, //optional: current chain id, default 1.
    wallet: {   //optional: by default, the wallet entry is displayed in the bottom right corner of the webpage.
      displayWalletEntry: true,  //show wallet entry when connect particle.
      defaultWalletEntryPosition: WalletEntryPosition.BR, //wallet entry position
      uiMode: "dark",  //optional: light or dark, if not set, the default is the same as web auth.
      supportChains: [{ id: 1, name: "BSCTestnet"}, { id: 5, name: "Ethereum"}], // optional: web wallet support chains.
      customStyle: {}, //optional: custom wallet style
    }
  });
  
  const particleProvider = new ParticleProvider(particle.auth);
  
  export default function connectWithContract() {
    // Creating a new web3 provider with window.ethereum
    const provider = new ethers.providers.Web3Provider(particleProvider, "any");
  
    // Getting the signer
    const signer = provider.getSigner();
  
    // Creating a new contract factory with the signer, address and ABI
    const contract = new ethers.Contract(tokenAccount, tokenAddress, signer);
  
    return contract;
  }
  