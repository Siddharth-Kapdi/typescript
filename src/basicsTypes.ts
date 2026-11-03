//! 1. Basic types

//? Declare one variable of each primitive type, plus a number[] and a string[]. Assign a wrong type on purpose and read the error.

// const str: string = 'sid'
// const num: number = 1
// const isTrue: boolean = true
// const bitInt: bigint = 24023502937423094230497234092834n
// const symbol: symbol = Symbol('hey')
// let yetNotDefined: undefined
// const valueIsNull: null = null
// const arrOfNumbers: number[] = [1, 2, 3, 4, 5]
// const arrOfString: string[] = ['a', 'b', 'c', 'd', 'e']

//? Write a function that returns a [string, number] tuple (name, age) and destructure it.

// type Detail = readonly [string, number]

// const demoFun = (): Detail => {
//   return ['sid', 21]
// }
// const [name, age] = demoFun()

// console.log(demoFun())
// console.log(name)
// console.log(age)

//? Write parseInput(input: unknown) that returns a number if given a number or a numeric string, otherwise null.

// const parseInput = (input: unknown): number | null => {
//   if (typeof input === 'number' && !isNaN(Number(input))) {
//     return input
//   } else if (typeof input === 'string' && input.trim()) {
//     if (!isNaN(Number(input))) {
//       return Number(input)
//     }
//   }

//   return null
// }

// console.log(parseInput('hell'))
// console.log(parseInput('44'))
// console.log(parseInput(44))

//? let x: any = "a"; x.toFixed() compiles but crashes. Rewrite it with unknown so the compiler stops you.

// let x: unknown = 'a'
// x.toFixed()

//? Make a [string, number][] of name-score pairs and write a function that returns the name with the highest score.
type Std = [string, number][]
const students: Std = [
  ['Sid', 21],
  ['Rahul', 25],
  ['Amit', 30],
]

const highestScorer = (stds: Std): string => {
  if (students.length === 0) {
    return ''
  }
  let higScore = stds[0]!
  for (const std of stds) {
    if (std[1] > higScore[1]) {
      higScore = std
    }
  }
  return higScore[0]
}

console.log(highestScorer(students))
