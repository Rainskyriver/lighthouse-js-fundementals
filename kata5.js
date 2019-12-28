 const urlEncode = function(text) {
  // Put your solution here
  let blankSpace = "%";
  let newUrl = text
  let tempStr;
  if(newUrl.indexOf(" ") === 0){
    newUrl = newUrl.substring(1);
  }
  if(newUrl[newUrl.length -1] === " "){
    newUrl = newUrl.substring(0, newUrl.length - 1);
  }
  for(let x = 0; x < newUrl.length; x++){
    if(newUrl[x] === " "){
      newUrl = newUrl.substring(0, x) + "%" + newUrl.substring(x + 1);
    }
  }
  return newUrl;
};

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));
