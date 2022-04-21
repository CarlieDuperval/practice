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
  } else if (score > 59 && score < 69) {
    return grade[3];
  } else {
    return grade[4];
  }
}



console.log("Your Grade is:", assignGrade(90))

function assignGrade1(score) {
  if (score > 90) {
    return "A";
  } else if (score > 80) {
    return "B";
  } else if (score > 70) {
    return "C";
  } else if (score > 65) {
    return "D";
  } else {
    return "F";
  }
}

console.log("Your grade is:", assignGrade1(80));
//console.log('Your grade is:', assignGrade1(35));
