    //Create a function that will return an integer number corresponding to the amount of digits in the given integer num//

    // 1- Take in num
    // 2-convert to string
    // 2- return string.length

const digitNumber = (num) => {
    let result = new String (num)
    return result.length
}

 console.log("This digit number is :", digitNumber(25000))


console.log(" The first result is :", true && true)
console.log(" The second result is :", true && false)
console.log(" The tird result is :", false && false)

console.log(" The forth result is :", true|| true)
console.log(" The fith result is :", true|| false)
console.log(" The sixth result is :", false|| false )



    //Create a function that takes two numbers as arguments and returns their sum.
    // take in numb
    // return sum

const sumNumber = (num1, num2) => {
    let sum = num1 + num2;
    return sum;
}
console.log("This sum number is ",sumNumber(20,5));


    // Write a function that takes an integer minutes and converts it to seconds.

    // take in number
    // number * 60
    // return result

const minuteToSecond = (num) => {
    let result = num * 60
    return result
}
console.log("This is ", minuteToSecond(30), "second");


    // Write a function that takes the base and height of a triangle and return its area.

    // take in : num1, num2
    // (base * height)/2
    //return result

const triangleArea = (b, h) => {
    let area = (b * h)/2
    return area
}
console.log(" This triange area is ",triangleArea(10, 12));


    //Create a function that takes the age in years and returns the age in days.
    // 1- take in num
    // 2- result = age * 365
    // return result

const getAgeInDays = (age) => {
    let result = age * 365
    return result
}
console.log("This age in date is :", getAgeInDays(22));


    //Fix the code in the code tab to pass this challenge (only syntax errors). Look at the examples below to get an idea of what the function should do.

function cubes(a) {
	return a ** 3
}
console.log("The cubed area is :", cubes(2))


    //Create a function that takes an array containing only numbers and return the first element.

const getFisrtValue = (arr) => {
    return arr[0]
}
 console.log("The first index is :", getFisrtValue([23,56,76,45]));


    //Create a function that takes voltage and current and returns the calculated power.
    // take in numbers
    // let power = v * c
    // return power

const circuitPower = (voltage , current) => {
    let power = voltage * current
    return power
}
console.log("The circuit power is ", circuitPower(5,15))


    // Write a function that converts hours into seconds.

const ConvertHourToSecond = (num) =>{
    let result = num * 360
    return result
}
console.log(" This is ", ConvertHourToSecond(4), "seond")


    // Create a function that finds the maximum range of a triangle's third edge, where the side lengths are all integers

const getMaxRangeOfTriangle = (side1, side2) => {
    let range = side1 + side2 - 1;
    return range
}
console.log("Maximum range of triangle is :", getMaxRangeOfTriangle(4,8))


    // There is a single operator in JavaScript, capable of providing the remainder of a division operation. Two numbers are passed as parameters. The first parameter divided by the second parameter will have a remainder, possibly zero. Return that value.

    // tacking number (num1 , num2)
    // let result = num1 % num2
    // retun result


const remainder = (a, b) => {
    let result = a % b
    return result
}
console.log("The remainder is : ", remainder (18, 4))


    //Create a function that takes length and width and finds the perimeter of a rectangle.

const rectanglePerimeter = (L, W) =>{
    let perimeter = (L + W) * 2
    return perimeter
}

console.log("The perimeter is ", rectanglePerimeter(9,6));


    // Create a function that takes a number as its only argument and returns true if it's less than or equal to zero, otherwise return false.

    // 1- take in num
    // 2-  if num <= O return true
    // 3- else return false

