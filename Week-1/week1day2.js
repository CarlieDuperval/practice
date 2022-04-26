/////// template literal

let school = 'Wispering Pines'
let school2 = 'Olympic Heigh'

console.log(`${school}  ${school2}`)// Wispering Pines  Olympic Heigh


console.log(`My son's school name is ${school}. My daughter's school name is ${school2}`)       // print :  My son's school name is Wispering Pines. My daughter's school name is Olympic Heigh

const kidsSchoolName = `My son's school name is ${school}. My daughter's school name is ${school2}`

console.log(kidsSchoolName) //  print :  My son's school name is Wispering Pines. My daughter's school name is Olympic Heigh




/////// concatination
let animalName = 'Puffy'
let parentName = 'Aloulou'
let age = 45
console.log(animalName + parentName + age) // PuffyAloulou45

console.log(animalName + " ," + parentName + "," + " " + age) // Puffy ,Aloulou, 45



let num12 = 34
let str = '23'
console.log(num12 + str) //  '3423'



console.log('10' + 12)



//////// String Properties

// .lenght property : return the number of caracters
  console.log(kidsSchoolName.length)// 83 


// toUpperCase  && toLoweCase 
  let mail1 = 'carlieritchell@aol.com'
  let mail2 = 'CARLIERITCHELL@AOL.COM' // mail1!= mail2

console.log(mail2.toLowerCase(mail1)) //carlieritchell@aol.com
console.log(mail1.toUpperCase(mail2)) // CARLIERITCHELL@AOL.COM

//.trim() : remove blank space at the beginning or the end
let exmaple = 'I have no idee!        '
let  exmaple1 = '      Darie is awesome'
let aboutMe = "      I'm amazing.       "
console.log(exmaple.trimEnd())
console.log(exmaple1.trimStart())
console.log(aboutMe.trim())


// .replace
let motivation = 'This cohort is amazing , There are more than 21 rock stars'
console.log(motivation.replace('This cohort', 'Carlie')) // Carlie is amazing , There are more than 21 rock stars


// .substring()
console.log(motivation.substring(0, 23)) // This cohort is amazing

// indexOf
let motivation2 = 'This cohort is amazing'
let exmaple2 = 'cohort'
console.log(motivation2.indexOf(exmaple2))



let str1 = 'Hello Level Up students!'
let searchTerm = 'Level'
console.log(str1.indexOf(searchTerm))

   
    
  








