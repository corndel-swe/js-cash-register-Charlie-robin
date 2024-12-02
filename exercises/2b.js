/**
 * Given an array of recipes, return a new array of strings containing
 * the name of each recipe
 */
function listNames(recipes) {
  const names = recipes.map((recipe) => {
    console.log("---")
    console.log(recipe.name)
    return recipe.name;
  });

  return names;
}

// array provided for debugging:
const recipes = [
  {
    name: "Spaghetti Bolognese",
    ingredients: ["spaghetti", "beef", "tomato sauce"],
    servings: 4,
    isVegetarian: false,
  },

  {
    name: "Vegetable Stir Fry",
    ingredients: ["broccoli", "carrots", "bell peppers", "soy sauce"],
    servings: 2,
    isVegetarian: true,
  },
];

const result = listNames(recipes);

console.log(result);

// don't change below
export default listNames;
