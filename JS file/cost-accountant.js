// Common function for Balance Update and Remaining Balance
function updateBalance(isbalance, x) {
    const balance = document.getElementById('balance');
    const remainingBal = document.getElementById('remaining-balance');
    const incomeInput = document.getElementById('income-input');
    const amount = document.getElementById(x + '-amount');

    if(isbalance == true) {
       if(incomeInput.value < 0 || isNaN(incomeInput.value)) {
            alert("Please input a valid income value");
        }
        else {
            if(incomeInput.value == '') {
                balance.innerText = 0;
            }   
            else {
                balance.innerText = parseFloat(incomeInput.value) - parseFloat(amount.innerText);
                return balance.innerText;
            } 
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

//Total expenses calculation event handler and Balance Update
document.getElementById('calc-btn').addEventListener('click', function() {
    const incomeInput = document.getElementById('income-input');
    const foodCost = document.getElementById('food-cost');
    const rentCost = document.getElementById('rent-cost');
    const clotheCost = document.getElementById('clothe-cost');
    const totalExpenses = document.getElementById('total-exp-amount');
    
    // Validation for Total Expenses
    if (isNaN(foodCost.value) || isNaN(rentCost.value) || isNaN(clotheCost.value) || foodCost.value < 0 || rentCost.value < 0 || clotheCost.value < 0) {
        alert("Please input a positive number");
    }
    else {
        if (foodCost.value == '' && rentCost.value == '' && clotheCost.value == '') {
            totalExpenses.innerText = 0;
        }
        else {
            totalExpenses.innerText = parseFloat(foodCost.value) + parseFloat(rentCost.value) + parseFloat(clotheCost.value);
        }
    }
    if(totalExpenses.innerText > incomeInput.value) {
        alert("Your expenses has crossed your income or your expenses are equal of your income !!");
        totalExpenses.innerText = 0;
    }
    else {
        updateBalance(true, 'total-exp');
    }
});

// Saving amount calculation event handler and Remaining Balance Update
document.getElementById('save-btn').addEventListener('click', function() {
    const incomeInput = document.getElementById('income-input');
    const savingInput = document.getElementById('saving-input');
    const balance = document.getElementById('balance');
    const savingAmt = document.getElementById('saving-amount');
    
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
});