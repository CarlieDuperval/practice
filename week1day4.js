// 1. Create a function that takes in a number of two pointers and three pointers made and returns a basketball teams total score?
const countBaskeballPoints = (a, b) => {
    let result = (a * 2) + (b *3)
    return result
}
console.log(countBaskeballPoints(9, 10))


// 2. Create a function that takes an array of numbers & returns both min and max in that order. (use a loop)

let getMinMax = (arr) => {
   
    let max = arr[0];
    let min = arr[0];
 
    for (let i = 0; i < arr.length; i++) {
    
      if(max < arr[1]){  // we need at 2 numbers for the comparaison
        max = arr[i];
      }

      if(min > arr[i]){
        min = arr[i];
      }
      
    }
    return [min , max]
    
  }
console.log(min, max)
console.log('The minimun value is :', min, 'The maximum value is :', max);
getMinMax([23, 566, 6767, 34, 23, 0, 34, 54, 68])


// 3. Create a function that converts a string to uppercase letters:

const convertSrting = (stri) => {
    let str = ''
    let result = stri.toLowerCase(str)
    return result

}
console.log(convertSrting('WHAT a TIME to BE ALIVE!'))