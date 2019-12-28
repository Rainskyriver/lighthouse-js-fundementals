let talkingCalendar = function(date) {
  // Your code here
  let dateNum = date.split("/");
  let months = [ "January ", "February ", "March ", "April ", "May ", "June ", "July ", "August ", "September ", "October ", "November ", "December " ];
  let days = "";
  //comparing dates to give them the correct suffix.
  let cmpOne = dateNum[2] % 10;
  let cmpTwo = dateNum[2] % 100;
  if(cmpOne === 1 && cmpTwo != 11){
    days = dateNum[2] + "st";
  }else if(cmpOne === 2 && cmpTwo != 12){
    days = dateNum[2] + "nd";
  }else if(cmpOne === 3 && cmpTwo != 13){
    days = dateNum[2] + "rd";
  }else {
    days = dateNum[2] + "th";
  }
  if(days.charAt(0) === "0"){
    days = days.substring(1);
  }
  return months[dateNum[1] - 1] + days + " " + dateNum[0];
};

console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));
