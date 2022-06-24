// Write a function that only adds up the total of prime numbers in the set array.
// Check for prime number
// we need 2 loops: filter and for loop
// adds up prime numbers
// return sum

const test = [ 1, 2, 3, 5, 7, 4, 6, 11] // 28

const test2 = [3, 54, 34, 90, 66, 99, 7, 13]

const primeNumber = (num) => {
    for (let i = 2; i < num; i++)
    if ( num % i === 0) return false
    return num > 1
}
const findPrimeNumber = (arr) => {
    let sum = 0;
    let primeNumbers = arr.filter((prime) => primeNumber(prime));
    for (let i = 0; i < primeNumbers.length; i++){
        sum += primeNumbers[i];
    }
    return sum;
}
console.log(findPrimeNumber(test2))




