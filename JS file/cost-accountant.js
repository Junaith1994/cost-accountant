// Common function
function updateBalance(amtId, balId, incomeId) {
    const totalExpenses = document.getElementById(amtId);
    const incomeInput = document.getElementById(balId);
    const balance = document.getElementById(incomeId);

    balance.innerText = parseFloat(incomeInput.value) - parseFloat(totalExpenses.innerText);
}

//Expenses calculation and Balance Update
document.getElementById('calc-btn').addEventListener('click', function() {
    const foodCost = document.getElementById('food-cost');
    const rentCost = document.getElementById('rent-cost');
    const clotheCost = document.getElementById('clothe-cost');
    const totalExpenses = document.getElementById('total-exp');
    const incomeInput = document.getElementById('income-input');
    const balance = document.getElementById('balance');

    totalExpenses.innerText = parseFloat(foodCost.value) + parseFloat(rentCost.value) + parseFloat(clotheCost.value);
    // updateBalance();
    // balance.innerText = parseFloat(incomeInput.value) - parseFloat(totalExpenses.innerText);
});

// Saving Amount Calculation Part
document.getElementById('save-btn').addEventListener('click', function() {
    const savingInput = document.getElementById('saving-input');
    const balance = document.getElementById('balance');
    const savingAmt = document.getElementById('saving-amount');
    const remainingBal = document.getElementById('remaining-balance');
    
    savingAmt.innerText = (parseFloat(balance.innerText) * parseFloat(savingInput.value)) / 100;
    remainingBal.innerText = parseFloat(balance.innerText) - parseFloat(savingAmt.innerText);
});