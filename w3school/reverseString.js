// Write a function that reverse a string 
let string = "hello"

const reverseString = (str) => {
    let newString = ''
    for (let i = str.length-1; i >= 0; i--){
        newString += str[i]
    }
    return newString
}
//console.log(reverseString(string))



// Write a wordReverser() function that will take a given string and reverse the order of the words. You may assume that the string is a sentence that contains only letters and spaces, with all words separated by one space.

// For example, wordReverser("Codecademy rules") should return "rules Codecademy" and wordReverser("May the Fourth be with you") should return "you with be Fourth the May".

//let words = "May the Fourth be with you"
const reverseWord = (phrase) => {
    let newArray = phrase.split(" ")
    console.log(newArray)
    let reverseString = ''
    for(let i = newArray.length-1; i >= 0; i-- ){ 
        reverseString += newArray[i]
    }  
     return reverseString.toString(',')

}
console.log(reverseWord("May the Fourth be with you"))