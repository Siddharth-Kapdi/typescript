// 10. Modules

// types.ts exports an interface Todo { id: number; title: string; done: boolean } and type Filter = "all" | "done" | "pending".
//! Done

// todoService.ts has named-export functions addTodo, toggleTodo, and filterTodos, all typed with Todo and Filter.
//! Done

// index.ts (barrel) re-exports everything, using export type for the types.
//! Done

// main.ts imports from the barrel using import type where appropriate and logs results.
//! Done
