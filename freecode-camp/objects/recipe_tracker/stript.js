let recipes = [];

const recipe1 = {
    name: "Spaghetti Carbonara",
    ingredients: ["spaghetti", "Parmesan cheese", "pancetta", "black pepper"],
    ratings: [4, 5, 4, 5],
    cookingTime: 22,
    totalIngredients: null,
    difficultyLevel: "",
    averageRating: null
}

const recipe2 = {
    name: "Chicken Curry",
    ingredients: ["chicken breast", "coconut milk", "curry powder", "onion", "garlic"],
    ratings: [4, 5, 5, 5],
    cookingTime: 42,
    totalIngredients: null,
    difficultyLevel: "",
    averageRating: null
}

const recipe3 = {
  name: 'Vegetable Stir Fry',
  ingredients: ['broccoli', 'carrot', 'bell pepper'],
  cookingTime: 15,
  totalIngredients: null,
  difficultyLevel: '',
  ratings: [4, 3, 4, 5],
  averageRating: null,
};

recipes.push(recipe1, recipe2, recipe3);

function getAverageRating(notas){
    return (notas[0]+ notas[1]+ notas[2]+ notas[3])/notas.length;
};

console.log(getAverageRating(recipe1.ratings));
console.log(getAverageRating(recipe2.ratings));
console.log(getAverageRating(recipe3.ratings));
