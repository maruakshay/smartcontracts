"use strict";
exports.__esModule = true;
exports.setWithdraw = exports.setDeposit = exports.amount = void 0;
var Web3 = require('web3');
var jsonFile = require('./build/contracts/Data.json');
var web3 = new Web3('http://127.0.0.1:8545');
var lists;
(function (lists) {
    lists[lists["abi"] = jsonFile.abi] = "abi";
    lists[lists["address"] = jsonFile.networks[5777].address] = "address";
})(lists || (lists = {}));
var contract = new web3.eth.Contract(lists.abi, lists.address);
function getBalances() {
    contract.methods.getBalance().call().then(function (bal) { return console.log(bal); });
}
exports.amount = 600;
function setDeposit(amount) {
    web3.eth.getAccounts().then(function (accounts) {
        var acc = accounts[1];
        console.log("..... the account money will fluctuate is " + acc);
        contract.methods.Deposit(amount).send({ from: acc });
    });
}
exports.setDeposit = setDeposit;
function setWithdraw(amount) {
    web3.eth.getAccounts().then(function (accounts) {
        var acc = accounts[1];
        console.log("..... the account  money will fluctutate is " + acc);
        contract.methods.Withdraw(amount).send({ from: acc });
    });
}
exports.setWithdraw = setWithdraw;
setDeposit(exports.amount);
getBalances();
