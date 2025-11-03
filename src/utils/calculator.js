// src/utils/calculator.js
export function add(a, b) { return a + b; }
export function subtract(a, b) { return a - b; }
export function multiply(a, b) { return a * b; }
export function divide(a, b) {
  /* Return error for division by zero */
  return b === 0 ? "Error" : a / b;
}
