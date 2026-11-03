// 3. Objects, interface vs type
export {};
// Write a Country interface: name, population, region, optional capital, readonly code.
// interface Country {
//   name: string
//   population: number
//   region: string
//   capital?: string
//   readonly code: number
// }
// const country: Country = {
//   name: 'india',
//   population: 1000000,
//   region: 'asia',
//   code: 91,
// }
// Try to reassign the readonly field and read the error.
// country.code = 99 // -> Cannot assign to 'code' because it is a read-only property.
// Create Admin extends User using interface, then do the same with type and &.
// interface User {
//   name: string
//   age: number
// }
// interface Admin extends User {
//   role: string
// }
// Write a function that takes Country[] and returns the names of countries without a capital.
// interface Country {
//   name: string
//   capital: string
// }
// const countries: Country[] = [
//   { name: 'India', capital: 'New Delhi' },
//   { name: 'Nauru', capital: '' },
//   { name: 'Japan', capital: 'Tokyo' },
//   { name: 'Country X', capital: '' },
// ]
// const getCountry = (countries: Country[]) => {
//   return countries.filter((curElem) => curElem.capital === '')
// }
// console.log(getCountry(countries))
// Pass an object literal with an extra property directly to a function, then pass the same object via a variable. Explain the difference.
// interface User {
//   name: string
//   age: number
// }
// const user: User = {
//   name: 'sid',
//   age: 21,
// }
// const user2 = {
//   name: 'sid',
//   age: 21,
//   city: 'mumbai',
// }
// const demoFun = (obj: User) => {
//   return `hello`
// }
// demoFun(user)
// demoFun(user2)
// demoFun({
//   name: 'sid',
//   age: 21,
//   city: 'mumbai',
// })
//? Remember
//? - Direct object literal → Excess property checking.
//? - Object stored in a variable → Structural typing; extra properties are allowed if the required properties exist.
