/*
Write a function `snakeToCamel` that takes in a snake_cased string and returns a
PascalCased version of the string. snake_case is where each word is separated
with underscores(`_`). PascalCase is a string where the first char of each word
is capital, all other chars lowercase.

Solve this using `array.map()`.

Examples:

console.log(snakeToCamel('snakes_go_hiss')); // 'SnakesGoHiss'
console.log(snakeToCamel('say_hello_world')); // 'SayHelloWorld'
console.log(snakeToCamel('app_academy_is_cool')); // 'AppAcademyIsCool'
console.log(snakeToCamel('APp_ACADEMY_iS_cOol')); // 'AppAcademyIsCool'

*/

function lowerCase(arr) {
    let arr1 = [];
    arr.forEach(str => {
        arr1.push(str.toLowerCase());
    });
    return arr1;
}

function capitalize(word) {
    let letterList = word.split('');
    let firstLetter = letterList[0];
    firstLetter = firstLetter.toUpperCase();
    letterList.splice(0,1);
    letterList = lowerCase(letterList);
    letterList.unshift(firstLetter);
    letterList = letterList.join('');
    return letterList;
}


function snakeToCamel(str) {
    let strList = str.split('_')
    let map1 = strList.map(element => capitalize(element));
    map1 = map1.join('');
    return map1;
}

console.log(snakeToCamel('snakes_go_hiss')); // 'SnakesGoHiss'
console.log(snakeToCamel('say_hello_world')); // 'SayHelloWorld'
console.log(snakeToCamel('app_academy_is_cool')); // 'AppAcademyIsCool'
console.log(snakeToCamel('APp_ACADEMY_iS_cOol')); // 'AppAcademyIsCool'





/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
    module.exports = snakeToCamel;
} catch (e) {
    module.exports = null;
}
