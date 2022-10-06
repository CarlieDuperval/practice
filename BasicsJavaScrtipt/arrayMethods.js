const sentence = "Hello World, Good Morning Boca Code"


// Split method
//console.log(sentence.length)

const arrayLetters = sentence.split("")

//console.log(arrayLetters)

const arrayOfWord = sentence.split(" ") 
//console.log(arrayOfWord)


// Push Method add at the end

let countries  = ['Haiti', 'Brasil', 'USA' , 'Ukraine']
// console.log(countries)
// countries.push('Peach')
// console.log(countries)


// pop() method  remove the last element 
const olCountry = countries.pop()
console.log(olCountry)
console.log(countries)


// shift() method : remove
const olCountry2 = countries.shift()
console.log(countries)



// unshift() add to the front 
const olCountry3 = countries.unshift('Columbia', 'Venezuela', 'China', 'HAITI')
console.log(countries)


// Spread Operator

countries = ['Mexico', ...countries, 'Argentina']
//console.log(countries)



let students = ['Carlie', 'Maria', 'Harlie' , 'Darie']

console.log(students.indexOf('Maria'))


console.log(`My students are: ${students.join(" , ")}`)