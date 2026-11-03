//! 1. Basic types
const students = [
    ['Sid', 21],
    ['Rahul', 25],
    ['Amit', 30],
];
const highestScorer = (stds) => {
    if (students.length === 0) {
        return '';
    }
    let higScore = stds[0];
    for (const std of stds) {
        if (std[1] > higScore[1]) {
            higScore = std;
        }
    }
    return higScore[0];
};
console.log(highestScorer(students));
export {};
