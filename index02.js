////////////////// Copy the student object to newStudent without mutating the original object. In the new object add the following ?

// 	1. Add Bootstrap with level 8 to the front end skill sets
// 	2. Add Express with level 9 to the back end skill sets
// 	3. Add SQL with level 8 to the data base skill sets
// 	4. Add SQL without level to the data science skill sets
const student = {
  name: "David",
  age: 25,
  skills: {
    frontEnd: [
      { skill: "HTML", level: 10 },
      { skill: "CSS", level: 8 },
      { skill: "JS", level: 8 },
      { skill: "React", level: 9 },
    ],
    backEnd: [
      { skill: "Node", level: 7 },
      { skill: "GraphQL", level: 8 },
    ],
    dataBase: [{ skill: "MongoDB", level: 7.5 }],
    dataScience: ["Python", "R", "D3.js"],
  },
};

/////////////////////copying the object/////////////////
const newStudent = { ...student };
// console.log(newStudent);

// 	Use the student object to solve the following questions:
//    a. Find the length of student object keys
//    b. Find the length of the student object values
//    c. Find the length of skills object keys
//    d. check if the student object has graphicDesign property
//    e. Iterate the keys of the student object

////////1(a)
const objectArrays = Object.keys(newStudent);
const length = objectArrays.length;
console.log("length", length);

////////1(b)
const objectValuesArray = Object.values(newStudent);
console.log(objectValuesArray.length);

////////1(c)
const skillkey = newStudent.skills;
console.log(Object.keys(skillkey).length);

////////1(d)
const checkGraphicDesignProp = (student, checkkey) => {
  check = Object.keys(student).filter((item) => item == checkkey);
  if (check.length == 0) {
    console.log(false);
  } else console.log(true);
};
checkGraphicDesignProp(newStudent, "graphicDesign");

///////////1(e)
const iterateItem = Object.keys(newStudent).map((item) => console.log(item));
console.log(iterateItem);
