// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract Balance {
    uint public balance;

    function setBalance(uint bal) public returns(uint){
        balance = bal;
        return balance;
    }

    function getBalance() public view returns(uint){
        return balance ;
    }

    function setDeposit(uint amount) public returns(uint){
        return balance+= amount ;
    }

    function setWithdraw(uint amount) public returns(uint){
        return balance-= amount;
    }
}