// step 1 - add event handler
document.getElementById('button-cash-out')
    .addEventListener('click', function(e){
        e.preventDefault();
        // step 2 - get money to the account
        const amount = document.getElementById('cashout-amount').value;
        const amountNumber = parseInt(amount);

        const pin = document.getElementById('pin-cashout').value;
        //temporary but have to validate pin
        if (pin === '123'){
        //step 4 - get the account balance
        const balance = document.getElementById('balance').innerText;
        const balanceNumber = parseInt(balance);
        //step 5 - add money with balance
        const newBalance = balanceNumber - amountNumber;
        // step 6 - update the new balance
        document.getElementById('balance').innerText = newBalance;

        }
        else{
            alert('failed to transfer');
        }
       
});
