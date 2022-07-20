import { InjectedConnector } from "@web3-react/injected-connector";

// MetaMask
export const Injected = new InjectedConnector({
  supportedChainIds: [1, 3, 4, 5, 42, 56, 97, 1337],
});