// You are given two integer arrays nums1 and nums2, sorted in non-decreasing order,
// and two integers m and n, representing the number of elements in nums1 and nums2 respectively.

// Merge nums1 and nums2 into a single array sorted in non-decreasing order.

// The final sorted array should not be returned by the function, but instead be
// stored inside the array nums1. To accommodate this, nums1 has a length of m + n, 
//where the first m elements denote the elements that should be merged, 
//and the last n elements are set to 0 and should be ignored. nums2 has a length of n.

 //
 // const mergeArray = (nums1, nums2) => {}
 // merged = nums1.length + nums2.length
 // cont newArr = nums1.slice(0, m).concat(nums2.slice(0, n)).sort((a,b) => a - b)
 // m = nums1.length
 // n = nums2.length






// Example 1:

// Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
// Output: [1,2,2,3,5,6]
// Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
// The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1.
// Example 2:

// Input: nums1 = [1], m = 1, nums2 = [], n = 0
// Output: [1]
// Explanation: The arrays we are merging are [1] and [].
// The result of the merge is [1].
// Example 3:

// Input: nums1 = [0], m = 0, nums2 = [1], n = 1
// Output: [1]
// Explanation: The arrays we are merging are [] and [1].
// The result of the merge is [1].
// Note that because m = 0, there are no elements in nums1. 
//The 0 is only there to ensure the merge result can fit in nums1.
 

// Constraints:

// nums1.length == m + n
// nums2.length == n
// 0 <= m, n <= 200
// 1 <= m + n <= 200
// -109 <= nums1[i], nums2[j] <= 109
 

// Follow up: Can you come up with an algorithm that runs in O(m + n) time?



const mergeArray = (nums1, m , nums2, n) => {    
     const newArr = (nums1.concat(nums2)).sort((a, b) => a -b)
    return newArr.slice(m+n-n)

 }

console.log(mergeArray([1,2,3,0,0,0] ,3,[2,5,6],3 ))




const arr1 = [4,5,6,0,0,0]
const arr2 = [2,8,9]
let a = 3
let b = 3

const merge = (nums1, m, nums2, n) => {
    let insertNum = m + n - 1;
    m--;
    n--;
    while (n >= 0) {
        nums1[insertNum--] = (nums1[m] > nums2[n]) ? nums1[m--] : nums2[n--];
    }
    return nums1
};

//console.log(merge(arr1, a, arr2, b))