import Web3 from "web3";
import './App.css';
import {useEffect, useState} from "react";


function App() {
    const [items, setItems] = useState([])
    const [account, setAccount] = useState('')

    useEffect(() => {
        const loadBlockChainData = async () => {
            const web3 = new Web3(Web3.givenProvider || 'http://localhost:8545');
            const network = await web3.eth.net.getNetworkType()
            // Fetch account
            const accounts = web3.eth.getAccounts()
            console.log("network", network)
            console.log(accounts[0], 'accounts')

        }

        loadBlockChainData().catch()
    }, [])
    return (
        <div className="container">
            <h1>Hellox world</h1>
            <h2>{account}</h2>
        </div>
    );
}

export default App;
