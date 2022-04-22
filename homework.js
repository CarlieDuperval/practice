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


// find the max in an array of number

const findMaxNumber = (arr) => {
    if (arr.length === 0){
        return;
    }
    let max = arr[0]
    for(let i = 0; i < arr.length; i++){

        if (arr[i] > max){
            max = arr[i] 
        } else {
            return max
       }      
    }
}
console.log(findMaxNumber([1, 45, 6, 78, 90, 0, 34, -1]))






const findMax = (arr) => {
    let max;

    for(let i = 0; i < arr.length; i++){

        if(arr[i] > arr[arr.length-1]){
            max = arr[i];

        }
    }

}

//console.log(findMax([16, 5, 6, 78, 90, 0, 34, 76]))