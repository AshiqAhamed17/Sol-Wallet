import React, { useState, useEffect } from "react";
import { useWallet } from "@solana/wallet-adapter-react";
import { useConnection } from "@solana/wallet-adapter-react";
import { LAMPORTS_PER_SOL } from "@solana/web3.js";
//import "./ShowBalance.css"; // Import the CSS file


export function ShowBalance(){
    const {connection} = useConnection();
    const wallet = useWallet();
    const [balance, setBalance] = useState("");

    useEffect(() => {
        async function fetchBalance(){
            if(wallet.publicKey){
                try {
                    const balance = await connection.getBalance(wallet.publicKey);
                    setBalance(balance / LAMPORTS_PER_SOL);
                } catch (error) {
                    console.error("Error fetching balance:", error);
                }
            }
        }
        fetchBalance(); 
    },[wallet.publicKey, connection]);


    return (
        <div>
            
            <div id="bal">
            <p> SOL Balance: </p>
            {balance !== null ? `${balance} SOL` : "Connect wallet to see balance"}
                 </div>
        </div>
    );
}