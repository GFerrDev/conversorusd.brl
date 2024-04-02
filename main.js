const toggleBtn = document.getElementById('toggle');
const body = document.body;

toggleBtn.addEventListener('click', function(){
    body.classList.toggle('dark-mode')
})



function convercao() {
    var cot = parseFloat(document.getElementById('cot').value)
    var brlAmount = parseFloat(document.getElementById('rs').value);
    var usdAmount = brlAmount / cot;
    
    document.getElementById('usd').value = usdAmount.toFixed(2);
}

function convercaoUsd() {
    var cot = parseFloat(document.getElementById('cot').value)
    var usdAmount = parseFloat(document.getElementById('usd').value);
    var brlAmount = usdAmount * cot;
    
    document.getElementById('rs').value = brlAmount.toFixed(2);
}