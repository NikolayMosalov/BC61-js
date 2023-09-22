export function calculateTotalExpenses(arr) {
  return arr.reduce((acc, { amount }) => acc + amount, 0);
}

export function getExpensesByCategory(arr, name) {
  return arr.filter(({ category }) => category === name);
}
