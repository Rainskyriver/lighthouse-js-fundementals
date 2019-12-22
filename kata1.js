let sumLargestNumbers = function(data) {
  // Put your solution here
  let bigA = data[0];
  let bigB = data[0];
  for(let x = 0; x < data.length; x++){
    if(data[x] > bigA){
      bigB = bigA;
      bigA = data[x];
    }else if(data[x] > bigB && data[x] != bigA){
      bigB = data[x];
    }
  }
  return bigA + bigB;
};

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));
