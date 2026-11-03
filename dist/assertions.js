// 7. Assertions and as const
export {};
//1. Assert document.getElementById("a") as HTMLInputElement and read .value.
// const inputFiled = document.getElementById('a') as HTMLInputElement
// console.log(inputFiled.value)
//? Important: Type assertion does not perform runtime checking.
//? If element 'a' doesn't exist, your code can still compile, but accessing .value will cause a runtime error.
//2. Write a case where as lies and the code crashes at runtime.
// const input = null as unknown as HTMLInputElement
// console.log(input.value)
//! What happens?
//! 1. as unknown as HTMLInputElement tells TypeScript to treat null as an input element.
//! 2. TypeScript allows you to access .value.
//! 3. At runtime, input is still null.
//! 4. Accessing input.value crashes with a TypeError.
//? Your takeaway: as changes TypeScript's understanding of a value, not the actual value at runtime.
//3. Make const regions = ["Asia", "Europe"] as const and derive a union type from it.
//const regions = ['Asia', 'Europe'] as const
//type Regions = (typeof regions)[number] // type Regions = "Asia" | "Europe"
//4. Create an as const object and try to mutate it.
// const user = {
//   name: 'Sid',
//   age: 21,
// } as const
// user.name = 'danial'
//? as const makes the object's properties readonly and preserves their literal types.
//5. Replace a ! (non-null assertion) with a proper check.
// const str: string | null = 'str'
// if (str !== null) {
//   str.toUpperCase()
// }
//? Key takeaway: Use string | null when a variable might contain either a string or null. Then narrow it using a null check before accessing string methods.
//! Non-Null Assertion Operator (value!)
// When you suffix a variable or property with !, you are explicitly telling the TypeScript compiler: "Trust me, I know this value looks like it could be null or undefined, but I guarantee it is not."
// • Why use it: TypeScript often flags variables as potentially null if they are fetched from APIs or the DOM. This operator overrides that warning without requiring you to write an if statement.
// • ⚠️ Danger: This only silences the compiler at compile-time. It does not change the runtime code. If the value actually turns out to be null at runtime your app will crash with an error.
