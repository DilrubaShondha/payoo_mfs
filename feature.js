document.getElementById('show_addmoney')
.addEventListener('click', function(){
        document.getElementById('addmoney_form').classList.remove('hidden');
        document.getElementById('cashout_form').classList.add('hidden');

        
});

document.getElementById('show_cashout')
.addEventListener('click', function(){
        document.getElementById('cashout_form').classList.remove('hidden');
        document.getElementById('addmoney_form').classList.add('hidden');

        
});