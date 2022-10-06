// let line = "#"
// let numberOfHashes = 5
// for (let i = 1; i<= numberOfHashes; i++){
//     console.log(line)
//     line = line + "#"
// }


const printPyramid = (n) => {
    let result = n 
    for(let i= 0; i< 10; i++){
       n += n
    }
    return result

} 
console.log(printPyramid("@"))


// let result = '#'
// for ( let i = 0; i < 5 ; i++){
//     console.log(result)
//     result += "#"
// }

