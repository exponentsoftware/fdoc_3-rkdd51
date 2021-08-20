var n = 23;
var n = n.toString().split("");

// const newF = () => {
//   arr = [];
//   for (i = 0; i < n.length; i++) {
//     arr.push(Number(n[i]));
//   }
//   console.log("x", arr);
// };
// newF();

var newN = n.map((i) => Number(i));
console.log(newN.reduce((a, b) => a + b));
