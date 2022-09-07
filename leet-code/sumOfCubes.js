//Create a function that takes in an array of numbers and returns the sum of its cubes.

let ArrNumber = [2,3]


const sumOfCubes = (arr) => {
    let sum = 0
    for(let i = 0; i <= arr.length ; i++){
    sum += Math.pow(i, 3)
    } 
    return sum

}

console.log(sumOfCubes(ArrNumber))