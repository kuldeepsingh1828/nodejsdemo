//function to find length of string
function findLength(str) {
    return str.length;
}

//function to find first character of string
function findFirstChar(str) {
    return str[0];
}

//function to find last character of string
function findLastChar(str) {
    return str[str.length - 1];
}

//function to find middle character of string
function findMiddleChar(str) {
    return str[Math.floor(str.length / 2)];
}

//function to find first n characters of string
function findFirstNChar(str, n) {
    return str.slice(0, n);
}

//function to find last n characters of string
function findLastNChar(str, n) {
    return str.slice(str.length - n, str.length);
}

//function to find middle n characters of string
function findMiddleNChar(str, n) {
    return str.slice(Math.floor((str.length - n) / 2), Math.floor((str.length - n) / 2) + n);
}

//function to convert string into array
function convertStringToArray(str) {
    return str.split(' ');
}

//function to convert array into string
function convertArrayToString(arr) {
    return arr.join(' ');
}

//function to convert string into lowercase
function convertStringToLowerCase(str) {
    return str.toLowerCase();
}

//function to convert string into uppercase
function convertStringToUpperCase(str) {
    return str.toUpperCase();
}

//function to toggle case of each character of string
function toggleCase(str) {
    var newStr = '';
    for (var i = 0; i < str.length; i++) {
        if (str[i] === str[i].toUpperCase()) {
            newStr += str[i].toLowerCase();
        } else {
            newStr += str[i].toUpperCase();
        }
    }
    return newStr;
}

//function to find character frequency in string
function findCharFrequency(str, char) {
    var count = 0;
    for (var i = 0; i < str.length; i++) {
        if (str[i] === char) {
            count++;
        }
    }
    return count;
}

module.exports = {
    findLength,
    findFirstChar,
    findLastChar,
    findMiddleChar,
    findFirstNChar,
    findLastNChar,
    findMiddleNChar,
    convertStringToArray,
    convertArrayToString,
    convertStringToLowerCase,
    convertStringToUpperCase,
    toggleCase,
    findCharFrequency
}   
