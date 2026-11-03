// 2. Inference

// Declare 5 variables with no annotation and hover to see the types. Why is const a = "x" different from let a = "x"?

// const a = 'x'
let a = 'x'

const num = 10
const str = 'str'
const boolean = true
const bigInt = 20985208397402934723047230957n
const nullOrUndefined = null

// Write a function with no return annotation and two branches returning different types. What does TS infer?

const demoFunc = (isPara: boolean) => {
  if (isPara) {
    return true
  } else {
    return 'no para given!'
  }
}
//? Remember: When different branches return different types, TypeScript generally infers a union of those types.

// const arr = [] then push a number. What is the type, and how do you fix it?

// const arr = [] // ❌
const arr: number[] = [] //✅
arr.push(22)

//? Key takeaway: Annotate empty arrays when TypeScript cannot reliably infer the element type.?

// const user = {}; user.name = "A" errors. Fix it in two different ways.

type User = {
  name?: string
}

interface User2 {
  name?: string
}

const user: User2 = {}
user.name = 'A'

// List where annotations are required (params, empty arrays, etc.) and prove each with code.

// 1.function parameters
const demoFun = (a: number, b: string) => {}

// 2. empty array or objects
// const arr: string[] = []
const obj: User = {}

// 3. variable with no value yet
// let a: string

// 4. data from outside(api, json)
// const dataFetcher = async (a: string): Promise<Data> => {}

// 5. inferred type is too wide
let dir: 'Up' | 'down' = 'Up'

// 6. your own shape and unions
// interface User {
//   name: string
//   age: number
//   DOB: string
// }
