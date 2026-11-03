// 6. Narrowing

// Narrow string | number with typeof.

// let val: string | number = 55

// if (typeof val === 'string') {
//   val.toUpperCase()
// }

// if (typeof val === 'number') {
//   val.toFixed(2)
// }

const narrowDown = (val: string | number) => {
  if (typeof val === 'string') {
    val.toUpperCase()
  } else {
    val.toFixed(2)
  }
}

// Write getLength(s: string | null) using a null check.

const getLength = (s: string | null): number => {
  if (s == null) {
    return 0
  }

  return s.length
}

// Use the in operator to tell Cat from Dog.

type Cat = { meow(): void }
type Dog = { bark(): void }

const move = (val: Cat | Dog) => {
  if ('bark' in val) {
    return val.bark()
  } else {
    val.meow()
  }
}

// Define Loading | Success<T> | Failure as a discriminated union, write render(state), and add an exhaustive never check.

type State =
  | { kind: 'loading' }
  | { kind: 'success'; data: string }
  | { kind: 'error'; message: string }

const render = (state: State): string => {
  switch (state.kind) {
    case 'loading':
      return 'loading...'
    case 'success':
      return state.data
    case 'error':
      return state.message
    default:
      const exhaustiveCheck: never = state
      return exhaustiveCheck
  }
}

// Write a custom type guard isString(x: unknown): x is string.

const isString = (x: unknown): x is string => {
  if (typeof x === 'string') {
    return true
  }
  return false
}
