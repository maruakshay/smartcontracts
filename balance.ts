 var Web3 = require('web3');
const jsonFile = require('./build/contracts/Data.json');

const web3 = new Web3('http://127.0.0.1:8545');

enum lists {
    abi = jsonFile.abi,
    address = jsonFile.networks[5777].address
}

const contract = new web3.eth.Contract(lists.abi, lists.address);

function getBalances() : void{
    contract.methods.getBalance().call().then(bal => console.log(bal));
}
export const amount : number = 600;
export function setDeposit(amount: number) : void {
    web3.eth.getAccounts().then(accounts => {
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
setDeposit(amount);
getBalances();
