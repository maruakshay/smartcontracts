"use strict";
exports.__esModule = true;
exports.contract = void 0;
var Web3 = require('web3');
var jsonFile = require('./build/contracts/Balance.json');
var web3 = new Web3('http://127.0.0.1:8545');
var lists;
(function (lists) {
    lists[lists["abi"] = jsonFile.abi] = "abi";
    lists[lists["address"] = jsonFile.networks[5777].address] = "address";
})(lists || (lists = {}));
exports.contract = new web3.eth.Contract(lists.abi, lists.address);
function setBalance() {
    web3.eth.getAccounts().then(function (accounts) {
        var account = accounts[2];
        web3.eth.getBalance(account).then(function (balance) {
            console.log(".......the balance is " + balance);
            exports.contract.methods.setBalance(balance).send({ from: account }).then();
        });
    });
}
function getBalance() {
    exports.contract.methods.getBalance().call().then(function (bal) { console.log(bal); });
}
function setWithdraw(amount) {
    web3.eth.getAccounts().then(function (accounts) {
        var account = accounts[2];
        exports.contract.methods.setWithdraw(amount).send({ from: account });
        exports.contract.methods.getBalance().call().then(function (balance) { console.log(".........Withdraw balance is " + balance); });
    });
}
function setDeposit(amount) {
    web3.eth.getAccounts().then(function (accounts) {
        var account = accounts[2];
        exports.contract.methods.setDeposit(amount).send({ from: account });
        exports.contract.methods.getBalance().call().then(function (balance) { console.log("..........Deposit balance is " + balance); });
    });
}
setBalance();
getBalance();
setWithdraw(50000000);
setDeposit(10000000000);
