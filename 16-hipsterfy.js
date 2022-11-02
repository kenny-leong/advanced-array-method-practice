/*

Write a function `hipsterfy(sentence)` that takes in a sentence string and
returns the sentence where every word is missing it's last vowel.

Solve this using Array's `forEach()`, `map()`, `filter()` **OR** `reduce()`
methods.

Examples:

console.log(hipsterfy('When should everyone wake up?')); // 'Whn shold everyon wak p?'
console.log(hipsterfy('get ready for our bootcamp')); // 'gt redy fr or bootcmp'
console.log(hipsterfy('panthers are great animals')); // 'panthrs ar gret animls'

*/

let removeLastVowel = function(word) {
    let wordList = word.split('');
    wordList = wordList.reverse();
    let vowels ='AEIOUaeiou';
    for (i=0;i<wordList.length;i++){
        if(vowels.includes(wordList[i])) {
            wordList.splice(i,1);
            break;
        }
    }
    wordList = wordList.reverse();
    wordList = wordList.join('');
    return wordList;
};

// alternative solution using Array.map
let hipsterfy = function(sentence) {
     return sentence.split(' ').map(removeLastVowel).join(' ');
};


console.log(hipsterfy('When should everyone wake up?')); // 'Whn shold everyon wak p?'
console.log(hipsterfy('get ready for our bootcamp')); // 'gt redy fr or bootcmp'
console.log(hipsterfy('panthers are great animals')); // 'panthrs ar gret animls'






/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
    module.exports = hipsterfy;
} catch (e) {
    module.exports = null;
}
