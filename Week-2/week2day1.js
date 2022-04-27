//Create a function that takes an array of numbers and return both the minimum and maximum numbers, in that order.

// findMinAndMax 
//const arrayN = []
//return [ min, max] 

const arrayNum = [12, 544, 34456, 34, 567, 67, 89, 23]
const findMinAndMax = (arr) => {
    let min = arr[0];
    let max = arr[0];
    for( let i = 1; i < arr.length; i++){
        if( arr[i] < min ){
            min = arr[i] 
        }
        if (arr[i] > max){
            max = arr[i]
        }
    }
    return [min, max]
   
}
console.log( 'The minimum and Maximun are', findMinAndMax(arrayNum))



const minmax = [13, 45, 3333, 44,789, -123, 34]
const findMinMax = (arr1) => {
    return [Math.min(...arr1), Math.max(...arr1)]
}
console.log( 'This is a second way to find Min and Max', findMinMax(minmax))



// Create a method in the Person class which returns how another person's age compares. Given the instances p1, p2 and p3, which will be initialised with the attributes name and age, return a sentence in the following format:

// {other person name} is {older than / younger than / the same age as} me.


