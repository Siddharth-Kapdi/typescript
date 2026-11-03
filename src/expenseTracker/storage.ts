import { writeFileSync, readFileSync, existsSync } from 'node:fs'
import { type Expense, type Result, type Category, categories } from './types.js'

const isCategory = (x: unknown): x is Category => categories.some((c) => c === x)

const isExpense = (x: unknown): x is Expense => {
  if (typeof x !== 'object' || x === null) return false

  return (
    'id' in x &&
    typeof x.id === 'string' &&
    'title' in x &&
    typeof x.title === 'string' &&
    'amount' in x &&
    typeof x.amount === 'number' &&
    'date' in x &&
    typeof x.date === 'number' &&
    'category' in x &&
    isCategory(x.category) &&
    (!('note' in x) || typeof x.note === 'string')
  )
}

export const saveExpenses = (expenses: Expense[]): Result<void> => {
  try {
    const storeExpenses = JSON.stringify(expenses, null, 2)
    writeFileSync('data.json', storeExpenses)
    return { ok: true, data: undefined }
  } catch (err) {
    const errorMessage = 'An unknown error occurred'
    if (err instanceof Error) {
      return { ok: false, error: err.message }
    }
    return { ok: false, error: errorMessage }
  }
}

export const loadExpenses = (): Result<Expense[]> => {
  try {
    if (!existsSync('data.json')) {
      return { ok: true, data: [] }
    }
    const retrieveExpenses = readFileSync('data.json', 'utf-8')
    const parsed: unknown = JSON.parse(retrieveExpenses)
    if (!Array.isArray(parsed)) {
      return { ok: false, error: 'data.json does not contain a list of expenses' }
    }
    if (!parsed.every(isExpense)) {
      return { ok: false, error: 'data.json contains an invalid expense' }
    }
    return { ok: true, data: parsed }
  } catch (err) {
    const errorMessage = 'An unknown error occurred'
    if (err instanceof Error) {
      return { ok: false, error: err.message }
    }
    return { ok: false, error: errorMessage }
  }
}
