const {
    Web3
} = require('web3')

async function sendTransaction() {

    const web3 = new Web3('http://127.0.0.1:8545') // i am using anvil

    const accounts = await web3.eth.getAccounts();

    const first_account = accounts[0]
    const second_account = accounts[1]
    var first_account_balance = web3.utils.fromWei(await web3.eth.getBalance(first_account), 'ether')
    var second_account_balance = web3.utils.fromWei(await web3.eth.getBalance(second_account), 'ether')
    console.log("---------------------before-----------------------------")
    console.log("account: " + first_account + ", balance:" + first_account_balance)
    console.log("account: " + second_account + ", balance:" + second_account_balance)


    const amount = 10 // ether

    const _amount = web3.utils.toWei(amount.toString(), 'ether');

    // send from first to 2nd
    const transction = await web3.eth.sendTransaction({
        from: first_account,
        to: second_account,
        value: _amount
    })


    var first_account_balance = web3.utils.fromWei(await web3.eth.getBalance(first_account), 'ether')
    var second_account_balance = web3.utils.fromWei(await web3.eth.getBalance(second_account), 'ether')
    console.log("---------------------after-----------------------------")
    console.log("account: " + first_account + ", balance:" + first_account_balance)
    console.log("account: " + second_account + ", balance:" + second_account_balance)

    console.log(transction)

}
sendTransaction()