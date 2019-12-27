let repeatNumbers = function(data) {
  // Put your solution here
  let repeatStuff = [];
  for(let x = 0; x < data.length; x++){
  repeatStuff.push("");
    for(let y = 0; y < data[x][1]; y++){
      repeatStuff[repeatStuff.length-1] += data[x][0].toString();
    }
  }
  return repeatStuff.join(", ");
}

console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));

