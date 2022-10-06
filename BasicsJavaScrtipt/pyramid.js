// let line = "#"
// let numberOfHashes = 5
// for (let i = 1; i<= numberOfHashes; i++){
//     console.log(line)
//     line = line + "#"
// }



function generatePyramid() {
    var totalNumberofRows = 5;
    var output = '';
    for (var i = 1; i <= totalNumberofRows; i++) {
        for (var j = 1; j <= i; j++) {
            output += j + '  ';
        }
        console.log(output);
        output = '';
    }
}

generatePyramid();


const printPyramid = (n) => {
    let arr = []
    for(let i= 0; i<n; i++){
       for (let j = i+1; j<=i; j++){
         arr.push(j)
         console.log(j)
       }
       console.log("\n")
    }

    

} 
printPyramid(5)





const generatePyramid1 = (number) =>{
    let res = '';
    for (let i = 1; i <= number; i++) {
        for (let j = 1; j <= i; j++) {
            res += j + '  ';
        }
        console.log(res);
        res = '';
    }
}

generatePyramid1(8);


// let result = '#'
// for ( let i = 0; i < 5 ; i++){
//     console.log(result)
//     result += "#"
// }

