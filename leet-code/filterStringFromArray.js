//Create a function that takes an array of non-negative integers and strings and return a new array without the strings.
//Zero is a non-negative integer.
//The given array only has integers and strings.
//Numbers in the array should not repeat.
//The original order must be maintained.

const filterStringFromArray = (arr) => {
    let newArray = []
    for(let i = 0; i < arr.length ; i++){
        if( typeof arr[i] !== 'string'){
            newArray.push(arr[i])
        }
    } return newArray
}
console.log(filterStringFromArray([1, 2, "a", 5, 12, 143, '124' ,'la' , 'iz' , 12]))