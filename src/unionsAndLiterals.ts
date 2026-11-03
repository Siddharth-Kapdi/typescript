// 5. Unions and literals

// type Order = "asc" | "desc" and a function that sorts numbers by it.
// type Order = 'asc' | 'desc'

// const sortNumber = (numbers: number[], order: Order): number[] => {
//   if (order === 'asc') {
//     return numbers.sort((a, b) => a - b)
//   }
//   return numbers.sort((a, b) => b - a)
// }

// console.log(sortNumber([1, 3, 2, 4], 'asc'))
// console.log(sortNumber([1, 3, 2, 4], 'desc'))

// Write a function that accepts string | string[] and always returns string[].

// const alwaysStrArr = (value: string | string[]): string[] => {
//   if (typeof value === 'string') {
//     return [value]
//   }
//   return value
// }

// console.log(alwaysStrArr('hello'))
// console.log(alwaysStrArr(['hello', 'how are you', "what's up"]))

// Define a Region literal union and try passing "Mars".

// type Region = 'asia' | 'europe' | 'africa'

// const region: Region = 'mars'

//? String literal unions restrict a variable to a specific set of allowed values.

// Write formatId(id: number | string) that returns a padded string.

// const formatId = (id: number | string): string => {
//   if (typeof id === 'number') {
//     return id.toString().padStart(5, '0')
//   }
//   return id.padStart(5, '0')
// }

// console.log(formatId('56'))
// console.log(formatId(44))

// Make a DiceRoll type (1-6) and a function that returns one.

// type DiceRoll = 1 | 2 | 3 | 4 | 5 | 6

// const dice = (): DiceRoll => {
//   return (Math.floor(Math.random() * 6) + 1) as DiceRoll
// }

// console.log(dice())

// ? TypeScript doesn't automatically convert a general number into a number literal union.
