# SpendWise – Interactive Budget Tracker

## Project Overview
SpendWise is a simple budget tracking application designed to help users manage their monthly budget and record expenses. The application uses JavaScript to make the dashboard interactive.

## Features and Improvements
- Displays the monthly budget, total expenses, and remaining balance.
- Allows users to add expenses using an interactive form.
- Stores multiple expense records in a JavaScript array.
- Automatically calculates total expenses.
- Displays expense records directly on the dashboard.
- Provides feedback when the user is within, exactly at, or over the budget.

## JavaScript Concepts Used

### 1. Conditional Statements
Conditional statements check the user's budget status:
- Within budget: displays a positive message.
- Exactly on budget: displays a message that the entire budget has been used.
- Over budget: displays a warning.

### 2. Arrays
The `expenses` array stores multiple expense records. Each record contains an expense name, category, and amount.

### 3. Loops
For loops process the expense records to calculate the total expenses and display each expense on the dashboard.

### 4. DOM Manipulation
The Document Object Model (DOM) allows JavaScript to update the webpage. SpendWise uses DOM methods to display the budget, total expenses, remaining balance, budget status, and expense list.

### 5. Event Listeners
An event listener handles the expense form submission. It prevents the page from reloading, validates the information, adds the expense to the array, updates the dashboard, and clears the form.

## Challenges and Solutions
One challenge was connecting JavaScript to the HTML dashboard so that information could appear directly on the webpage. This was solved by using DOM methods and ensuring that the HTML element IDs matched the JavaScript code.

Another challenge was testing different budget situations. This was solved using conditional statements to check whether expenses were below, equal to, or above the monthly budget.

## Testing
The application was tested using the following scenarios:

1. Within budget: confirmed that a positive message appears.
2. Exactly on budget: confirmed that the entire budget message appears.
3. Over budget: confirmed that a warning appears.

All three budget status tests worked successfully.

## Technologies Used
- HTML
- CSS
- JavaScript
- Visual Studio Code
- Git and GitHub

## How to Run
1. Download or clone the project repository.
2. Open the project folder in Visual Studio Code.
3. Open `index.html` in a web browser.
4. Add expenses using the expense form and observe the dashboard updates.

## Future Improvements
- Save expense records so they remain available after refreshing the page.
- Allow users to change their monthly budget.
- Add expense categories and reports.

---

**Project:** SpendWise Interactive Budget Tracker  
**Developer:** Amina Abdihakim Mohamed
## GitHub Repository Information

GitHub Repository: https://github.com/aminaabdihakim67-source/budget-tracker

## Live Netlify Website

Live Website URL: https://spendwise-amina.netlify.app

## Deployment Process Summary

The SpendWise project was deployed using Netlify by connecting the public GitHub repository. Netlify was configured to deploy the master branch automatically whenever new changes are pushed to GitHub.

## Challenges Encountered During Deployment

I experienced difficulties connecting Netlify to GitHub because repository permissions were not initially configured. I resolved this by installing the Netlify GitHub application and granting access to my budget-tracker repository.

## Lessons Learned

I learned how to connect GitHub to Netlify, deploy a website, configure a custom project name, and use continuous deployment to publish updates automatically.