console.log("Grocery shopping list");

let shoppingList = [];

console.log("It will be nice to have some fruit to eat.");

shoppingList.push('Apples');

function getShoppingListMsg(listShop){
    return `Current shopping list: ${listShop}`
}

console.log(getShoppingListMsg(shoppingList));