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