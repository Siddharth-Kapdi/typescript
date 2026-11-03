// 4. Functions
export {};
// Write a typed add, a greet(name, greeting?), and a function with a default parameter.
// const add = (n1: number, n2: number): number => {
//   return n1 + n2
// }
// const greet = (name: string, greeting?: string): string => {
//   return `${greeting ?? 'Hello!'} ${name}`
// }
// const greet2 = (name: string, greeting: string = 'Hello!'): string => {
//   return `${greeting} ${name}`
// }
// console.log(add(2, 4))
// console.log(greet('sid', "what's up!"))
// console.log(greet('sid'))
// console.log(greet2('sid', 'How are you?'))
// console.log(greet2('sid'))
// Write applyTwice(fn: (n: number) => number, x: number).
// const applyTwice = (fn: (n: number) => number, x: number): number => {
//   return fn(fn(x))
// }
// Write one function returning void and one returning never (it throws).
// const logMsg = (): void => {
//   console.log('hello')
// }
// const returnNever = (): never => {
//   throw new Error('hello')
// }
// Write a function that accepts string | number and always returns a string.
// const demoFun = (v: string | number): string => {
//   return String(v)
// }
// Define type Comparator = (a: number, b: number) => number and use it to write your own sort wrapper.
// type Comparator = (a: number, b: number) => number
// const sortFun: Comparator = (a, b) => {
//   return a - b
// }
//? The key takeaway from this problem is you can use a function as a type and pass another function as an argument.
