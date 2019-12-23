const instructorWithLongestName = function(instructors) {
  // Put your solution here\
  let bigName = instructors[0].name.length;
  for(let x = 0; x < instructors.length; x++){
    if(instructors[x].name.length > bigName){
      bigName = instructors[x];
    }
  }
  return bigName;
};

console.log(instructorWithLongestName([
  {name: "Samuel", course: "iOS"},
  {name: "Jeremiah", course: "Web"},
  {name: "Ophilia", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(instructorWithLongestName([
  {name: "Matthew", course: "Web"},
  {name: "David", course: "iOS"},
  {name: "Domascus", course: "Web"}
]));
