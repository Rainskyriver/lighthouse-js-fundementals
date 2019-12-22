const conditionalSum = function(values, condition) {
  // Your code here
  let sum = 0;
  if(condition === "even"){
    for(let x = 0; x < values.length; x++){
      if(values[x] % 2 === 0){
      sum += values[x];
      }
    }
  }
  if(condition === "odd"){
    for(let x = 0; x < values.length; x++){
      if(values[x] % 2 != 0){
      sum += values[x];
      }
    }
  }
  return sum;
};

console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));
