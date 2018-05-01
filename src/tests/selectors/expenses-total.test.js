import selectExpensesTotal from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';

test('should return 0 if no expenses', () => {
    const res = selectExpensesTotal([]);
    expect(res).toBe(0);
});

test('should correctly add up a single expense', () => {
    const expense = expenses.filter(expense => expense.id === '1');
    expect(selectExpensesTotal(expense)).toBe(expense[0].amount);
});

test('should correctly add multiple expenses', () => {
    const sum = expenses.map(expense => expense.amount).reduce((acc, value) => acc + value, 0);
    expect(selectExpensesTotal(expenses)).toBe(sum);
});
