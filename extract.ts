var Web3 = require('web3');
const jsonFile = require('./build/contracts/Balance.json');

const web3 = new Web3('http://127.0.0.1:8545');

enum lists {
    abi = jsonFile.abi, 
    address = jsonFile.networks[5777].address
}

export const contract = new web3.eth.Contract(lists.abi, lists.address);

function setBalance() : void{
    web3.eth.getAccounts().then((accounts : any[]) => {
        let account = accounts[2];
        web3.eth.getBalance(account).then((balance: number) =>
         {
             console.log(`.......the balance is ${balance}`);
            contract.methods.setBalance(balance).send({from :account}).then();
        });
    })
}
function getBalance() :void {
    contract.methods.getBalance().call().then((bal : number) => {console.log(bal)});
}
function setWithdraw(amount : number) : void {
    web3.eth.getAccounts().then((accounts : any[]) => {
        let account = accounts[2];
        contract.methods.setWithdraw(amount).send({from : account});
        contract.methods.getBalance().call().then((balance : number) => {console.log(`.........Withdraw balance is ${balance}`)})
    })
}
function setDeposit(amount : number) : void {
    web3.eth.getAccounts().then((accounts : any[]) => {
        let account = accounts[2];
        contract.methods.setDeposit(amount).send({from : account});
        contract.methods.getBalance().call().then((balance : number) => {console.log(`..........Deposit balance is ${balance}`)})
    })
}
setBalance();
getBalance();
setWithdraw(5000000000000000);
