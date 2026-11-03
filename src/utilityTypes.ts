// 9. Utility types

// Use Partial<Country> in an updateCountry function.

// type Country = {
//   name: string
//   capital: string
//   population: number
// }

// const updateCountry = (country: Country, updateInfo: Partial<Country>) => {
//   return { ...country, ...updateInfo }
// }

// const india: Country = {
//   name: 'India',
//   capital: 'Mumbai',
//   population: 100,
// }

// const updated = updateCountry(india, {
//   capital: 'New Delhi',
// })

// console.log(updated)

// Create a type with Pick and another with Omit from the same interface.

// interface User {
//   id: string
//   name: string
//   email: string
//   role: 'admin' | 'user'
//   createdAt: Date
// }

// type UserContactInfo = Pick<User, 'id' | 'name'>
// type UserContactInfo = {
//   name: string
//   id: string
// }

// type UserEmpInfo = Omit<User, 'id' | 'createdAt'>
// type UserEmpInfo = {
//  name: string;
//  email: string;
//  role: "admin" | "user";
// }

// Build a Record<Region, number> of population totals.

// type Region = 'asia' | 'africa' | 'europe'

// const regionPopulation: Record<Region, number> = {
//   asia: 348329134534,
//   africa: 57295723948,
//   europe: 4298523459032,
// }

// Use ReturnType<typeof yourFunction>.

// const greeting = () => {
//   return 'hey there!!'
// }

// type returnTypeOfGreet = ReturnType<typeof greeting>

// Combine them: Readonly<Partial<Country>>.

// const updateCountry2 = (country: Country, updateInfo: Readonly<Partial<Country>>) => {
//   return { ...country, ...updateInfo }
// }

// const updated2 = updateCountry2(india, {
//   capital: 'New Delhi',
// })

// console.log(updated2)
