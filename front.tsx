import {getBalances, setDeposit, setWithdraw} from './balance';

export var data = document.querySelector('.data');

export var button = document.querySelector('button').addEventListener('click', (e)=> {
    e.preventDefault();
    console.log('you have clicked')
    setDeposit(500);
    console.log(`added`);
    getBalances()
})