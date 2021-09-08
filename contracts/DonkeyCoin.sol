// SPDX-License-Identifier: GPL-3.0
// contracts/Tokens.sol
pragma solidity >=0.4.22 <0.9.0;


contract DonkeyCoin{
    
     struct Tokens {
           string tokenName;
           string tokenSymbol;
            uint tokens  ;         
        }
         Tokens public donkeyCoin ;
         
          mapping(address=> uint) user;
          modifier onlyOwner {
              require(User == owner , 'you are not validated');
              _;
          }
    address public User = msg.sender;
    address private owner =0x5B38Da6a701c568545dCfcB03FcB875f56beddC4;
    
    function setTokens(uint _tokens)public onlyOwner   {
       
        donkeyCoin.tokenName = 'DonkeyCoin';
        donkeyCoin.tokenSymbol = 'DKC';
        donkeyCoin.tokens= _tokens;
    }
    
   function seeTokens() public returns(uint){
       return donkeyCoin.tokens;
   }
    function getTokenFree(uint _tokens, address _address) public payable{
        user[_address] = _tokens;
        donkeyCoin.tokens -= _tokens;
    }
}

