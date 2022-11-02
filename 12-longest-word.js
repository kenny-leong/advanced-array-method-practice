/*

Write a function `longestWord(sentence)` that takes in a sentence string as an
argument. The function should return the longest word in the sentence.

You must use  `Array.forEach` in your solution.

Solve this using Array's `forEach()`, `map()`, `filter()` **OR** `reduce()`
methods.

Examples:

console.log(longestWord('where did everyone go')); // 'everyone'
console.log(longestWord('prefer simplicity over complexity')); // 'simplicity'
console.log(longestWord('')); // ''

*/

function count(string,arr) {
    arr.push(string.length);
}

let longestWord = function(sentence) {
    let arr = sentence.split(' ');
    let arr2 = [];
    arr.forEach(element => count(element, arr2))

    let loop = arr2.reduce((acc, element) => {
        if (element > acc) {
            return element;
        } else {
            return acc;
        }
    })
    let index = arr2.indexOf(loop);
    if (sentence.length > 0) {
        return arr[index];
    } else {
        return ''
    }
};

console.log(longestWord('where did everyone go')); // 'everyone'
console.log(longestWord('prefer simplicity over complexity')); // 'simplicity'
console.log(longestWord('')); // ''










/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
    module.exports = longestWord;
} catch (e) {
    module.exports = null;
}
