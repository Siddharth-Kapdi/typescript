// todoService.ts has named-export functions addTodo, toggleTodo, and filterTodos, all typed with Todo and Filter.

import type { Todo, Filter } from './types.ts'

export type User = {
  name: string
  age: number
}

export const addTodo = (todo: Todo) => {
  // code
  console.log('this is addTodo function')
}

export const toggleTodo = (todo: Todo, id: number) => {
  // code
  console.log('this is toggleTodo function')
}

export const filterTodos = (todos: Todo[], category: Filter) => {
  // code
  console.log('this is filterTodos function')
}
