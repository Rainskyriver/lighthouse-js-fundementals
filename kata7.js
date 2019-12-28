let camelCase = function(input) {
  // Your code here
  let words = input.split(" ");
  let out = words[0];
  for(let x = 1; x < words.length; x++){
    out += words[x].charAt(0).toUpperCase() + words[x].slice(1);
  }
  return out;
};

console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));
console.log(camelCase(""));
