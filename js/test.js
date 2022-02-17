
/* Data patch from input field */
function updateAmount(inputField) {
    const amount = document.getElementById(inputField);
    const amountText = amount.value;
    const amountInValue = parseFloat(amountText);
    console.log(amountInValue)
    /* Error Handle */
    if (amountInValue < 0) {
        document.getElementById('error-text').style.display = "block";
    } else {
        document.getElementById('error-text').style.display = "none";
        return amountInValue;
    }

}
/* Total monthly expense caculations  */
function costCaculations() {
    const foodCost = updateAmount('food');
    const rentCost = updateAmount('rent');
    const clothesCost = updateAmount('clothes');
    const inTotalCost = foodCost + rentCost + clothesCost
    return inTotalCost;
}

/* Balance & expense caculations */
function balanceCalc() {
    const income = updateAmount('income')
    const balance = income - costCaculations();
    return balance;
}

/* Savings & remaining amount Caculations */
function save() {
    const income = updateAmount('income')
    const savings = updateAmount('save')
    const savingsAmount = income * (savings / 100);
    return savingsAmount;
}

/* caculations of the total expense*/
document.getElementById('calculate-btn').addEventListener('click', function () {

    const monthlyCost = costCaculations();
    const monthlyBalance = balanceCalc()

    /* Error Handle */
    if (isNaN(monthlyCost)) {
        document.getElementById('error-text').style.display = "block";
    } else if (isNaN(monthlyBalance)) {
        document.getElementById('error-text').style.display = "block";
    } else if (monthlyCost > updateAmount('income')) {
        document.getElementById('over-cost').style.display = "block";
    } else {
        document.getElementById('error-text').style.display = "none";
        document.getElementById('over-cost').style.display = "none";
        document.getElementById('total-expanses').innerText = monthlyCost;
        document.getElementById('balance').innerText = monthlyBalance;
    }
})

/* saving the rest amount*/
document.getElementById('save-btn').addEventListener('click', function () {
    const totalbalance = balanceCalc();
    const totalSave = save();
    const remainingBalance = totalbalance - totalSave;

    /* Error Handle */
    if (totalbalance < totalSave) {
        document.getElementById('over-save').style.display = "block";
    } else if (isNaN(totalbalance)) {
        document.getElementById('error-text').style.display = "block";
    } else if (isNaN(totalSave)) {
        document.getElementById('error-text').style.display = "block";
    } else {
        document.getElementById('over-save').style.display = "none";
        document.getElementById('error-text').style.display = "none";
        document.getElementById('saving-amount').innerText = totalSave;
        document.getElementById('remaining-balance').innerText = remainingBalance;
    }
})