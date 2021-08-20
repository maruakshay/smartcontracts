// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract Balance {
uint public balance = 5000;

function getBalance() public view returns(uint){
    return balance ;
}

function Deposit(uint amount) public view returns(uint){
    return balance + amount;
}
function Withdraw(uint amount) public view returns(uint){
    return balance - amount;
}
}