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

// function takes an array of integer nums
// loop in the array to search the first index : i
// loop in the array to search the second index :j
// loop in the array to search the third index : k
// condition : i != j; i != k; k != j && nums[i] + nums[j] + nums[k] = 0
// return triplest nums[i], nums[j], nums[k]

// This is not ok 
const addsUpThreeSumEqualZero = (nums) => {
    for(let i = 0; i < nums.length; i++){
        for (let j = i+ 1; j < nums.length; j++){
            for ( let k = j+1; k < nums.length; k++){
                if( i !=j && i != k && j != k ){
                    if( nums[i] + nums[j] + nums[k] == 0){
                        return [nums[i], nums[j], nums[k]]
                    }
                }
            }

        }
    }
}
//console.log(addsUpThreeSumEqualZero([-1, 0, 1, 2, -1, -4]))




const threeSum = (nums) => {
    const results = []
    if (nums.length < 3) // having at least 3 numbers
        return results
    nums = nums.sort((a, b) => a - b)
    let target = 0
    for (let i = 0; i < nums.length - 2; i++) {
        if (nums[i] > target) break
        if (i > 0 && nums[i] === nums[i - 1]) 
        continue
        let j = i + 1
        let k = nums.length - 1
        while (j < k) {
            let sum = nums[i] + nums[j] + nums[k]
            if (sum === target) {
                results.push([nums[i], nums[j], nums[k]])
                while (nums[j] === nums[j + 1]) j++
                while (nums[k] === nums[k - 1]) k--
                j++
                k--
            } else if (sum < target) {
                j++
            } else { // (sum > target)
                k--
            }
        }
    }

    return results
};
console.log(threeSum([-1, 0, 1, 2, -1, -4]))