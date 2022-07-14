// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
 

// Example 1:

// Input: s = "()"
// Output: true
// Example 2:

// Input: s = "()[]{}"
// Output: true
// Example 3:

// Input: s = "(]"
// Output: false

// Check if valid
//  string = "()"
// loop inside the string if i = (  && i+1 = ) True
//   j=i+2  if  j = [  && j+1 = ] True
//   k=j+2  if k = {  && k+1 = }  true



const isValid = (s) => {
    if(s  == " "){
        return true
    }
    if (s.length < 2){
        return false
    }
    const pairBrackets = {
       "{": "}",
       "(": ")",
       "[" : "]"
    }
    let stack = []
    let arr = s.toString().split("")
    for(let i= 0; i < arr.length; i++){
        let bracket = arr[i]
        if(pairBrackets[bracket]){
            stack.push(bracket)
        }
        else{
            let checkBrk = stack.pop()
            if(pairBrackets[checkBrk] !== bracket){
                return false
            }
        }
    }
    if( stack.length > 0){
        return false
    }
    return true
}
console.log(isValid("{[]}"))
console.log(isValid("(]"))