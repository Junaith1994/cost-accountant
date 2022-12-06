// Common function
function updateBalance(isbalance, x) {
    const balance = document.getElementById('balance');
    const remainingBal = document.getElementById('remaining-balance');
    const incomeInput = document.getElementById('income-input');
    const amount = document.getElementById(x + '-amount');
    // const savingAmt = document.getElementById('saving-amount');

    if(isbalance == true) {
       if(incomeInput.value < 0 || isNaN(incomeInput.value)) {
            alert("Please input a valid income value");
        }
        else {
            balance.innerText = parseFloat(incomeInput.value) - parseFloat(amount.innerText);
            return balance.innerText;    
        }
    }
    else {
        if (parseFloat(balance.innerText) >= parseFloat(amount.innerText)) {
            remainingBal.innerText = parseFloat(balance.innerText) - parseFloat(amount.innerText);
            return remainingBal.innerText;
        }
        else {
            alert("Insufficient Balance !!");
        }
    }
}

//Expenses calculation and Balance Update
document.getElementById('calc-btn').addEventListener('click', function() {
    const foodCost = document.getElementById('food-cost');
    const rentCost = document.getElementById('rent-cost');
    const clotheCost = document.getElementById('clothe-cost');
    const totalExpenses = document.getElementById('total-exp-amount');
    
    if (foodCost.value < 0 || rentCost.value < 0 || clotheCost.value < 0) {
        if (isNaN(foodCost.value) || isNaN(rentCost.value) || isNaN(clotheCost.value)) {
            alert("Please input a number")
        }
        else {
            alert("Please input a positive number")
        }
    }
    else {
        totalExpenses.innerText = parseFloat(foodCost.value) + parseFloat(rentCost.value) + parseFloat(clotheCost.value);
    }
    updateBalance(true,'total-exp');
    // const incomeInput = document.getElementById('income-input');
    // const balance = document.getElementById('balance');
    // balance.innerText = parseFloat(incomeInput.value) - parseFloat(totalExpenses.innerText);
});

// Saving Amount Calculation Part
document.getElementById('save-btn').addEventListener('click', function() {
    const incomeInput = document.getElementById('income-input');
    const savingInput = document.getElementById('saving-input');
    const balance = document.getElementById('balance');
    const savingAmt = document.getElementById('saving-amount');
    const remainingBal = document.getElementById('remaining-balance');
    
    if(parseFloat(savingInput.value) < 0 || isNaN(savingInput.value)) {
        alert("Please input a positive number in 'Save' input field !!")
    }
    else {
        savingAmt.innerText = (parseFloat(incomeInput.value) * parseFloat(savingInput.value)) / 100;
        if ((parseFloat(balance.innerText) < parseFloat(savingAmt.innerText))) {
            alert("You don't have sufficient balance to save money!!")
            savingAmt.innerText = 0;
            updateBalance(false, 'saving')
        }
        else {
            updateBalance(false, 'saving')
        }
    } 
    // console.log(typeof(savingAmt.innerText));

    // remainingBal.innerText = parseFloat(balance.innerText) - parseFloat(savingAmt.innerText);
});