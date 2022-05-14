//Mubashir created an infinite loop! Help him by fixing the code in the code tab to pass this challenge. Look at the examples below to get an idea of what the function should do. Examples
// printArray(1) ➞ [1]

// printArray(3) ➞ [1, 2, 3]

// printArray(6) ➞ [1, 2, 3, 4, 5, 6]


const printArray =  (num) =>  {
    let newArray = [];
    for(let i = 1; i <= num; i++ ){
        newArray.push(i)
    }
    return newArray;
}
console.log(printArray(1))
console.log(printArray(2))
console.log(printArray(3))
console.log(printArray(4))

//This is ok