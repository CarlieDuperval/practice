//Write a function that counts down from 10 to 1 and return an array:

const countDown = () => {
    let array =[]
  for (let i = 10; i > 0; i--) {
    console.log(i)
    array.push(i)
  }
  return(array)
}

//console.log(countDown())




//Write a function that counts
// down from 15 to 1
const countNumberDown = ()=> {
  for(let i = 15; i > 0; i--){
  console.log(i)
  }
}
countNumberDown()


const countDown1 = () => {
  let arr = []
  for(let i = 10; i > 0; i--){
    arr.push(i)
  }
  return arr

  }
  console.log(countDown1())