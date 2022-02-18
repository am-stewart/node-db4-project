exports.seed = function(knex, Promise) {
    return knex('steps').insert([
        {step_instructions: 'toast bread to desired doneness', step_number: 1, recipe_id: 1},
        {step_instructions: 'spread butter on toast', step_number: 2, recipe_id: 1},
        {step_instructions: 'add cereal to bowl', step_number: 1, recipe_id: 2},
        {step_instructions: 'add milk to bowl with cereal', step_number: 2, recipe_id: 2},
        {step_instructions: 'add protein power to shaker bottle', step_number: 1, recipe_id: 3},
        {step_instructions: 'add milk to shaker bottle with powder', step_number: 2, recipe_id: 3},
        {step_instructions: 'shake bottle until smooth', step_number: 3, recipe_id: 3}
    ])
};