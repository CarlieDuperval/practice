//Create a function that takes an array of items, removes all duplicate items and returns a new array in the same sequential order as the old array (minus duplicates).

// Examples
// removeDups([1, 0, 1, 0]) ➞ [1, 0]

// removeDups(["The", "big", "cat"]) ➞ ["The", "big", "cat"]

// removeDups(["John", "Taylor", "John"]) ➞ ["John", "Taylor"]
// Notes
// Tests contain arrays with both strings and numbers.
// Tests are case sensitive.
// Each array item is unique.


// create a function (arr)
// loop to compare each index
// 

const myArr = [1, 0, 1, 0, 2, 3, 2, 3, ]

const getUniqueElement = (arr) => {
    let uniqueArr = []
   
    arr.forEach(element => {
        if(!uniqueArr.includes(element)){
            uniqueArr.push(element)
        }
        
    });
    return uniqueArr
}

console.log(` this is the new array of numbers`, getUniqueElement(myArr))



const stringArr = ['Todd', 'Darie', 'Todd', 'Carlie', 'Harold', 'Darie', 'Jean']

const getUniqueArray = (myArray) => {

    let newArray = []
    myArray.forEach(element =>{
        if(!newArray.includes(element)){
            newArray.push(element)
        }

    })
    return newArray

}
console.log(` this is the new array of string` ,getUniqueArray(stringArr))