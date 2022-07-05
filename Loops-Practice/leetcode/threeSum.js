// Given an integer array nums, return all the triplets 
//[nums[i], nums[j], nums[k]] 
//such that i != j, i != k, and j != k, 
//and nums[i] + nums[j] + nums[k] == 0.

// Notice that the solution set must not contain duplicate triplets.

 

// Example 1:

// Input: nums = [-1,0,1,2,-1,-4]
// Output: [[-1,-1,2],[-1,0,1]]
// Example 2:

// Input: nums = []
// Output: []
// Example 3:

// Input: nums = [0]
// Output: []

// function takes an array of integer arr
// loop in the array to search the first index : i
// loop in the array to search the second index :j
// loop in the array to search the third index : k
// condition : i != j; i != k; k != j && arr[i] + arr[j] + arr[k] = 0

