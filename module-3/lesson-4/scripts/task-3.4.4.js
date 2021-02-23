objRecipe = {
    recipeTitle:'Beans on toast',
    servings: 'One',
    ingredients: [
        'Baked Beans',
        'Bread',
        'Butter',
        'Black Pepper'
    ],
    directions:[
        'Empty tin of beans into pan',
        'Put bread in toaster and toast until golden brown',
        'Butter the toast',
        'Place beans on top of buttered toast',
        'Apply black pepper to taste',
    ]
};

console.log(objRecipe.recipeTitle);
console.log(objRecipe.servings);
for(counter = 0; counter < objRecipe.ingredients.length; counter++){
    let ingredient = objRecipe.ingredients[counter];
    console.log(ingredient);
}
for(counter = 0; counter < objRecipe.directions.length; counter++){
    let direction = objRecipe.directions[counter];
    console.log(direction);
}