document.getElementById('btn-deposit').addEventListener('click', function () {
    const depositFeild = document.getElementById('deposit-feild');
    const newDepositAmountString = depositFeild.value;
    const newDepositAmount = parseFloat(newDepositAmountString);
    const depositTotalElement = document.getElementById('deposit-total');

    const previousDepositTotalString = depositTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString);
    const currentDepositTotal = previousDepositTotal + newDepositAmount;
    depositTotalElement.innerText = currentDepositTotal;

    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBlanaceTotal = parseFloat(previousBalanceTotalString);
    const currentBalanceTotal = newDepositAmount + previousBlanaceTotal;
    balanceTotalElement.innerText = currentBalanceTotal;


    depositFeild.value = '';
})