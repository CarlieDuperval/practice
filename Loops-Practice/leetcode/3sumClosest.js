// Given an integer array nums of length n and an integer target, find three integers in nums such that the sum is closest to target.

// Return the sum of the three integers.

// You may assume that each input would have exactly one solution.

 

// Example 1:

// Input: nums = [-1,2,1,-4], target = 1
// Output: 2
// Explanation: The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).
// Example 2:

// Input: nums = [0,0,0], target = 1
// Output: 0


// write a function threeSumClosest that takes 2 param :arr & target
// threeSumClosest ( nums, target)
// loop in the array to find 3 int (3 loops)
// let sum = nums[i] + num[j] + nums[k] 
// if   sum = target+1
// return sum 
