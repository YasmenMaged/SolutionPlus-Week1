/////Task 1/////
let first = [1,2,3];
let second = [3,4,5];
let third = [5,6,7];

let mergedArray = [...first,...second,...third];
let finalResult = [...new Set(mergedArray)];

console.log(finalResult);