// Given an array , a target return the indices of 2 elements that add up to the target

let array = [1, 2, 5, 3, 10, 7, 32]
let target1 = 13

const twoSom = (arr, target) => {
    for (let i = 0; i < arr.length; i++){
        for(let j = i + 1; j < arr.length; j++){
            let res = arr[i] + arr[j] === target
            if(res){
                return [i, j]
            }
        }
    }
}
console.log(twoSom(array ,target1))
