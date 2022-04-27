// 1.Create a function that will retunr an integer of the number of vowels found in the string
const myString = ('Mymanone')
const findNumberOfVowels = (str) => {
    let count = 0;
    for ( let i = 0; i < str.length ; i++){
        let result = str.charAt(i);
        if( result == 'a' || result == 'e' || result == 'i' || result == 'o' || result == 'u' || result == ' '){
            count++;
        }
        
    }
   return count
}
console.log( 'The number of Vowel is :',findNumberOfVowels(myString))


const findVowelQty = (str1) => {
    let vowels = 'aeiouAEIOU'
    let vowelCount = 0
    for (let i = 0; i < str1.length ; i++){
    if(vowels.indexOf(str1[i]) !== -1){
        vowelCount++

    }
    }
    return vowelCount
}
console.log( 'The number of vowels is ',findVowelQty("I love my country"))




// 2. Create a function that filter out negative given an array of numbers






// 3. Create a function that calculates the sum of odd numbers grather than ten and less than 30