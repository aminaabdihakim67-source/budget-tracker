# My Budget Tracker

## Project Description
My Budget Tracker is a simple website designed to help users record and view their daily expenses.

## Features
- Expense entry form.
- Category dropdown with five options.
- Expense table displaying sample expenses.
- Budget-related logo.
- Embedded YouTube budgeting video.
- Collapsible instructions section.
- Styled table with alternating row colors and hover effects.

## Technologies Used
- HTML5
- CSS3

## Project Files
- `index.html` – Contains the structure and content of the website.
- `style.css` – Controls the design, colors, layout and styling.
- `README.md` – Explains the project and its features.

## How to Use
1. Open index.html in a web browser.
2. View the Add Expense form.
3. Select an expense category.
4. View the sample expenses in the table.
5. Expand the instructions section to learn how to use the tracker.

**Note:** The Add Expense button is not functional yet. JavaScript functionality will be added in a later week.

## Author
Amina Abdihakim Mohamed

## Week 3: Visual Identity and CSS Design

For Week 3, I improved the visual appearance of my Budget Tracker using CSS.

### Design Features
- Used a cream, white, sage green, and forest green colour palette.
- Added Google Fonts: DM Sans for body text and Playfair Display for headings.
- Styled the page heading, expense form, and expense table as separate cards.
- Added padding, margins, borders, rounded corners, and shadows.
- Styled form inputs and buttons.
- Added alternating colours to table rows and hover effects.
- Included responsive styling for smaller screens.

### Technologies Used
- HTML5
- CSS3
- Google Fonts## Week 4: SpendWise Dashboard Shell

For Week 4, I rebuilt my Budget Tracker into a responsive SpendWise financial dashboard.

### Features
- Sidebar navigation menu.
- Dashboard header and profile area.
- Six financial category cards: Food, Transport, Rent, Entertainment, Savings and Utilities.
- CSS Grid for the overall dashboard and category layout.
- Flexbox for the sidebar, header and dashboard cards.
- CSS custom properties for a consistent colour theme.
- Responsive single-column layout below 768px.
- Hover and keyboard-focus animations on cards.
- Dark theme using prefers-color-scheme.

### Technologies Used
- HTML5
- CSS3
- CSS Grid
- Flexbox
- CSS Variables
- Media Queries

## Week 6: JavaScript Foundation

### What SpendWise Does
SpendWise is a personal budget tracker that helps users calculate their remaining balance and monitor their spending.

### JavaScript Concepts Implemented

1. Variables and Data Types
   - Used `let` to store monthly budget, expenses, remaining balance and budget status.
   - Used numbers and strings.

2. User Input
   - Used `prompt()` to collect monthly budget and expenses.
   - Used `Number()` to convert user input into numbers.

3. Input Validation
   - Used `if` statements and `isNaN()` to reject invalid budget and expense values.

4. Budget Calculations
   - Subtracted total expenses from the monthly budget to calculate the remaining balance.

5. Functions
   - `calculateRemainingBalance()` calculates the remaining budget.
   - `checkBudgetStatus()` checks whether the user is within or over budget.

6. Displaying Results
   - Used `console.log()` to display the budget summary and calculations in the browser console.

### How to Run SpendWise
1. Open `index.html` in a web browser.
2. Enter your monthly budget when prompted.
3. Enter your total expenses.
4. Open the browser console to view the budget summary.

### Testing
Tested with:
- Budget: KSh 10,000; Expenses: KSh 3,500; Balance: KSh 6,500.
- Budget: KSh 10,000; Expenses: KSh 12,000; Balance: KSh -2,000.
- Negative budget and expenses were rejected.
