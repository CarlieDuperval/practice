// Next then rewrite the function that only adds up the numbers divisible by 2 or 5 and returns a whole number.


// Test case: [2, 13, 56, 24, 99, 65, 239, 47, 3]



// Write a Function that takes in an array of numbers and then finds the total sum of those numbers.

// 0-) write function that takes an array (arr)
// 1-) check systematic of each index to do the sum / check if each index is a number arr[i] == 'number' / if each index is not null  arr[i] !== null
// 2-) iterate in the array to do the sum 
// 3-) initialize the first sum at zero let sum= 0
const testArray = [2, 13, 56, 24, 99, 65, 239, 47, 3]

const findSumNumbers = (arr) => {
    let sum = 0
    for(let i = 0; i<arr.length ; i++){
        sum += arr[i]
    }
    return sum
}
console.log(findSumNumbers(testArray))


// rewrite the function 
// adds up arr[i] % 2 == 0 || arr[i] % 5 == 0
// return a  whole number

const addUpNumberDivByTwoOrFive = (arr) => {
    let sum = 0
    for(let i = 0; i< arr.length; i++){
        if(arr[i] % 2 == 0 || arr[i] % 5 == 0){
            sum += arr[i]
        }
    } 
    return sum
}
//console.log(addUpNumberDivByTwoOrFive(testArray))


// rewrite a function 
// adds up arr[i]% arr[i] !==0 && arr[i] % 1 !== 0
// arr[i] % (num) == decimal  || prime number  factor is grater than 1
// return sum

const addPrimeNumber = (num) => {
    let primeArray =[]
    let sum = 0
    for (let i = 2; i <=num ; i++){ //
        primeArray.push(i)  // push prime number to the newArray
    }
    for (let j = 0; j < primeArray.length ; j++){
        if((primeArray[j] % 2 ===0) && (primeArray[j] > 2)){
        sum+= primeArray[j]
        }
    }
   return sum
}
//console.log(addPrimeNumber (testArray))



// Next rewrite the function that only adds up the total of prime numbers in the set array.

// rewrite a function 
// check if the number is prime : num>1 
// adds up prime number 
// need two loops: for loop and a filter
// return sum

const test = [1, 2, 3, 5, 7, 4, 6, 11]; // 28

const primeNumber = (num) => {
  for (let i = 2; i < num; i++) 
  if (num % i === 0) return false;
  return num > 1;
};
const findPrimeNumber = (arrNum) => {
let sum = 0;
let primeNumbers = arrNum.filter(
(prime) => primeNumber(prime));
for (let i = 0; i < primeNumbers.length; i++){
    sum +=primeNumbers[i];
  }
  return sum;
};
console.log(findPrimeNumber(test));
