const Web3 = require('web3');
// const json = require('./build/contracts/newContract.json')
 web3 = new Web3('http://127.0.0.1:8545');
//  const abi = json.abi;

// var balance ;
// var address = '0x13195f99C1d313F1722d19AC181e5e1C651a0f48';

// const contract = new web3.eth.Contract(abi, address);

// contract.methods.getToken().call().then(bal => console.log(bal));

// web3.eth.getAccounts().then(accounts => {
//     var acc = accounts[1];
//     console.log(acc);
//     console.log('sent');
//     return contract.methods.addTokens().send({from : acc}).then((data)=> console.log(data) );
    
// })

const json = require('./build/contracts/Messages.json');

const abi = json.abi;
const address = json.networks[5777].address;

const contract = new web3.eth.Contract(abi, address);

contract.methods.getMessage().call().then(text => console.log(`${text}`));

web3.eth.getAccounts().then(accounts => {
    var acc = accounts[0];
   console.log(acc);
})
