//work 1//
console.log(
  "You can ignore single and double quotes like this: \\'\\'\\\"\\\""
);

//work 2//
let firstname = prompt("Enter your name", "Name");
alert(`Your name is: ${firstname}`);

let surname = prompt("Enter your surname", "Surname");
alert(`Your full name is: ${firstname} ${surname}`);

let age = prompt("How old are you?", "Age");
alert(`Your full name is: ${firstname} ${surname}, your age is: ${age}`);

let question = confirm("Are you admin?");
alert(
  `Your full name is: ${firstname} ${surname}, your age is: ${age}, admin status: ${question}`
);

alert("Please enter your data");
