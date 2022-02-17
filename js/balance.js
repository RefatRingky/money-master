document.getElementById("total-amount").addEventListener('click',function () {
    const mainIncome = document.getElementById("income");
    const foodBalanceInput = document.getElementById("food-expense");
    const roombalanceInput = document.getElementById("room-expense");
    const travelBalanceInput = document.getElementById("travel-expense");
    const subTotal = parseInt(foodBalanceInput.value) + parseInt(roombalanceInput.value) + 
    parseInt(travelBalanceInput.value);
    const restBalance = parseInt(mainIncome.value) - parseInt(subTotal);
    document.getElementById('sub-total').innerText = subTotal;

    document.getElementById('Total-balance').innerText = restBalance ;

    // for saving Amount
    document.getElementById("save-btn").addEventListener('click',function () {
    
        document.getElementById("saving-input");
        const save = mainIncome.value * .2;
        const remainigBalance = parseInt(restBalance) - parseInt(save)
        document.getElementById('saving-total').innerText = save;
        document.getElementById('Remaining-balance').innerText = remainigBalance;
    
    });
    
});