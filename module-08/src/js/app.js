import { calculateTotalExpenses, getExpensesByCategory } from './expenses';
import expenses from './transactions';
import refs from './helpers/refs';
import { renderOptions } from './helpers/renderOptions';
import { uniqCategory } from './helpers/uniqCategory';

refs.select.addEventListener('change', onSelectChange);

const totalExpenses = calculateTotalExpenses(expenses);
// console.log(`Загальна сума витрат: ${totalExpenses}`);
const foodExpenses = getExpensesByCategory(expenses, 'Їжа');
// console.log(`Витрати на їжу: ${calculateTotalExpenses(foodExpenses)}`);
const category = uniqCategory(expenses);

renderOptions(category, refs.select);

function onSelectChange(e) {
  const category = getExpensesByCategory(expenses, e.target.value);
  const total = calculateTotalExpenses(category);
  refs.result.textContent = total;
}

refs.result.textContent = calculateTotalExpenses(
    getExpensesByCategory(expenses,
  refs.select.value
));
