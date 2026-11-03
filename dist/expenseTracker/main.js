import { add, remove, update } from './expense.js';
import { loadExpenses, saveExpenses } from './storage.js';
const loaded = loadExpenses();
if (!loaded.ok) {
    console.log(loaded.error);
    process.exit(1);
}
export const expenses = loaded.data;
const added = add(expenses, 'Lunch', 250, 'Meals', 'Birthday party');
if (!added.ok) {
    console.log(added.error);
    process.exit(1);
}
const added2 = add(added.data, 'Petrol', 500, 'Travel');
if (!added2.ok) {
    console.log(added2.error);
    process.exit(1);
}
const added3 = add(added2.data, 'Movie', 300, 'Entertainment');
if (!added3.ok) {
    console.log(added3.error);
    process.exit(1);
}
const added4 = add(added3.data, 'Movie', 300, 'Entertainment');
if (!added4.ok) {
    console.log(added4.error);
    process.exit(1);
}
const target = added4.data[0];
if (!target) {
    console.log('no expenses');
    process.exit(1);
}
const target1 = added4.data[1];
if (!target1) {
    console.log('no expenses');
    process.exit(1);
}
const updated = update(added4.data, target.id, { title: 'Brunch' });
if (!updated.ok) {
    console.log(updated.error);
    process.exit(1);
}
const removed = remove(updated.data, target1.id);
if (!removed.ok) {
    console.log(removed.error);
    process.exit(1);
}
const saved = saveExpenses(removed.data);
if (!saved.ok) {
    console.log(saved.error);
    process.exit(1);
}
