"use strict";
exports.__esModule = true;
exports.getHashRate = exports.setWithdraw = exports.getEthBalance = exports.setDeposit = exports.amount = exports.getBalances = exports.contract = void 0;
var Web3 = require('web3');
var jsonFile = require('./build/contracts/Data.json');
var web3 = new Web3('http://127.0.0.1:8545');
var lists;
(function (lists) {
    lists[lists["abi"] = jsonFile.abi] = "abi";
    lists[lists["address"] = jsonFile.networks[5777].address] = "address";
})(lists || (lists = {}));
exports.contract = new web3.eth.Contract(lists.abi, lists.address);
function getBalances() {
    exports.contract.methods.getBalance().call().then(function (bal) {
        console.log(bal);
    });
}
exports.getBalances = getBalances;
exports.amount = 400;
function setDeposit(amount) {
    web3.eth.getAccounts().then(function (accounts) {
        var acc = accounts[0];
        console.log("..... the account money will fluctuate is " + acc);
        exports.contract.methods.Deposit(amount).send({ from: acc });
    });
}
exports.setDeposit = setDeposit;
function getEthBalance() {
    web3.eth.getAccounts().then(function (accounts) {
        var account = accounts[0];
        web3.eth.getBalance(account).then(function (balance) { return console.log(balance); });
    });
}
exports.getEthBalance = getEthBalance;
function setWithdraw(amount) {
    web3.eth.getAccounts().then(function (accounts) {
        var acc = accounts[0];
        console.log("..... the account  money will fluctutate is " + acc);
        exports.contract.methods.Withdraw(amount).send({ from: acc });
    });
}
exports.setWithdraw = setWithdraw;
function getHashRate() {
    web3.eth.getHashrate().then(function (rate) { return console.log("...........the hashrate is " + rate); });
}
exports.getHashRate = getHashRate;
getBalances();
getEthBalance();
setDeposit(exports.amount);
getHashRate();
