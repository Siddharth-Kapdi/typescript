// add expenses
export const add = (expenses, title, amount, category, note) => {
    if (!amount || amount <= 0) {
        return { ok: false, error: 'Enter valid expense amount' };
    }
    if (!title || title.trim() === '') {
        return { ok: false, error: 'Enter valid title value' };
    }
    const newExpense = {
        id: crypto.randomUUID(),
        title,
        amount,
        category,
        date: Date.now(),
        note: note ?? '-',
    };
    return { ok: true, data: [...expenses, newExpense] };
};
// remove expenses
export const remove = (expenses, id) => {
    const ids = expenses.map((curElem) => curElem.id);
    if (!ids.includes(id)) {
        return { ok: false, error: 'id is missing!' };
    }
    const newExpenses = expenses.filter((curElem) => curElem.id !== id);
    return { ok: true, data: newExpenses };
};
// update expenses
export const update = (expenses, id, updatedProperty) => {
    const expenseToUpdate = expenses.find((curElem) => curElem.id === id);
    if (!expenseToUpdate) {
        return { ok: false, error: 'expense not found!' };
    }
    const newExpenses = expenses.map((curElem) => curElem.id === id
        ? {
            ...curElem,
            ...updatedProperty,
        }
        : curElem);
    return { ok: true, data: newExpenses };
};
// sort expenses in ascending and descending order
export const sortBy = (expenses, key, order = 'asc') => {
    let result = 0;
    const expenseSort = [...expenses].sort((a, b) => {
        if (typeof a[key] === 'number' && typeof b[key] === 'number') {
            result = a[key] - b[key];
        }
        if (typeof a[key] === 'string' && typeof b[key] === 'string') {
            result = a[key].localeCompare(b[key]);
        }
        return order === 'asc' ? result : -result;
    });
    return { ok: true, data: expenseSort };
};
// make total for each category
export const totalByCategory = (expenses) => {
    const totals = {
        Travel: 0,
        Meals: 0,
        'Office Supplies': 0,
        'Software & SaaS': 0,
        Entertainment: 0,
    };
    for (const expense of expenses) {
        totals[expense.category] += expense.amount;
    }
    return totals;
};
// make grand total
export const grandTotal = (expenses) => {
    return expenses.reduce((acc, curElem) => acc + curElem.amount, 0);
};
