console.log('Hello World')

let fruit = [ 'mango', 'apple', 'pineapple', 'loquat', 'oranges' , 'avocado']

// Add  strawberry to the end
let addNewFruit = fruit.push('strawberry')
console.log(`Just added `,addNewFruit)
console.log(`They are fruits`, ...fruit)

// Remove the last item
let removeLastItem = fruit