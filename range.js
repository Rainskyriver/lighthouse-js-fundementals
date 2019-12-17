function range(start, end, step){
  let array = [];
  if(start > end || step <= 0){
    return array;
  }
  for(let x = start; x <= end; x += step){
  array.push(x);
  }
  return array;
}
console.log(range(0,10,2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3))
console.log(range(5, 2, 10));
