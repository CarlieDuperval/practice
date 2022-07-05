// Given an array of integers nums and an integer target,
// return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

//  write a fuction addsUpNumberToTarget()
// function takes 2 argument (arr, target)
// if arr[i] + arr[i+i] == target
// return indexOf[i] and arr[i+i]

// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]
// Example 3:

// Input: nums = [3,3], target = 6
// Output: [0,1]
 

// Constraints:

// 2 <= nums.length <= 10 4
// -10 9 <= nums[i] <= 10 9
// -10 9 <= target <= 10 9
// Only one valid answer exists.
 
const nums = [2, 7, 11, 15]
const target = 9

const addsUpNumberToTarget = (arr , target ) => {
    const newArr = []
    for( let i = 0 ; i < arr.lenght; i++) {
        if(arr[i] + arr[i+i] === target ){
        }
        let result = newArr.push(arr[i], arr[i+i])
        return result
    }
}
//console.log(addsUpNumberToTarget(nums, target))


const num1= [2, 7, 11, 15]
const target1 = 9

const addUpNumberToTarget = (nums , target) => {
    for (let i =0; i < nums.length; i++){
        for( let j = i+1; j < nums.length; j++ ){
            if( nums[i]+ nums[j] == target){
                return[i, j]
            }
        } 
    }
}
console.log(addUpNumberToTarget([15, 7, 11, 2],9))




const twoSum = (nums, target) => {
    for(let i = 0; i < nums.length; i++){
        for(let j = i+1; j < nums.length; j++){
            if(nums[i] + nums[j] == target){
                return [i, j]
            }
        }
    }
};
 console.log(twoSum([3, 2, 4],6))