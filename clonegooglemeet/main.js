// for (let string = '#'; string.length <= 7; string += '#') {
//     console.log(string);
// }

// practic2
// for (let n = 1; n <= 100; n++) {
//     if (n % 3 == 0 && n % 5 == 0) {
//         console.log('FizzBuzz');
//     }
//     else if (n % 3 == 0) {
//         console.log('Fizz');
//     }
//     else if (n % 5 == 0) {
//         console.log('Buzz');
//     }
//     else {
//         console.log(n);
//     }
// }

// for (let n = 1; n <= 100; n++) {
//     // Insert word(s) into `output` string, using conditionals.
//     let output = '';

//     if (n % 3 == 0) {
//         output += 'Fizz';
//     }

//     if (n % 5 == 0) {
//         output += 'Buzz';
//     }

//     // Using OR operator to shortcircuit expression
//     console.log(output || n);
//     console.log(`out put là  : ${output}`);
// }
// end practice 2
// practice 3
// let size = 8;
// let nextLetter = " ";
// let string = "";
// for (let n = 1; n <= size * size; n++) {
//   string += nextLetter;
//   if (n % size == 0) {
//     string += "\n";
//     if (size % 2 == 1) {
//       nextLetter = nextLetter == " " ? "#" : " ";
//     }
//   } else {
//     nextLetter = nextLetter == " " ? "#" : " ";
//   }
// }
// console.log(string);
// end practice3

const readyMeet = document.querySelector(".ready_meet");
const userInfoImg = document.querySelector(".user_info-img");
// console.log(readyMeet);
// const closeControl = document.querySelectorAll(".iconClose");
// console.log(closeControl);
// for (let i = 0; i < closeControl.length; i++) {
//   closeControl[i].addEventListener("click", function () {

//   });
// }

const btn = document.getElementsByClassName("test_hover");
btn[0].addEventListener("click", function () {
  const controlUser = document.querySelector(".control_user");
  if (controlUser.style.display === "block") {
    controlUser.style.display = "none";
    userInfoImg.style.width = "100%";
  } else {
    controlUser.style.display = "block";
    userInfoImg.style.width = "69%";
  }
});

function closeModal(classModal) {
  const modal = document.getElementsByClassName(classModal);
  if(modal[0].style.display === "none"){
    (modal[0].style.display = "block")
    userInfoImg.style.width = "69%";
  }else {
    (modal[0].style.display = "none");
    userInfoImg.style.width = "100%";
  }
  
}

function toggleFunction(showIcon, hideIcon, classIcon) {
  const toggleBtn = document.querySelector(classIcon);
  // console.log(toggleBtn);
  toggleBtn.textContent !== showIcon && toggleBtn.textContent === hideIcon
    ? (toggleBtn.innerHTML = showIcon)
    : (toggleBtn.innerHTML = hideIcon);
}
