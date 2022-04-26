// 1. Write a function named assignGrade that takes one argument, a number score.
// Returns a grade for the score, either  "A," "B," "C," "D," or "F." Call that function for a few different scores and log the result to make sure it works.

// 0. write function take in number (num)
// 1. need a condition
// 2. return

function assignGrade(score) {
  let grade = ["A", "B", "C", "D", "F"];
  if (score >= 90) {
    return grade[0];
  } else if (score > 79 && score < 90) {
    return grade[1];
  } else if (score > 69 && score < 80) {
    return grade[2];
  } else if (score > 59 && score < 70) {
    return grade[3];
  } else {
    return grade[4];
  }
}



console.log("Your Grade is:", assignGrade(90))

function assignGrade1(score) {
  if (score > 90) {
    return "A";
  } else if (score >= 80) {
    return "B";
  } else if (score >= 70) {
    return "C";
  } else if (score >= 60) {
    return "D";
  } else {
    return "F";
  }
}

console.log("Your grade is:", assignGrade1(80));
console.log('Your grade is:', assignGrade1(35));


// Create a function which returns the number of true values there are in an array.
const testArray = [ true, false, false, true, false, false, false, true, true, true, false ]

function checkTrueValue(arr) {
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === true) {
      result++;
    }
  }
  return result;
}
console.log(checkTrueValue(testArray));





// Pyramid problem:
// print:  (using a loop)
// #
// ##
// ###
// ####
// #####

let result = '#'
for ( let i = 0; i < 5 ; i++){
    console.log(result)
    result += "# "

}