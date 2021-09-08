var Web3 = require('web3');
// const jsonFile = require('./build/contracts/DonkeyCoin.json');

const web3 = new Web3('http://127.0.0.1:8545');

const abi : any[] = [
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_name",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_symbol",
				"type": "string"
			}
		],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "Approval",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "Transfer",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "tokens",
				"type": "uint256"
			}
		],
		"name": "addMoreTokens",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			}
		],
		"name": "allowance",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "approve",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "account",
				"type": "address"
			}
		],
		"name": "balanceOf",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "tokens",
				"type": "uint256"
			}
		],
		"name": "burnTokens",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "decimals",
		"outputs": [
			{
				"internalType": "uint8",
				"name": "",
				"type": "uint8"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "subtractedValue",
				"type": "uint256"
			}
		],
		"name": "decreaseAllowance",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "addedValue",
				"type": "uint256"
			}
		],
		"name": "increaseAllowance",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "name",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "symbol",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "totalSupply",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "recipient",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "transfer",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "sender",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "recipient",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "transferFrom",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	}
];
export const contract = new web3.eth.Contract(abi,'0x151d3567D39D1E131A251E78Cf8fa11a5afBcF9e');

// contract -> balanceOf, transfer, 

function create() : void
// {contract.methods.name().call().then((name: string) => console.log(`Token name is ${name}`));
// contract.methods.symbol().call().then((symbol : string) => console.log(`Token Symbol is ${symbol}`));
// contract.methods.balanceOf('0xea448cB5d6225B3A5732a1565F74D0FFC5925703').call().then((data : number) => console.log(` prev balance of address : [0x353258D0C7726d3cEffa5e3Bfb7dA833b88f7337] is ${data}`));
// // contract.methods.transfer('0x20A895d509CF7B549382e77C12c8AA7926a75833', '500').send({from :'0x353258D0C7726d3cEffa5e3Bfb7dA833b88f7337'}).then((data: any) => console.log('token is sent'));
// // contract.methods.transfer('0x353258D0C7726d3cEffa5e3Bfb7dA833b88f7337', '100000').send({from : '0xea448cB5d6225B3A5732a1565F74D0FFC5925703'}).then((data :any) => console.log(data));
// contract.methods.totalSupply().call().then((data : number) => console.log(`Total Supply is ${data}`));
{
    contract.methods.totalSupply().call().then((data : number) => console.log(`total supply : ${data}`));
    contract.methods.name().call().then((name: string) => console.log(`Token name is ${name}`));
    contract.methods.symbol().call().then((symbol : string) => console.log(`Token Symbol is ${symbol}`));
    contract.methods.transfer('0x353258D0C7726d3cEffa5e3Bfb7dA833b88f7337',600).send({from :'0xea448cB5d6225B3A5732a1565F74D0FFC5925703' }).then((data : any) => console.log('sent'));
        setTimeout(() => {
            contract.methods.balanceOf('0x353258D0C7726d3cEffa5e3Bfb7dA833b88f7337').call().then((data: number) => console.log(`address[0x353258D0C7726d3cEffa5e3Bfb7dA833b88f7337] : ${data}`));
            contract.methods.balanceOf('0xea448cB5d6225B3A5732a1565F74D0FFC5925703').call().then((data : number) => console.log(`address[0xea448cB5d6225B3A5732a1565F74D0FFC5925703] : ${data}`))
        }, 5000);
    web3.eth.getAccounts().then((accounts : string[]) => console.log(accounts[3]))
}
create()
