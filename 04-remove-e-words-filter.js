/*
Write a function `removeEWords(sentence)` that accepts a sentence string as an
arg. The function should return a new string, containing only the words that
don't have the letter "e" in them.

Solve this using Array's `filter()` method.

Examples:

console.log(removeEWords('What time is it everyone?')); // 'What is it'
console.log(removeEWords('Enter the building')); // 'building'

*/

let removeEWords = function(sentence) {
  let wordList = sentence.split(' ');
  let finalArr = [];

  let filterWords = wordList.filter(element => element.includes('e'))
  filterWords = filterWords.join(' ');

  for (i=0;i<wordList.length;i++) {
    if (filterWords.includes(wordList[i])) {
    } else {
      finalArr.push(wordList[i])
    }
  }
  finalArr = finalArr.join(' ')
  return finalArr;
};


console.log(removeEWords('Enter the building')); // 'building'







/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
  module.exports = removeEWords;
} catch (e) {
  module.exports = null;
}
