const addNumber = ( a,  b ) => { 
    return a + b
    } 
    console.log(addNumber(8 , 9))



 // write a function that takes an array of students an list out last names
// input 
let testStudents = [{firstName:"Tyler" , lastName:"Jeferson"},{firstName:"Jacques" , lastName:"Laguerre"},{firstName:"Donald" , lastName:"Guerrier"},{firstName:"Will", lastName:"smith"},{firstName:"John", lastName:"Davidson"}]
// output: [Jeferson, Laguerre, Guerrier, Smith, Davidson]
    
const getStudentsLastName = (students)=> {
    let newArray = []
    for(let i=0; i < students.length; i++){
      newArray.push(students[i].lastName )
    }
        return newArray
    }

    console.log(getStudentsLastName(testStudents))