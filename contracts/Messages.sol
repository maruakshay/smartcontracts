// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract Messages {
    string public message = 'hey rere';

    function getMessage() public view returns(string memory) {
        return message;
    }
}