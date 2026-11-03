export interface Expense {
  readonly id: string
  title: string
  amount: number
  category: Category
  date: number
  note?: string
}

export const categories = [
  'Travel',
  'Meals',
  'Office Supplies',
  'Software & SaaS',
  'Entertainment',
] as const

export type Category = (typeof categories)[number]

export type SortOrder = 'asc' | 'desc'

export type Result<T> = { ok: true; data: T } | { ok: false; error: string }
