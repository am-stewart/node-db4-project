exports.seed = function(knex, Promise) {
    return knex('ingredients').insert([
        { ingredient_name: 'bread'},
        { ingredient_name: 'butter'},
        { ingredient_name: 'milk'},
        { ingredient_name: 'cereal'},
        { ingredient_name: 'protein powder'}
    ])
};