
// SpendWise - Interactive Budget Tracker

// 1. Store the monthly budget
let monthlyBudget = 10000;

// 2. Store multiple expenses in an array
let expenses = [];

// 3. Get HTML elements
const budgetDisplay = document.getElementById("monthly-budget");
const totalExpensesDisplay = document.getElementById("total-expenses");
const remainingBalanceDisplay = document.getElementById("remaining-balance");
const budgetStatusDisplay = document.getElementById("budget-status");
const expenseForm = document.getElementById("expense-form");
const expenseList = document.getElementById("expense-list");

// 4. Calculate total expenses using a loop
function calculateTotalExpenses() {
    let total = 0;

    for (let i = 0; i < expenses.length; i++) {
        total += expenses[i].amount;
    }

    return total;
}

// 5. Check budget status using conditionals
function checkBudgetStatus(total) {
    if (total > monthlyBudget) {
        return "Warning! You are over budget!";
    } else if (total === monthlyBudget) {
        return "You have used your entire budget.";
    } else {
        return "Great! You are within your budget.";
    }
}

// 6. Update the dashboard
function updateDashboard() {
    let total = calculateTotalExpenses();
    let remaining = monthlyBudget - total;

    budgetDisplay.textContent = "KSh " + monthlyBudget.toLocaleString();
    totalExpensesDisplay.textContent = "KSh " + total.toLocaleString();
    remainingBalanceDisplay.textContent = "KSh " + remaining.toLocaleString();

    // Display budget feedback directly on the webpage
    budgetStatusDisplay.textContent = checkBudgetStatus(total);

    // Display all expenses using a loop
    expenseList.innerHTML = "";

    if (expenses.length === 0) {
        expenseList.textContent = "No expenses recorded yet.";
    } else {
        for (let i = 0; i < expenses.length; i++) {
            const expenseItem = document.createElement("div");
            expenseItem.className = "expense-item";

            const expenseDetails = document.createElement("span");
            expenseDetails.textContent =
                expenses[i].name + " - " + expenses[i].category;

            const expenseAmount = document.createElement("strong");
            expenseAmount.textContent =
                "KSh " + expenses[i].amount.toLocaleString();

            expenseItem.appendChild(expenseDetails);
            expenseItem.appendChild(expenseAmount);
            expenseList.appendChild(expenseItem);
        }
    }
}

// 7. Listen for expense form submission
expenseForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("expense-name").value.trim();
    const category = document.getElementById("expense-category").value;
    const amount = Number(document.getElementById("expense-amount").value);

    // Validate the expense
    if (name === "" || category === "" || !Number.isFinite(amount) || amount <= 0) {
        alert("Please enter valid expense details.");
        return;
    }

    // Add the new expense to the array
    expenses.push({
        name: name,
        category: category,
        amount: amount
    });

    // Update the dashboard
    updateDashboard();

    // Clear the form
    expenseForm.reset();
});

// 8. Display the initial dashboard
updateDashboard();

