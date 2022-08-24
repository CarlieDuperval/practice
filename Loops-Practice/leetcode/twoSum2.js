// Given an array of integers nums and an integer target,
// return  two numbers  that  adds up to target.

// 1- First approach is two for loops

const addUpNumberToTarget = (nums , target) => {
    for (let i =0; i < nums.length; i++){
        for( let j = i+1; j < nums.length; j++ ){
            if( nums[i]+ nums[j] == target){
                return [nums[i], nums[j]]
            }
        } 
    }
}
console.log(addUpNumberToTarget([15, 7, 11, 2],9))


// Approach 2
// use a map 
// create a set
// add every element to the set 
// find if targ-a[i] is in the set


const twoSumWSet= (arr, targ) =>{
    const set = new Set()
    for (let i =0; i < arr.length; i++){
        set.add(arr[i])

    }


}

for (let i =0; i < arr.length; i++){
    const num = targ - arr[i]
    if(set.has(num)){
        return [arr[i], num]
    }
}