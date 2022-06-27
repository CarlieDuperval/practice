//Given an array of items called shoppingList e.g ["Milk", "Bread", "eggs"] and an array of items called cart e.g ["beer", "Chips", "Salsa", "Milk"] create a new list of items in shoppingList that are not in list

const shoppingList = ["Milk", "Bread", "eggs"]
const cart = ["beer", "Wine", "Chips", "Bread"]


// studio coding 
// crate an empty arry to store the new list
// iterate over all elements of arr1 with a loop
//Iterate over all elements of array2 using another loop and check if array1[element] is present in array2.

const array1 = ['Orange', 'Pineapple', 'Grape']
const array2 = ['Strawberry', 'Orange', 'Grape']


const findSimilarItem = (arr , arr2) => {
    for (let i= 0; i > arr.length; i++){
        newArr = []
    }
    for (let j= 0; j > arr2.length; j++){
    if(arr[i] === arr2[j]){
        arr2.splice(j, 1);
        j--;
        newArr.push(arr[i])
    }
}
    return newArr
}
console.log(newArr)

const newList = shoppingList.filter(item => !cart.includes(item))

//console.log(newList)