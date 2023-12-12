const {
    Web3
} = require("web3");

async function write() {

    const web3 = new Web3('http://127.0.0.1:8545') // i am using anvil

    const contractAddress = ""
    const private_key = ""

    const from = ""

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

    try {
        // Build the transaction object for the contract interaction
        const transactionObject = {
            from: from,
            to: contractAddress,
            gas: 200000, // Adjust gas values as needed
            gasPrice: await web3.eth.getGasPrice(),
            data: contract.methods.setter(55).encodeABI(),
        };

        // Sign the transaction with the private key
        const signedTransaction = await web3.eth.accounts.signTransaction(
            transactionObject,
            private_key
        );

        // Send the signed transaction
        const receipt = await web3.eth.sendSignedTransaction(signedTransaction.rawTransaction);

        console.log('Transaction sent. Receipt:', receipt);
    } catch (error) {
        console.error('Error sending transaction:', error.message);
    }
}

write();