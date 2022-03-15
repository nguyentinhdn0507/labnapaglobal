//solution 1
const student = {
  name: "nguyen van a ",
  age: 18,
  mark: {
    math: 9,
    english: 10,
  },
};
const cloneSolution1 = {
  ...student,
};
console.log(cloneSolution1);
// solution 2
const cloneSolution2 = Object.assign({}, student);
console.log(cloneSolution2);
// solution 3
const cloneSolution3 = JSON.parse(JSON.stringify(student));
console.log(cloneSolution3);
//solution 4
const cloneSolution4 = function cloneObject(obj) {
  var newObj = new obj.constructor();
  console.log(newObj)
  for (var prop in obj) {
      newObj[prop] = obj[prop];
      console.log(newObj[prop]);
  }
  return newObj;
};
console.log(cloneSolution4(student));
//  shallow clone object 