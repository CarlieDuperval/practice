//Given an array of items called shoppingList e.g ["Milk", "Bread", "eggs"] and an array of items called cart e.g ["beer", "Chips", "Salsa", "Milk"] create a new list of items in shoppingList that are not in list

const shoppingList = ["Milk", "Bread", "eggs"]
const cart = ["beer", "Wine", "Chips", "Bread"]


const newList = shoppingList.filter(item => !cart.includes(item))

console.log(newList)