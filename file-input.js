const readline = require("readline-sync");

const userInput = readline.question("Please enter something: ");

const number = Number(userInput);

if (!isNaN(number)) {
  console.log("You entered a number:", number);
} else {
  console.log("NaN");
}
