// step 1 - set event hendler
document.getElementById('button-login')
    .addEventListener('click', function(e){
        // step 2 - prevent event hendler
        e.preventDefault();
        console.log('clicked');
        // step 3 - get phone number & pin number
        const phoneNumber = document.getElementById('phone-number').value;
        console.log(phoneNumber);

        const pinNumber = document.getElementById('pin-number').value;
        console.log(pinNumber);
        //temporary
        if (phoneNumber === '5' && pinNumber === '124'){
            console.log('You are logged in');
            window.location.href = './home.html'
        }
        else{
            alert('your credentials doesnot match');
        }

})