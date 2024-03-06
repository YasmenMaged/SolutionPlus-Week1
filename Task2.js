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
