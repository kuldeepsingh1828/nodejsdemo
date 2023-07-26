//import string module and use its functions

//import maths module and use its functions
var maths = require('./modules/maths');
var string = require('./modules/string');

console.log(maths.sum(2, 3));
console.log(maths.sub(2, 3));
console.log(maths.mul(2, 3));
console.log(maths.div(2, 3));

console.log(string.findLength('hello'));
console.log(string.findFirstChar('hello'));
console.log(string.findLastChar('hello'));
console.log(string.findMiddleChar('hello'));
console.log(string.findFirstNChar('hello', 2));
console.log(string.findLastNChar('hello', 2));
console.log(string.findMiddleNChar('hello', 2));
console.log(string.convertStringToArray('hello world'));
console.log(string.convertArrayToString(['hello', 'world']));
console.log(string.convertStringToLowerCase('HELLO'));
console.log(string.convertStringToUpperCase('hello'));
console.log(string.toggleCase('Hello'));
console.log(string.findCharFrequency('hello', 'l'));