const lessThanOrEqualZero = (num)=> {
    if(num <= 0)
        return true;
    else
        return false;
   
    }
    console.log("This is ", lessThanOrEqualZero(-12));


    // You are counting points for a basketball game, given the amount of 2-pointers scored and 3-pointers scored, find the final points for the team and return that value.

    // take in (numtwo, numthree)
    // result (numtwo*2) +(numthree*3)
    // return result

    const points = (twoPointers , threePointers) => {
        let count = (twoPointers*2) + (threePointers*3)
        return count
    }
    console.log("The pointers point is :", points(5,7));


    // Given two numbers, return true if the sum of both numbers is less than 100. Otherwise return false.

    const lessThan100 = (a,b) => {
        if(a+b < 100)
        return true
        else 
        return false
    }

    console.log("The sum of 2 numbers is" ,lessThan100(13, 9));


    // JavaScript has a logical operator &&. The && operator takes two boolean values, and returns true if both values are true.

    const boeleanCheck = (a ,b) => {
        if(a == true && b == true){
            return true
        }else{
            return false
        }
    }
    console.log("This is" ,boeleanCheck(true, false));

    
   /* Create a function that takes the number of wins, draws and losses and calculates the number of points a football team has obtained so far.
    wins get 3 points
    draws get 1 point
    losses get 0 points*/

    const numberPointsFootBall = (wins, draws, losses)=> {
        let count = wins*3 + draws*1 + losses*0
        return count
    }
    console.log("The number of wins is", numberPointsFootBall(3, 6, 7));


    // Create a function that takes three arguments prob, prize, pay and returns true if prob * prize > pay; otherwise return false.

    const checkmultiplyFunction = (prod, prize, pay) => {
        if( prod * prize > pay ) {
            return true
        }
        else{
            return false
        }
    }
console.log("This multiply is" ,checkmultiplyFunction(4,6,45) );


    //Given an n-sided regular polygon n, return the total sum of internal angles (in degrees).

const sumPolygon = (n) => {
    let sum = (n-2)*180
    return sum
}

console.log("The polygon sum is", sumPolygon(500));


//Create a function that takes a number as an argument. Add up all the numbers from 1 to the number you passed to the function.

// take in number
// += increment the number
// return sum 

const addUp = (num) => {
   let sum = 0
   for(let i = 1; i<= num ; i++)
    sum += i;
   return sum
}
console.log("This incremented number is", addUp(6888))
 

let a = 10;
let b = 9;
let sum = a + b

console.log(sum)


// Create 2 variables and assign them a number that when subtracted totals 12

// Then write an operation that subtracts the two variables and console log the answer. 

let a1 = 22;
let b1 = 10;
let subtract = a1 - b1
console.log(subtract)


// Create 2 variables and assign them a number that when multiplied totals 54

// Then write an operation that multiplies the two variables and console log the answer. 

let a2 = 10.8;
let b2 = 5;
let multiplies = a2 * b2
console.log(multiplies)


// Create an if...else statement to see if Vitoria is an adult. 
let vitoriaAge = 26

if(vitoriaAge > 18){
    console.log("Vitoria is an adult")
}else{
    console.log("Vitoria is not an adult")
}


//Create an if...else statement to see if Matt is old enough to drink. 

const age = 20
if(age < 21){
    console.log ("No booze")
}else{
    console.log("Booze")
}


let weather = 'rainy'

let bringUmbrella = (weather = 'rainy') ? 'yes' : 'no'

console.log(bringUmbrella)


//Write a function that adds two numbers together and console log the result


function addNumbers (num1, num2){
    let sum = num1 + num2
    return sum
}
console.log(addNumbers(5,6))


// Write a function called myFunction pass in 2 parameters and return the product of 2 numbers. console log the retur
//n

function myFunction ( num1, num2){
    let result = num1 * num2
    return result
}
console.log(myFunction(10,5))


// Write a function that takes the base and height of a triangle and return its area.

function triangleArea2 (heigh , base){
    let area = (heigh * base)/2
    return area

}
console.log("This is the triangle area: ", triangleArea2(12, 7))



// write a function that can tell if Todd can drink or not. Console log name with "can drink" if true and "can't drink" if false

       
 
// 0- function name checkAdultAge
// 1- use conditional to verify if > 21 return true
// 3- if not return fasle

function checkAdultAge(age){
    if( age >= 21) 
    return true
    console.log("Tod can drink")
}
console.log(" Tod can drink is : " ,checkAdultAge(45))
