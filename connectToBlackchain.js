const {
    Web3
} = require('web3')

async function connect() {
    const web3 = new Web3('http://127.0.0.1:8545') // i am using anvil

    const accounts = await web3.eth.getAccounts();

    console.log(accounts[0])

    const first_account_balance_in_wei = await web3.eth.getBalance(accounts[0])

    console.log(first_account_balance_in_wei)

    // get balance in eth
    const balance_in_ether = web3.utils.fromWei(first_account_balance_in_wei, 'ether')
    console.log(balance_in_ether)
}
connect()