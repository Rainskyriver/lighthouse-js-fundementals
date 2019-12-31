let calculateChange = function(total, cash) {
  // Your code here
  let change = {};
  let changeNum = cash - total;
  let calcChange = function(demValue, demNam){
    if(changeNum >= demValue){
      change[demNam] = 0;
      while(changeNum >= demValue){
        changeNum -= demValue;
        change[demNam] += 1;
      }
    }
  }
  calcChange(2000, "twentyDollar");
  calcChange(1000, "tenDollar");
  calcChange(500, "fiveDollar");
  calcChange(200, "twoDollar");
  calcChange(100, "oneDollar");
  calcChange(25, "quarter");
  calcChange(10, "dime");
  calcChange(5, "nickle");
  calcChange(1, "penny");
  return change;
};

console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));
