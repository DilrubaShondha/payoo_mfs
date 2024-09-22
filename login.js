document.getElementById('button-login')
    .addEventListener('click', function(e){
        e.preventDefault();
        console.log('clicked');
        const phoneNumber = document.getElementById('phone-number').value;
        console.log(phoneNumber);

        const pinNumber = document.getElementById('pin-number').value;
        console.log(pinNumber);

})