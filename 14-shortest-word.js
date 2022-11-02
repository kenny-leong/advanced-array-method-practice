/*
Write a function `shortestWord` that accepts a sentence as an argument.
The function should return the shortest word in the sentence. If there is a tie,
return the word that appears later in the sentence.

Solve this using Array's `forEach()`, `map()`, `filter()` **OR** `reduce()`
methods.

Examples:

console.log(shortestWord('what a wonderful life'));     // 'a'
console.log(shortestWord('the quick brown fox jumps')); // 'fox'
console.log(shortestWord('do what you enjoy'));         // 'do'

*/

//converts string to an array containing the str length
function strLens(word, arr) {
  arr.push(word.length)
}

let shortestWord = function(sentence) {
  let wordList = sentence.split(' ');
  wordList = wordList.reverse();
  let lens = [];

  wordList.forEach(element => {
    strLens(element,lens);
  });

  let loop = lens.reduce((acc, element) => {
    if (element < acc) {
      return element;
    } else {
      return acc;
    }
  })

  const found = wordList.find(element => element.length === loop)
  return found;
};

console.log(shortestWord('what a wonderful life'));     // 'a'
console.log(shortestWord('the quick brown fox jumps')); // 'fox'
console.log(shortestWord('do what you enjoy'));         // 'do'



/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
  module.exports = shortestWord;
} catch (e) {
  module.exports = null;
}
