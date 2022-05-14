// write a loop that creates a
//new array with the square of each number

const numbers = [1,2,3,4,5,6,7,8]

const squareOfNumber = (arr) => {
    let newArray = []
    for( let i = 0; i < arr.length; i++){
        const result  = arr[i] ** 2
        newArray.push(result)
    }
    return newArray
}
console.log(squareOfNumber(numbers))



// This is ok

numbers.map((num)=> {
    num ** 2
})
