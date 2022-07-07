// Given an integer x, return true if x is palindrome integer.

// An integer is a palindrome when it reads the same backward as forward.

// For example, 121 is a palindrome while 123 is not.
 

// Example 1:

// Input: x = 121
// Output: true
// Explanation: 121 reads as 121 from left to right and from right to left.
// Example 2:

// Input: x = -121
// Output: false
// Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
// Example 3:

// Input: x = 10
// Output: false
// Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
 

// Constraints:

// -231 <= x <= 231 - 1
 

// Follow up: Could you solve it without converting the integer to a string?


// We need to find if a give number is palindrome or not
// const isPalindrome = (x)
// check for negative number  
//if x < 0 return false
// Store the given number x in a variable number
// Reverse the number
// Return true if the reverse number and given number are equal
// Return false otherwise.


const isPalindrome = (x) =>  {
    if (x < 0) return false
    if (x === 0) return true
    let number = x
    let reverse = null
    while (number > 0) {
        const remainder = number % 10
        reverse = reverse === null ? remainder : reverse * 10 + remainder
        number = Math.floor(number / 10)
    }   
    return x === reverse
};

console.log(isPalindrome(121))