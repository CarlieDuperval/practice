// Given an array of integers nums and an integer target,
// return  two numbers  that  adds up to target.

// 1- First approach is two for loops
// t: O(N2)
// s: O(1):constant
const addUpNumberToTarget = (nums , target) => {
    for (let i =0; i < nums.length; i++){
        for( let j = i+1; j < nums.length; j++ ){
            if( nums[i]+ nums[j] == target){
                return [nums[i], nums[j]]
            }
        } 
    }
}
//console.log(addUpNumberToTarget([15, 7, 11, 2],9))


// Approach 2
// use a map 
// create a set
// add every element to the set 
// find if targ-a[i] is in the set

// t:O(N)  s:O(N)
// in this case the running time is 
const twoSumWSet= (arr, targ) =>{
    const set = new Set()
    for (let i =0; i < arr.length; i++){
        set.add(arr[i])

    }


}

// for (let i =0; i < arr.length; i++){
//     const num = targ - arr[i]
//     if(set.has(num)){
//         return [arr[i], num]
//     }
// }


// 3em Approach is sorting
//- Sort the array
// - Use two pointers algo to find target
// 

const twoSumSort = (arr1, target) => {
    const sort = arr1.sort((a, b ) => a-b) // this is the synthax for sorting 
       let i = 0, j= sort.length-1
       while(i<j){
        const sum = sort[i] + sort[j];
        if(sum > target){
            j--;
        elseif(sum < target)
        {
            i++
        }
    }else{
        return[sort[i], sort[j]]
        }
       }
    
}
console.log(twoSumSort([9, 2, 5, 4, 7, 1, 3], 12))