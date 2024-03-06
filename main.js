/////Task 1/////
let first = [1,2,3];
let second = [3,4,5];
let third = [5,6,7];

let mergedArray = [...first,...second,...third];
let finalResult = [...new Set(mergedArray)];

console.log(finalResult);

/////Task 2/////
//solution1
function calculateAvg(...nums){
  let totalSum = 0;
  
  if(nums.length === 0)
    return 0;

  for(const num of nums){
    totalSum+=num;
  }

  return totalSum / nums.length
}
console.log(calculateAvg(1, 2, 3));
console.log(calculateAvg());

//solution2
function calculateAverage(...nums){
  
  if(nums.length === 0)
  return 0;

  let totalSum = nums.reduce((acc, num) => acc + num, 0);
  return totalSum / nums.length;
}
console.log(calculateAverage(1, 2, 3));
console.log(calculateAverage());

/////Task 3/////
function factorial(number){
  if(number === 0 || number === 1)
    return 1;
  else
    return number * factorial(number - 1);
}
console.log(factorial(4));


/////Task 4/////
//////////Array/////////////
let originalNestedArray = [[5,6], [10,11]];
//#DEEP COPY
let copiedNestedArray = JSON.parse(JSON.stringify(originalNestedArray));
copiedNestedArray[1] = [20,30]; // change first level 
copiedNestedArray[0][1] = 7; //change second(nested) level
console.log("original array: ", originalNestedArray);
console.log("deep copied array: ", copiedNestedArray);

//#SALLOW COPY
let shallowCopyNested = originalNestedArray.map(inner => [...inner]);
shallowCopyNested[0] = [60,70]; // change first level 
shallowCopyNested[1][0] = 3; //change second(nested) level
console.log("original array: ", originalNestedArray);
console.log("shallow copied array: ", shallowCopyNested);

////////object/////////////
let originalObject = {
  inner:{
    a:2,
    b:6
  }
}

//#DEEP COPY
let copiedNestedObject = JSON.parse(JSON.stringify(originalObject));
copiedNestedObject.inner = {c: 10}; // change first level 
copiedNestedObject.inner.a = 12 ; //change second(nested) level
console.log("original object: ", originalObject);
console.log("deep copied object: ", copiedNestedObject);

//#SALLOW COPY
let shallowCopiedObject = Object.assign({}, originalObject);
shallowCopiedObject.inner = { c: 3 }; // Change at first level
shallowCopiedObject.inner.a = 5; // Change at second(nested) level

console.log("original object:", originalObject); 
console.log("shallow copied object:", shallowCopiedObject);   