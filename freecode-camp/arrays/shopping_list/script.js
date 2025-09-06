console.log("Grocery shopping list");

let shoppingList = [];

console.log("It will be nice to have some fruit to eat.");

shoppingList.push('Apples');

function getShoppingListMsg(listShop){
    return `Current shopping list: ${listShop}`
}

shoppingList.push("Grapes");
console.log(getShoppingListMsg(shoppingList));

console.log("It looks like we need to get some cooking oil.");
shoppingList.unshift("Vegetable Oil");
console.log(getShoppingListMsg(shoppingList));
shoppingList.push("Popcorn", "Beef Jerky", "Potato Chips");
console.log(getShoppingListMsg(shoppingList));

console.log("This looks like too much junk food.");
shoppingList.pop();
console.log(getShoppingListMsg(shoppingList));

console.log("It might be nice to get a dessert.");
shoppingList.unshift("Chocolate Cake");
console.log(getShoppingListMsg(shoppingList));

console.log("On second thought, maybe we should be more health conscious.");
shoppingList.shift();
shoppingList[0] = "Canola Oil";
console.log(getShoppingListMsg(shoppingList));