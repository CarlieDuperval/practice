//write code that assigns -Fiat, 500, white- to an object variable named car - then console log car

const cars = {
    type:'Fiat',
    model:'500',
    color:'white'
}
//console.log(cars)



const person = {
    firstName:'Carlie',
    lastName: 'Duperval',
    age: 35
    
}
 //  console.log(person.age) 





// find the minimum number in an array
const arrM = [-3, 5, 45, 7, 45, 6, 78, 90]
console.log(" The Minimum number is :", Math.min(...arrM))


// new Way

const arrN1 = [12, 34, 5, 223, 2, 7, 23, 45]
const findBiggestNumber = (arr) => {
    const max = Math.max(...arr)
    return max

}
console.log( "The maximun number is ",findBiggestNumber(arrN1))






const array = [-1, 10, -30, 105, 18, 106, 453, 1999, -1];

function biggestNumberInArray(arr) {
    let maxNumber;
    for(let i = 0; i < arr.length; i++){
        if(!maxNumber){ 
            maxNumber = arr[i]
        }
        if(arr[i] > maxNumber){
            maxNumber = arr[i];
        }
    }
    return maxNumber
}
console.log( " The Biggets number is :", biggestNumberInArray(array));




// find the max in an array of number

const myArr = [123, 4545, 556, 7558, 5590, 76755, 34, -771]
const findMinimumNum = (arr3) => {
    let minNum;
    for (let i = 0; i < arr3.length; i++ ){
        if(!minNum){
            minNum = arr3[i]
        }
        if( arr3[i]< minNum){
            minNum = arr3[i];
        }
        
    }
    return minNum
}
console.log( " The minimum number in this array is :",findMinimumNum(myArr))