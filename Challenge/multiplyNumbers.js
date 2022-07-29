// Write a function that multiply numbers in an array and return the total

const multiplyNumber = (arr) => {
    let result = 1
    for (let i = 0; i < arr.length ; i++) {
        result *= arr[i]

    }
    return result
}
console.log(multiplyNumber([2, 3, 4]))