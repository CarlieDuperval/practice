// Create a function that takes two strings as arguments and returns the number of times the first string (the single character) is found in the second string.

// Examples
// charCount("a", "edabit") ➞ 1

// charCount("c", "Chamber of secrets") ➞ 1

// charCount("b", "big fat bubble") ➞ 4
// Notes
// Your output must be case-sensitive (see second example).




// ?????????????????
let sentences = ' carlie Ritchell Duperval Dorlus'
let myCharacter = 'i'

const characterCount =(myCharacter, str) => {
    let arr = [...str]
    let sum = 0
    for(let i = 0; i< arr.length; i++){
        if(arr[i] == myCharacter){
            sum++;
        }
    }
    return sum
}
console.log(characterCount(sentences, myCharacter))




