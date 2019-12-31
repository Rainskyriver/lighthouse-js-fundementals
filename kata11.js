const organizeInstructors = function(instructors) {
  // Put your solution here
  let out = {};
  for(let x = 0; x < instructors.length; x++){
    let instructor = instructors[x]
    if(!(instructor.course in out)){
      out[instructor.course] = [];
    }
    out[instructor.course].push(instructor.name);
  }
  return out;
};

console.log(organizeInstructors([
  {name: "Samuel", course: "iOS"},
  {name: "Victoria", course: "Web"},
  {name: "Karim", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(organizeInstructors([
  {name: "Brendan", course: "Blockchain"},
  {name: "David", course: "Web"},
  {name: "Martha", course: "iOS"},
  {name: "Carlos", course: "Web"}
]));
