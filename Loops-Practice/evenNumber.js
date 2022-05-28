//Create a function that takes an array of integers and returns an array with only  the even integers from the original array 

arrEven =[ 12, 4, 6,56, 3, 23]
const findEvenNumber = (arr)=> {
    let newArr = [];
    for(let i= 0; i<arr.length; i++){
        if(arr[i] % 2 === 0){
            newArr.push(arr[i])
        }
        return newArr

    }
}
console.log(findEvenNumber(arrEven))