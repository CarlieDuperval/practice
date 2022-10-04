let marvel = ["Fruit", "Vegetables"];
marvel[100] = "Tomato";
// console.log(marvel.length)
// console.log(marvel)

const fruits = ["Banana", "Orange", "Blue-Berry", "Prune", "Apple"];

//console.log(`My array has ${fruits.length} Fruits`)

let playersNumbers = [12, 34, 54, 65, 23];

//console.log(playersNumbers[0] + playersNumbers[1]);

let students = [
  {
    name: "Bob",
    age: 24,
    awesome:true
  },
  {
    name: "Carlie",
    age: 22,
  },
  {
    name: "Harlie",
    age: 12,
  },
];
const firstStudent = students[0]
const secondStudent = students[1]

// console.log(firstStudent)
// console.log(secondStudent)

console.log(firstStudent.name)
console.log(students[1].name)

const { age, name, awesome} = students[0]
console.log("First student's name is" , name, age, awesome)
console.log(`First Student's name id : ${name} and They are ${age} years old and is ${awesome}`)