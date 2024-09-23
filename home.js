// step 1 - add event hendler
document.getElementById('button-add-money')
    .addEventListener('click', function(e){
        e.preventDefault();
        // step 2 - get money to the account
        const amount = document.getElementById('amount').value;
        const amountNumber = parseInt(amount);
        const pin = document.getElementById('pin').value;
        console.log(pin);
        //temporary but have to validate pin
        if (pin === '124'){
            console.log('adding money to your account');
        //step 4 - get the account balance
        const balance = document.getElementById('balance').innerText;
        const balanceNumber = parseInt(balance);
        //step 5 - add money with balance
        const newBalance = balanceNumber + amountNumber;
        console.log(newBalance);
        // step 6 - update the new balance
        document.getElementById('balance').innerText = newBalance;

        }
        else{
            alert('failed to transfer');
        }
       
})