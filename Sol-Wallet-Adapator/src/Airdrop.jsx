//import React from 'react';
import { useWallet } from "@solana/wallet-adapter-react";
import { useConnection } from "@solana/wallet-adapter-react";
import { LAMPORTS_PER_SOL } from "@solana/web3.js";
import './Airdrop.css'
function Airdrop(){
    const wallet = useWallet();
    const { connection } = useConnection();

    async function sendWallet(){
        let amount = document.getElementById("amount").value;
        await connection.requestAirdrop(wallet.publicKey, amount * LAMPORTS_PER_SOL);
        alert("Airdropped " + amount + " SOL to " + wallet.publicKey.toBase58());
    }

    return (
        <div>
       <input id="amount" type="text" placeholder="Amount" />
        <button id='btn' onClick={sendWallet}>Request Airdrop</button>
        </div>
    )
}
export default Airdrop;

