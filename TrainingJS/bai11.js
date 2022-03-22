// Call () : Gọi hàm và cho phép truyền vào một object và các đối số phân cách nhau bởi dấu phẩy và trả về kết quả
// Example Call
const functionCall = sayHello.call(student, 10, 20);
function sayHello(a, b) {
  console.log(this.name, a + b);
}
const student = {
  name: "Im Computer",
};
// Apply(): Gọi hàm và cho phép truyền vào một object và các đối số thông qua mảng và trả về kết quả


const functionApply = sayHello.apply(student, [2, 3]);

// Blind(): return một hàm số mới, cho phép  truyền vào một object và các đối số phân cách nhau bởi dấu phẩy.
//Example Bind

let person = {
  firstName: "John Doe",
  getName: function () {
    console.log(this.firstName);
  },
};
// setTimeout(person.getName, 1000); //undefined
// setTimeout(function () {
//   person.getName();
// }, 1000);
//Or
let functionName = person.getName.bind(person);
setTimeout(functionName, 3000);
let runner = {
  name: "Runner",
  functionRun: function (speed) {
    console.log(this.name + " runs at " + speed + " mph.");
  },
};
let flyer = {
  name: "Flyer",
  fly: function (speed,a,b) {
    console.log(this.name + " flies at " + speed + " mph." + a+ b);
  },
};
let run = runner.functionRun.bind(flyer, 20);
setTimeout(run, 5000);
