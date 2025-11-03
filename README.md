# Bitasmbl-basic-calculator

A simple React-based web calculator that performs basic arithmetic operations and updates the display dynamically. This project demonstrates component structure, state management, and event handling in React.

## Tech Stack

- React (Create React App)

## Requirements

- Perform basic arithmetic operations (add, subtract, multiply, divide)
- Update the display dynamically when buttons are clicked
- Handle edge cases such as division by zero
- Provide a clear and intuitive layout for buttons and display

## Installation

1. Clone the repository:

   bash
   git clone https://github.com/your-username/Bitasmbl-basic-calculator.git
   
2. Navigate into the project directory:

   bash
   cd Bitasmbl-basic-calculator
   
3. Install dependencies:

   bash
   npm install
   

### Environment Variables

No additional environment variables are required for this project. Ensure you have Node.js (>=14) and npm installed.

## Usage

1. Start the development server:

   bash
   npm start
   
2. Open your browser and navigate to `http://localhost:3000`.
3. Use the on-screen buttons to perform calculations.

## Implementation Steps

1. Initialize the project with Create React App (`npx create-react-app`).
2. Create a `Calculator` component to hold the display and button grid.
3. Define state variables for the current input, the previous value, and the selected operator using `useState`.
4. Implement button components for digits, operations, clear, and equals.
5. Add event handlers to update the display and perform calculations when buttons are clicked.
6. Handle edge cases such as division by zero and reset behavior.
7. Style the calculator layout using CSS modules or styled-components for a clean, responsive UI.
8. Test all arithmetic operations and UI interactions manually to ensure correct behavior.