//Write a function that counts down from 10 to 1 and return an array:

const countDown = () => {
    let array =[]
  for (let i = 8; i >= 0; i--) {
    //console.log(i)
    array.push(i)
  }
  return(array)
}

console.log(countDown())




//Write a function that counts
// down from 15 to 1
const countNumberDown = ()=> {
  for(let i = 15; i > 0; i--){
  console.log(i)
  }
}
//countNumberDown()


const countDown1 = () => {
  let arr = []
  for(let i = 10; i >= 0; i--){
    arr.push(i)
  }
  return arr

  }
  //console.log(`The count down is:`,countDown1())


  const countdown2 = (number) => {
    let arrayCount = [];
    for(let i = number; i >= 0; i--) {
        arrayCount.push(i)
    }
  return arrayCount
  }
  console.log(`Maria count down is`,countdown2(11));