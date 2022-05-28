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



// Write a wordReverser() function that will take a given string and reverse the order of the words. 

// 0-Write a function
//1-Function that takes (string)
//2- return => reverse order of the words , We need a loop for that

const wordReverser = (string) => {
    let myArr = string.split(' ')
    return myArr.reverse().join(' ')
}
console.log(wordReverser('Boca Code !!!!!!! In code we trust'))


















const reverseWord = (phrase) => {
    let newArray = phrase.split(" ")
    return newArray.reverse().join(" ")
}
// console.log(reverseWord("May the Fourth be with you"))


