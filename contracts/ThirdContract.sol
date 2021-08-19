pragma solidity >=0.4.22 <0.9.0;

contract ThirdContract{
   uint public data = 300;

    function getData() public payable returns(uint) {
            return data;
    }

}