// initiate json for the sharingFile smart contract 
var sha256 = require('crypto-js/sha256');
var json = require('./build/contracts/sharingFile.json');
var Web = require('web3');
// initiate the web3 in the server
var web3 = new Web('http://127.0.0.1:8545');
// initiated in the browser
// const address : number = json.networks[5777].address;
// // address 
// const abi : any = json.abi;s
var list;
(function (list) {
    list[list["abi"] = json.abi] = "abi";
    list[list["address"] = json.networks[5777].address] = "address";
})(list || (list = {}));
//abi from the sharingFile
//fetching the contract through web3.js
var contract = new web3.eth.Contract(list.abi, list.address);
contract.methods.getText().call().then(function (text) { return console.log("text is  " + sha256(text).toString()); });
web3.eth.getAccounts().then(function (accounts) {
    var acc1 = accounts[1];
    console.log("The account is " + acc1);
    return contract.methods.getText().send({ from: acc1 }).then(function (data) { return console.log(data); });
});
// web3.eth.getAccounts(data =>console.log(data))
