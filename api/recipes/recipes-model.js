const db = require('../../data/db-congif')

async function getByRecipeId(recipe_id) {
    const result = await db('recipes as r')
        .leftJoin('steps as s', 'r.recipe_id', 's.recipe_id')
        .where('r.recipe_id', recipe_id)
        .select('r.*', 's.*')
    
        const recipe = {
            recipe_id: result[0].recipe_id,
            recipe_name: result[0].recipe_name,
            created_at: result[0].created_at,
            steps: []
        };

        if (result[0].step_id === null) {
            return recipe
        }

        for (let step of result) {
            recipe.steps.push({
                step_id: step.step_id,
                step_number: step.step_number,
                step_instructions: step.step_instructions,
                ingredients: []
            })
        }
    return recipe;
}

module.exports = {
    getByRecipeId
}