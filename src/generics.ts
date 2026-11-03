// 8. Generics

//1. last<T>(arr: T[]), called with number[] and with an array of objects.

// const last = <T>(arr: T[]): T | undefined => {
//   return arr[arr.length - 1]
// }

// console.log(last([1, 2, 3, 4, 5]))
// console.log(
//   last([
//     { id: 1, name: 'mohit' },
//     { id: 2, name: 'rohil' },
//     { id: 3, name: 'sohil' },
//   ])
// )

//2. sortBy<T, K extends keyof T>(arr: T[], key: K).

// const sortBy = <T, K extends keyof T>(arr: T[], key: K) => {
//   return [...arr].sort((a, b) => {
//     if (typeof a[key] === 'number' && typeof b[key] === 'number') {
//       return a[key] - b[key]
//     }

//     if (typeof a[key] === 'string' && typeof b[key] === 'string') {
//       return a[key].localeCompare(b[key])
//     }
//     return 0
//   })
// }

// const students = [
//   { name: 'Sid', age: 21 },
//   { name: 'Max', age: 18 },
//   { name: 'Raj', age: 23 },
// ]

// console.log(sortBy(students, 'age'))
// console.log(sortBy(students, 'name'))

//3. interface ApiResponse<T>, then make one with Country[] and one with string.

// interface ApiResponse<T> {
//   status: 'success' | 'error'
//   data: T
// }

// type Country = string
// const countryList: ApiResponse<Country[]> = {
//   status: 'success',
//   data: ['india', 'japan', 'china'],
// }

// const strData: ApiResponse<string> = {
//   status: 'success',
//   data: 'hello',
// }

//4. findById<T extends { id: number }>(items: T[], id: number).

// const findById = <T extends { id: number }>(items: T[], id: number): T | undefined => {
//   return items.find((curElem) => curElem.id === id)
// }

// type Students = {
//   id: number
//   name: string
// }

// const students: Students[] = [
//   { id: 1, name: 'sid' },
//   { id: 2, name: 'max' },
//   { id: 3, name: 'raj' },
// ]
// console.log(findById(students, 3))

//5. swap<A, B>(pair: [A, B]): [B, A].

// const swap = <A, B>(pair: [A, B]): [B, A] => {
//   return [pair[1], pair[0]]
// }
