var rl = require("readline-sync");

function getNumberFromUser() {
  var reply = rl.question("Please enter a number:");

  var numberOrNot = Number(reply);

  if (isNaN(numberOrNot)) {
    console.log("system crashed");
  } else {
    return numberOrNot;
  }
}

var a = getNumberFromUser();
var b = getNumberFromUser();
console.log(a + b);
