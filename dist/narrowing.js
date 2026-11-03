// 6. Narrowing
// Narrow string | number with typeof.
// let val: string | number = 55
// if (typeof val === 'string') {
//   val.toUpperCase()
// }
// if (typeof val === 'number') {
//   val.toFixed(2)
// }
const narrowDown = (val) => {
    if (typeof val === 'string') {
        val.toUpperCase();
    }
    else {
        val.toFixed(2);
    }
};
// Write getLength(s: string | null) using a null check.
const getLength = (s) => {
    if (s == null) {
        return 0;
    }
    return s.length;
};
const move = (val) => {
    if ('bark' in val) {
        return val.bark();
    }
    else {
        val.meow();
    }
};
const render = (state) => {
    switch (state.kind) {
        case 'loading':
            return 'loading...';
        case 'success':
            return state.data;
        case 'error':
            return state.message;
        default:
            const exhaustiveCheck = state;
            return exhaustiveCheck;
    }
};
// Write a custom type guard isString(x: unknown): x is string.
const isString = (x) => {
    if (typeof x === 'string') {
        return true;
    }
    return false;
};
export {};
