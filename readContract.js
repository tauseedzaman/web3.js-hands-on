const {
    Web3
} = require("Web3");


async function read() {

    const web3 = new Web3('http://127.0.0.1:8545') // i am using anvil

    const contractAddress = ""

    const contractAbi = [{
            "inputs": [{
                "internalType": "uint256",
                "name": "_number",
                "type": "uint256"
            }],
            "name": "setter",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "getter",
            "outputs": [{
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }],
            "stateMutability": "view",
            "type": "function"
        }
    ]

    const contract = new web3.eth.Contract(contractAbi, contractAddress)

    const data = await contract.methods.getter().call()
    console.log(data)

}

read();