// var result = "Tom is at his computer.".split("");
// const restrictedWords = ["banana", "orange", "apple", "peach", "grape"];

// function checkUsername(username) {
//   var isUserNameOk = true;

//   for (var i = 0; i < restrictedWords.length; i += 1) {
//     var includesRestrictedWord = username.includes(restrictedWords[i]);
//     if (includesRestrictedWord) {
//       isUserNameOk = false;
//     }
//   }

//   return isUserNameOk;
// }

// console.log(checkUsername("mike45")); // true
// console.log(checkUsername("apple45")); // false
// var names = "john james jones";
// var splitIntoWords = names.split(" ");

// for (var i = 0; i < splitIntoWords.length; i += 1) {
//   var currentWord = splitIntoWords[i];
//   var lettersOfCurrentWord = currentWord.split("");
//   var capitalizedLetter = lettersOfCurrentWord[0].toUpperCase();
//   lettersOfCurrentWord[0] = capitalizedLetter;
//   var capitalizedWord = lettersOfCurrentWord.join("");
//   splitIntoWords[i] = capitalizedWord;
// }
// const capitalizedName = splitIntoWords.join(" ");
// console.log(capitalizedName);

//var Sentence = "A quick brown fox jumps over a lazy dog";

// function longestWord(Sentence) {
//   var splitWords = Sentence.split(" ");
//   var longestWord = splitWords[0];

//   for (var i = 0; i < splitWords.length; i++) {
//     if (splitWords[i].length > longestWord.length) {
//       longestWord = splitWords[i];
//     }
//   }

//   return longestWord;
// }
// console.log(longestWord("i am happy"));

function convertToCentury(year) {
  var century = Math.ceil(year / 100);

  var suffix = "th";
  if (century % 100 >= 10 && century % 100 <= 20) {
    suffix = "th";
  } else if (century % 10 === 1) {
    suffix = "st";
  } else if (century % 10 === 2) {
    suffix = "nd";
  } else if (century % 10 === 3) {
    suffix = "rd";
  }

  // Return the century with the suffix
  return century + suffix + " century";
}

// Example usage
console.log(convertToCentury(1800));
console.log(convertToCentury(1999));
console.log(convertToCentury(2024));

// var rl = require("readline-sync");

// var tweet = rl.question("write your tweet \n");
// var newtweet = tweet.slice(0, 20);
// var tweetCount = tweet.length;
// console.log(
//   "you have written " +
//     tweetCount +
//     " characters and you have left " +
//     (20 - tweetCount) +
//     " characters left" +
//     newtweet
// );
