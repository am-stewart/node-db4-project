exports.seed = function(knex, Promise) {
    return knex('recipes').insert([
        { recipe_name: 'toast' },
        { recipe_name: 'cereal' },
        { recipe_name: 'protein shake' }
    ])
}