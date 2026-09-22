const num1 = Number(prompt("Enter the first number"));
const num2 = Number(prompt("Enter the second number"));
const num3 = Number(prompt("Enter the third number"));

const average = (num1 + num2 + num3) / 3;

console.log (`The average of ${num1}, ${num2}, and ${num3} is ${average}`);

const firstName = "Abigail";
const age = 20;

const favoriteMovie = prompt(`What is your favorite movie? Your name is ${firstName} is ${age}`);

const sentence = `${firstName} is ${age} years old and their favorite movie is ${favoriteMovie}.`;
console.log(sentence);

const currentDateTime = new Date();
console.log(currentDateTime);