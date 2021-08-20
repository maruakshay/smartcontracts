 var Web3 = require('web3');
const jsonFile = require('./build/contracts/Data.json');

const web3 = new Web3('http://127.0.0.1:8545');

enum lists {
    abi = jsonFile.abi,
    address = jsonFile.networks[5777].address
}

export const contract = new web3.eth.Contract(lists.abi, lists.address);
export function getBalances() : void {
    contract.methods.getBalance().call().then((bal : number) =>
    {
        console.log(bal)
    })
}
export const amount : number = 400;
export function setDeposit(amount: number) : void {
    web3.eth.getAccounts().then((accounts :any[]) => {
        let acc = accounts[0];
        console.log(`..... the account money will fluctuate is ${acc}`);
        contract.methods.Deposit(amount).send({from : acc})
    })
}
export function getEthBalance() : void {
    web3.eth.getAccounts().then((accounts : any[]) => {
        let account = accounts[0];
        web3.eth.getBalance(account).then((balance: number) => console.log(balance));
    })
}
export function setWithdraw(amount : number) : void{
    web3.eth.getAccounts().then(accounts => {
        let acc = accounts[0];
        console.log(`..... the account  money will fluctutate is ${acc}`);
        contract.methods.Withdraw(amount).send({from : acc})
    })
}
getBalances();
getEthBalance();
setDeposit(amount);
