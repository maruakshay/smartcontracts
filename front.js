"use strict";
exports.__esModule = true;
var balance_1 = require("./balance");
var data = document.querySelector('.data');
var button = document.querySelector(button).addEventListener('click', function (e) {
    e.preventDefault();
    balance_1.setDeposit(500);
    console.log("added");
    balance_1.getBalances();
});
