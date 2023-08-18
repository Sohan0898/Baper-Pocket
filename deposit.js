// deposit 
document.getElementById('deposit-btn').addEventListener('click' ,function(){
    const depositField = document.getElementById('deposit-input');
    const newDepositAmountString = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountString);

    // clear field 
    depositField.value = '';

    // NaN validation 
    if(isNaN(newDepositAmount)){
        alert('কত টাকা দিবি বল');
        return;
    }

    const depositTotalElement = document.getElementById('deposit-total');
    const preDepositTotalSting = depositTotalElement.innerText;
    const preDepositTotal = parseFloat(preDepositTotalSting);

    const currentDepositTotal = preDepositTotal + newDepositAmount;
    depositTotalElement.innerText = currentDepositTotal;

    const balanceTotalElement = document.getElementById('balance-total');
    const preBalanceTotalString = balanceTotalElement.innerText;
    const preBalanceTotal = parseFloat(preBalanceTotalString); 

    const currentBalanceTotal = preBalanceTotal + newDepositAmount;
    balanceTotalElement.innerText = currentBalanceTotal;

    
})