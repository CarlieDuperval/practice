// create a function that takes a base number and exponent number and return the calculation 

// 0- write a function
// 1- function takes 2 parameters : calculateExponent ( num, exp)
// return num multiplied n time by itself  ==> num ** exp 
// input : (4, 3)
// output : (64 )


function calculateExponent (num , exp) {
    let result = num ** exp
    return result
}
console.log(calculateExponent(4 , 3))