function getInputValueByID(inputId){
    const inputfield= document.getElementById('inputId')
    const inputfieldstring = inputfield.value
    const inputfieldamount = parseFloat(inputfieldstring)

    inputfield.value = '';

    if(isNaN(inputfieldamount)){
        alert('Please provide a number')
        return;
    }

};

document.getElementById('btn-deposit').addEventListener('click',function(){
    const depositField =document.getElementById('deposit-field');
    const depositFileldString = depositField.value;
    const depositFieldAmount = parseFloat(depositFileldString);

    depositField.value='';

    if(isNaN(depositFieldAmount)){
        alert('Please provide a number');
        return;
    }

    const depositTotalElement = document.getElementById('deposit-total');
    const preDepositTotalstring =depositTotalElement.innerText;
    const preDepositTotal = parseFloat(preDepositTotalstring);

    const newDepositTotal = preDepositTotal + depositFieldAmount;
    console.log(newDepositTotal);
    depositTotalElement.innerText = newDepositTotal;

    const balanceTotalElement = document.getElementById('balance-total'); 
    const preBalanceTotalString = balanceTotalElement.innerText;
    const preBalanceTotal = parseFloat(preBalanceTotalString);

    const newBalanceTotal = depositFieldAmount + preBalanceTotal;
    balanceTotalElement.innerText = newBalanceTotal;
})

document.getElementById('btn-withdraw').addEventListener('click', function(){
    const withdrawField = document.getElementById('withdraw-field'); // withdraw 
    const withdrawFieldString = withdrawField.value;
    const withdrawAmount = parseFloat(withdrawFieldString);

    withdrawField.value = '';

    if(isNaN(withdrawAmount)){
        alert('Please provide a number');
        return;
    }

    const withdrawTotalElement = document.getElementById('withdraw-total');
    const prewithdrawTotalString = withdrawTotalElement.innerText;
    const prewithdrawTotal = parseFloat(prewithdrawTotalString);

    

    
    const balanceTotalElement = document.getElementById('balance-total'); // balance 
    const preBalanceTotalString = balanceTotalElement.innerText;
    const preBalanceTotal = parseFloat(preBalanceTotalString);
    
    if(withdrawAmount > preBalanceTotal){
        alert("Change your amount")
        return;
    }

    const withdrawTotal = prewithdrawTotal + withdrawAmount; // total withdraw
    withdrawTotalElement.innerText = withdrawTotal;

    const newBalanceTotal = preBalanceTotal - withdrawAmount; // total balance
    balanceTotalElement.innerText = newBalanceTotal;
    
    

})

    
