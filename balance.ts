 var Web3 = require('web3');
const jsonFile = require('./build/contracts/Data.json');

const web3 = new Web3('http://127.0.0.1:8545');

enum lists {
    abi = jsonFile.abi,
    address = jsonFile.networks[5777].address
}

const contract = new web3.eth.Contract(lists.abi, lists.address);
var balance : number;
contract.methods.getBalance().call().then((bal : number)  => { balance = bal;console.log(bal)})
export const amount : number = 400;
export function setDeposit(amount: number) : void {
    web3.eth.getAccounts().then((accounts :any[]) => {
        let acc = accounts[1];
        console.log(`..... the account money will fluctuate is ${acc}`);
        contract.methods.Deposit(amount).send({from : acc})
    })
}
export function setWithdraw(amount : number) : void{
    web3.eth.getAccounts().then(accounts => {
        let acc = accounts[1];
        console.log(`..... the account  money will fluctutate is ${acc}`);
        contract.methods.Withdraw(amount).send({from : acc})
    })
}
setWithdraw(amount);
console.log(`the balance is ${balance}`)
