document.getElementById('btn-withdraw').addEventListener('click', function () {
    const withdrawFeild = document.getElementById('withdraw-feild');
    const newWithdrawAmountString = withdrawFeild.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString)

    withdrawFeild.value = '';

    if (isNaN(newWithdrawAmount)) {
        alert('Please Input a valid number');
        return;
    }

    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawString = withdrawTotalElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawString);


    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);



    if (newWithdrawAmount > previousBalanceTotal) {
        alert('Ei haramjada oto tk nai kom kore lekh!!!')
        return;
    }

    const currentWithdrawTotal = newWithdrawAmount + previousWithdrawTotal;
    withdrawTotalElement.innerText = currentWithdrawTotal;

    const currentBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    balanceTotalElement.innerText = currentBalanceTotal;



})