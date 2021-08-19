// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract newContract {
    uint public token = 50000;

    function getToken() public view returns(uint) {
        return token;
    }
    function addTokens() public  returns(uint) {
       return token++;
    }
    function deleteTokens() public{
        token--;
    }
}