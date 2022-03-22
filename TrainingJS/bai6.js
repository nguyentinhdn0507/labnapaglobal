const student = {
  name: "nguyen van a ",
  age: 18,
  mark: {
    math: 9,
    english: 10,
  },
};
//solution 1
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
  // console.log(newObj);
  for (var prop in obj) {
    newObj[prop] = obj[prop];
    console.log(newObj[prop]);
  }
  return newObj;
};
console.log(cloneSolution4(student));

//  shallow clone object : 

// nghĩa là nó chỉ sao chép các giá trị đối tượng bình thường 
// nhưng các giá trị lồng nhau vẫn sử dụng reference đến một đối tượng ban đầu.
student.mark.math = 4
const shallowClone = {...student};

// nhưng object mà chúng ta clone ra cũng bị thay đổi theo
// console.log(shallowClone);
//{ name: 'nguyen van a ', age: 18, mark: { math: 4, english: 10 } } 

// DeepClone  deep copy đơn giản là cũng giống như 
// clone shallow nhưng các giá trị reference trong object gốc không thay trong object clone.


const deepClone = JSON.parse(JSON.stringify(student))
console.log(deepClone) //{ name: 'nguyen van a ', age: 18, mark: { math: 9, english: 10 } }

student.mark.math = 8
console.log(student) //{ name: 'nguyen van a ', age: 18, mark: { math: 8, english: 10 } }