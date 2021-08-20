"use strict";
exports.__esModule = true;
exports.button = exports.data = void 0;
var balance_1 = require("./balance");
exports.data = document.querySelector('.data');
exports.button = document.querySelector('button').addEventListener('click', function (e) {
    e.preventDefault();
    console.log('you have clicked');
    balance_1.setDeposit(500);
    console.log("added");
    balance_1.getBalances();
});
