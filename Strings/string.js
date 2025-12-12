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