// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract sharingFile {
    string public text = 'this is a secret which i am sending';

    function getText() public view returns(string memory) {
    return text;
}

}

