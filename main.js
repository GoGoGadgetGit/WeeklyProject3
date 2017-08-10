let opera = document.querySelectorAll("button");
  let screen = document.querySelector(".screen");

for (let i = 0; i < opera.length; i++){
  opera[i].addEventListener("click", function () {
    calcStuff(opera[i].textContent);
  });
}

let symbol = []
let bers = []
let total = '';
function calcStuff(num){
  let temp = '';
screen.textContent += num;
total += num;
if (num === "C"){
  screen.textContent = "";
  total = "";
  bers = [];
  symbol = [];
}

if (num === "="){

for (let i = 0; i < total.length; i++){
if (total[i] === "+" || total[i] === "-" || total[i] === "X" || total[i] === "/"){
  symbol.push(total[i])
  bers.push(parseFloat(temp));

  temp = "";
} else {
  temp += total[i];
}
}
  bers.push(parseFloat(temp));
  console.log(bers);
  console.log(symbol);

let a = bers;
let b = bers.shift();
let c = bers.shift();

console.log(a);
console.log(b);
console.log(c);


if (symbol[0] === "+"){
  let z = b + c;
  bers.unshift(z);
  console.log(bers);
} else if (symbol[0] === "-"){
  let z = b - c;
  console.log(z);
  bers.unshift(z);
} else if (symbol[0] === "X"){
  let z = b * c;
  console.log(z);
  bers.unshift(z);
} else if (symbol[0] === "/"){
  let z = b / c;
  console.log(z);
  bers.unshift(z);
}
screen.textContent = bers[0];
}
}







//id your inputs,
//numbers should be an empty array to store all numbers in equation
//store all operations in the equation
//function for equals button
//convert string into equation....then solve equation(probably break into pieces)
//how to make function for string becoming equation...need string to return two arrays in an object...one for numbers and one for operators
//for loop...if string stuff equals any operator then push the operator to the operator string and push the parseFloat of the numbers string to be a number and make numbers string an empty string again....numbers go into variable for empty string....else += the numbers in each index of the string
//numbers array should be equal to numbers array and operators array should be equal to operators array in returning the loop for the equation function
//after the loop finds the numbers and operators parseFloat the final numbers
