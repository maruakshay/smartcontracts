import {getBalances, setDeposit, setWithdraw} from './balance';

var data = document.querySelector('.data');

var button = document.querySelector(button).addEventListener('click', (e)=> {
    e.preventDefault();
    setDeposit(500);
    console.log(`added`);
    getBalances()
})