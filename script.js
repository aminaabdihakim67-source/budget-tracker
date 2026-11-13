
// SpendWise - JavaScript Foundation

// 1. Store budgeting information
let monthlyBudget = 0;
let expenseAmount = 0;

// 2. Collect and validate user input
monthlyBudget = Number(prompt("Enter your monthly budget (KSh):"));

if (monthlyBudget <= 0 || isNaN(monthlyBudget)) {
    alert("Please enter a valid monthly budget.");
} else {
    expenseAmount = Number(prompt("Enter your total expenses (KSh):"));

    if (expenseAmount < 0 || isNaN(expenseAmount)) {
        alert("Please enter valid expenses.");
    }
}

// 3. Create a reusable budget calculation function
function calculateRemainingBalance(budget, expenses) {
    return budget - expenses;
}
function checkBudgetStatus(budget, expenses) {
    if (expenses > budget) {
        return "You are over budget!";
    } else if (expenses === budget) {
        return "You have used your entire budget.";
    } else {
        return "You are within your budget.";
    }
}
// 4. Calculate the remaining balance
let remainingBalance = calculateRemainingBalance(
    monthlyBudget,
    expenseAmount
);
let budgetStatus = checkBudgetStatus(
    monthlyBudget,
    expenseAmount
);
// 5. Display results in the console
console.log("===== SPENDWISE BUDGET SUMMARY =====");
console.log("Monthly Budget: KSh " + monthlyBudget);
console.log("Total Expenses: KSh " + expenseAmount);
console.log("Remaining Balance: KSh " + remainingBalance);  
console.log("Budget Status: " + budgetStatus);
console.log("===================================");
