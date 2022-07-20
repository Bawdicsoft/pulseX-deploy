import React , {useEffect} from 'react';
import { ethers } from "ethers";
import {Injected} from "./Wallets";
import {useWeb3React} from "@web3-react/core";



const PulseXContractAddress = "0x8AF2Eda7c3b0a638C70046B884490b7F94C3C573";
    const PulseXAbi = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[],"name":"Owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"counter","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_key","type":"uint256"}],"name":"getUserAndValue","outputs":[{"internalType":"address","name":"user","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"submit","outputs":[],"stateMutability":"payable","type":"function"}]

    const provider = new ethers.providers.Web3Provider(
        window.ethereum
    ).getSigner();

    export const PulseXContract = new ethers.Contract(
        PulseXContractAddress,
        PulseXAbi,
        provider
    );
    console.log({ PulseXContract });

const Integration = () => {
    const {activate} = useWeb3React()

    
    useEffect(() => {
        (async () =>  await activate(Injected))()
      }, []);

    return (
        <div>

        </div>
    );
}

export default Integration;
