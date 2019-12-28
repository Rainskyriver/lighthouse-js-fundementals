let numberOfVowels = function(data) {
  // Put your solution here
  let vowelNum = 0;
  let vowelList = "aeiou";
  for(let x = 0; x < data.length; x++){
    if(vowelList.indexOf(data[x]) != -1){
      vowelNum++;
    }
  }
  return vowelNum;
};

console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));
