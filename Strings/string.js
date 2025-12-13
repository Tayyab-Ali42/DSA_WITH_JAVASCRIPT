// PROBLEM 1 You are given a string

// Your task is to reverse all the characters in the string and return the reversed string.

// Rules
// You can use a new string to store the result (brute-force)
// Or you can try to reverse in-place (advanced)
// Every character counts — including letters, numbers, spaces, and punctuation

let reverseStr = (str) => {
    debugger
    let reversedStr = ''
    for (let i = str.length - 1; i >= 0; i--) {
        reversedStr += str[i]
    }
    return reversedStr
}

console.log(reverseStr('Hello'))
console.log(reverseStr('string'))



// PROBLM 2 Valid Palindrome — Problem Description

// You are given a string,

// Your task is to check if the string reads the same forward and backward (ignoring spaces, punctuation, and capitalization).

// Rules

// Ignore all non-alphanumeric characters (letters and numbers only)
// Ignore uppercase/lowercase differences
// Return true if the string is a palindrome, false otherwise


function Checkpalindrome(str) {
    let cleaned = ''
    for (let i = 0; i < str.length; i++) {
        let ch = str[i].toLowerCase()
        if (ch >= 'a' && ch <= 'z' || ch >= '0' && ch <= '9') {
            cleaned += ch
        }
    }

    let reversed = '';
    for (let i = cleaned.length - 1; i >= 0; i--) {
        reversed += cleaned[i];
    }
    return reversed === cleaned
}

console.log(Checkpalindrome("A man, a plan, a canal: Panama"))
console.log(Checkpalindrome("raceacar"))
console.log(Checkpalindrome("Hello"))