export type { Todo, Filter } from './types.js' // pick specific types

export type * from './types.js' // everything in the file, all types

export { addTodo, type User } from './todoService.js' // mixed
