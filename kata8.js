const multiplicationTable = function(maxValue) {
  // Your code here
  let numArray = [];
  for(let x = 1; x <= maxValue; x++){
    for(let y = 1; y <= maxValue; y++){
      numArray += (x*y) + " ";
    }
  numArray += "\n";
  }
  return numArray;
};

console.log(multiplicationTable(1));
console.log(multiplicationTable(5));
console.log(multiplicationTable(10));
