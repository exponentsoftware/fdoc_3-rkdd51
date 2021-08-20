// A junior developer structure student name, skills and score in array of arrays which may not easy to read. Destruction the following array name to name, skills array to skills, scores array to scores, JavaScript score to jsScore and React score to reactScore variable.
// ```js
const student = ["David", ["HTM", "CSS", "JS", "React"], [98, 85, 90, 95]];

const names = student[0];
const skills = student[1];
const scores = student[2];
const jsScore = student[2][3];
const reactScore = student[2][3];

console.log(names, skills, scores);
console.log(jsScore, reactScore);

///////////////////Write a function called convertArrayToObject which can convert the array to a structured object.////

const students = [
  ["David", ["HTM", "CSS", "JS", "React"], [98, 85, 90, 95]],
  ["John", ["HTM", "CSS", "JS", "React"], [85, 80, 85, 80]],
];

console.log(convertArrayToObject(students));

function convertArrayToObject() {
  const allDetails = students.map((item, index) => {
    const newObj = {
      name: item[0],
      skills: item[1],
      scores: item[2],
    };
    return newObj;
  });
  console.log(allDetails);
}



