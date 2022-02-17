const db = require('../../data/db-congif')

async function getByRecipeId(recipe_id) {
    const result = await db('recipes as r')
        .leftJoin('')
}

module.exports = {
    getByRecipeId
}