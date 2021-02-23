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
    ],
    letsCook: function(){
        console.log("I'm hungry let cook " + this.recipeTitle);
    },
};

objRecipe.letsCook();