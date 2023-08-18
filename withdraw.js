// withdraw
document.getElementById('withdraw-btn').addEventListener('click' ,function(){
    const withdrawField = document.getElementById('withdraw-input');
    const newWithdrawAmountString = withdrawField.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);
    // clear field 
    withdrawField.value = '';

    // NaN validation 
    if(isNaN(newWithdrawAmount)){
        alert('কত টাকা লাগব বল');
        return;
    }
    const withdrawTotalElement = document.getElementById('withdraw-total');
    const preWithdrawTotalSting = withdrawTotalElement.innerText;
    const preWithdrawTotal = parseFloat(preWithdrawTotalSting);


    const balanceTotalElement = document.getElementById('balance-total');
    const preBalanceTotalString = balanceTotalElement.innerText;
    const preBalanceTotal = parseFloat(preBalanceTotalString); 

    // validation 
    if(newWithdrawAmount > preBalanceTotal){
        alert('পকেটে আর টাকা নাই সোনা !!');
        return;
    }

    const currentWithdrawTotal = preWithdrawTotal + newWithdrawAmount;
    withdrawTotalElement.innerText = currentWithdrawTotal;

    const currentBalanceTotal = preBalanceTotal - newWithdrawAmount;
    balanceTotalElement.innerText = currentBalanceTotal;







    
})