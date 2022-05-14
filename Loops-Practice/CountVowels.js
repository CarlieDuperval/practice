//Create a function that takes a string and returns the number (count) of vowels contained within it.

// Examples
// countVowels("Celebration") ➞ 5

// countVowels("Palm") ➞ 1

// countVowels("Prediction") ➞ 4
// Notes
// a, e, i, o, u are considered vowels (not y).
// All test cases are one word and only contain letters.

const vowels = ["a", "e", "i", "o", "u"];
const countVowels = (str) => {
  const newArr = str.split("");
  let valCount = 0;
  for (let i = 0; i < newArr.length; i++) {
    const currentCharacter = newArr[i];
    if (vowels.indexOf(currentCharacter) !== -1) {
      valCount ++;
    }
  }
  return valCount;
};
console.log(countVowels("carlie ritchell duperval "));
